<template>
  <div 
    class="relative inline-block font-mono group z-0 select-none pointer-events-auto cursor-crosshair"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- We render directly to a Canvas for 60fps hardware-accelerated math -->
    <canvas 
      ref="canvasRef" 
      class="transition-all duration-700 ease-out group-hover:scale-105"
      :style="{ width: `${actualWidth}px`, height: `${actualHeight}px` }"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = withDefaults(defineProps<{
  src: string
  width?: number // Resolution in characters
  fontSize?: number // Font size in pixels
  color?: string
  accentColor?: string
}>(), {
  width: 60,
  fontSize: 10,
  color: 'rgba(25, 25, 25, 0.4)', // text-surface-dark with opacity
  accentColor: '#8B5E3C' // accent brown
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
const isHovered = ref(false)

const actualWidth = ref(0)
const actualHeight = ref(0)

// Artistic ASCII palette (from dark to light)
const chars = [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@']

let animationFrameId = 0
let pixelData: Uint8ClampedArray | null = null
let cols = props.width
let rows = 0

// Setup the image data once
const prepareImage = () => {
  const img = new Image()
  img.crossOrigin = 'Anonymous'
  
  img.onload = () => {
    const hiddenCanvas = document.createElement('canvas')
    const ctx = hiddenCanvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return
    
    // Calculate aspect ratio. Characters are roughly twice as tall as they are wide.
    const ratio = img.height / img.width
    rows = Math.floor(cols * ratio * 0.5)
    
    hiddenCanvas.width = cols
    hiddenCanvas.height = rows
    
    // Draw scaled image to extract pixel data easily
    ctx.drawImage(img, 0, 0, cols, rows)
    pixelData = ctx.getImageData(0, 0, cols, rows).data
    
    // Set up display canvas
    if (canvasRef.value) {
      // High DPI display support
      const dpr = window.devicePixelRatio || 1
      // Standard monospace character aspect ratio is ~ 0.6 width to height
      const charWidth = props.fontSize * 0.6 
      const charHeight = props.fontSize
      
      actualWidth.value = cols * charWidth
      actualHeight.value = rows * charHeight
      
      canvasRef.value.width = actualWidth.value * dpr
      canvasRef.value.height = actualHeight.value * dpr
      
      const renderCtx = canvasRef.value.getContext('2d')
      if (renderCtx) {
        renderCtx.scale(dpr, dpr)
      }
    }
    
    // Start render loop
    if (!animationFrameId) {
      renderLoop()
    }
  }
  
  // Proxy the image URL to avoid Canvas CORS poisoning
  const isAbsolute = props.src.startsWith('http')
  img.src = isAbsolute ? `/api/proxy-image?url=${encodeURIComponent(props.src)}` : props.src
}

const renderLoop = () => {
  if (!canvasRef.value || !pixelData) return
  const ctx = canvasRef.value.getContext('2d')
  if (!ctx) return

  const time = performance.now() * 0.001
  const charWidth = props.fontSize * 0.6
  const charHeight = props.fontSize

  ctx.clearRect(0, 0, actualWidth.value, actualHeight.value)
  ctx.font = `${props.fontSize}px monospace`
  ctx.textBaseline = 'top'

  // The rendering math inspired by the landing-effects WebGL shader
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const i = (y * cols + x) * 4
      const r = pixelData[i]
      const g = pixelData[i + 1]
      const b = pixelData[i + 2]
      const a = pixelData[i + 3]

      if (a < 128) continue

      // 1. Luminance Calculation (0.299R + 0.587G + 0.114B)
      let lum = (r * 0.299 + g * 0.587 + b * 0.114) / 255

      // Automatic Background Removal (ignore bright white pixels from sketch)
      if (lum > 0.94) continue

      // Invert luminance so dark pencil lines become bright/dense characters
      lum = 1.0 - lum

      // 2. Depth Fade (Vignette) - distance from center
      const dx = (x / cols) - 0.5
      const dy = (y / rows) - 0.5
      const dist = Math.sqrt(dx * dx + dy * dy)
      const fade = Math.max(0.1, 1.0 - dist * 1.5)
      lum *= fade

      // 3. Reveal Wave & Glitch Hash
      const wave = Math.sin(dist * 15.0 - time * 3.0)
      
      // GLSL Hash function: fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453)
      const hash = Math.sin(x * 127.1 + y * 311.7) * 43758.5453
      const glitch = hash - Math.floor(hash)

      // Apply dynamic interactions
      if (isHovered.value) {
        // Increase glitch intensity on hover
        if (glitch > 0.95) lum += 0.8
        if (wave > 0.9) lum -= 0.5
      } else {
        // Subtle resting glitch
        if (glitch > 0.99) lum += 0.4
      }

      lum = Math.max(0, Math.min(1, lum))

      // 4. Posterization (binning luminance into steps matching our char array)
      const steps = chars.length
      // floor(lum * posterize + 0.5) / posterize  --> map to array index
      const charIdx = Math.floor(lum * (steps - 1))
      const char = chars[charIdx]

      if (char !== ' ') {
        // Subtle color shifting based on wave & hover state
        if (isHovered.value) {
          ctx.fillStyle = wave > 0.8 ? props.color : props.accentColor
        } else {
          // Resting state
          ctx.fillStyle = glitch > 0.99 ? props.accentColor : props.color
        }
        
        ctx.fillText(char, x * charWidth, y * charHeight)
      }
    }
  }

  animationFrameId = requestAnimationFrame(renderLoop)
}

onMounted(() => {
  prepareImage()
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})

watch(() => props.src, () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = 0
  }
  prepareImage()
})
</script>
