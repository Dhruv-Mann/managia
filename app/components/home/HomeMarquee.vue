<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const track = ref<HTMLElement | null>(null)
let animationFrameId = 0
let position = 0
let currentScrollY = 0
let lastScrollY = 0

const onScroll = () => {
  currentScrollY = window.scrollY
}

const render = () => {
  if (track.value) {
    // Calculate scroll velocity (difference between current and last scroll)
    const scrollDelta = currentScrollY - lastScrollY
    lastScrollY = currentScrollY

    // Base speed + scroll boost. If scrolling down (positive delta), it speeds up going left.
    // If scrolling up (negative delta), it slows down or reverses briefly.
    position += 1.5 + (scrollDelta * 0.8)

    // Get exactly half the scroll width for a perfect seamless loop
    const halfWidth = track.value.scrollWidth / 2
    
    if (halfWidth > 0) {
      // mathematically safe modulo for negative numbers (in case of fast upward scrolling)
      const offset = ((position % halfWidth) + halfWidth) % halfWidth
      
      // Direct DOM Bypass for 1:1 60fps interaction
      track.value.style.transform = `translate3d(-${offset}px, 0, 0)`
    }
  }
  animationFrameId = requestAnimationFrame(render)
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', onScroll, { passive: true })
    currentScrollY = window.scrollY
    lastScrollY = window.scrollY
    render()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', onScroll)
    cancelAnimationFrame(animationFrameId)
  }
})

const marqueeWords = ['BUILD', 'HOST', 'PLAY', 'MANAGIA']
</script>

<template>
  <section class="bg-root py-20 md:py-32 overflow-hidden border-t border-surface-dark/10">
    <!-- 
      We duplicate the inner block twice. 
      The JS loop will translate it left until it reaches exactly 50% width, 
      then instantly snap back to 0. 
    -->
    <div ref="track" class="flex whitespace-nowrap will-change-transform">
      <div v-for="i in 2" :key="`marquee-block-${i}`" class="flex items-center px-4">
        <template v-for="j in 4" :key="`item-${i}-${j}`">
          <!-- Text -->
          <span class="font-display text-[22vw] md:text-[20vw] font-black tracking-[-0.04em] leading-[0.8] text-surface-dark uppercase pr-6 md:pr-12">
            {{ marqueeWords[j - 1] }}
          </span>
          <!-- Separator Dot -->
          <span class="font-sans text-[8vw] md:text-[6vw] text-accent pr-6 md:pr-12 -translate-y-2 md:-translate-y-4">
            &bull;
          </span>
        </template>
      </div>
    </div>
  </section>
</template>
