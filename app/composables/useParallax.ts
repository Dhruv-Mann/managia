import { onMounted, onUnmounted } from 'vue'

/**
 * useParallax implements highly performant parallax scrolling effects
 * using Direct DOM Bypass and requestAnimationFrame, completely skipping
 * Vue's VDOM diffing for extreme 60fps performance as per AGENTS.md.
 */
export function useParallax(selector = '.parallax-img', speed = 0.3) {
  let elements: HTMLElement[] = []
  let ticking = false

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateParallax()
        ticking = false
      })
      ticking = true
    }
  }

  const updateParallax = () => {
    const scrolled = window.scrollY
    
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i]
      // Get element position relative to viewport
      const rect = el.getBoundingClientRect()
      
      // Only animate if the element is somewhat in or near the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Calculate offset based on how far down the page we've scrolled
        // We use the element's top position from the document top to create a stable anchor
        const elementTop = rect.top + scrolled
        const offset = (scrolled - elementTop + window.innerHeight / 2) * speed
        
        // Direct DOM Bypass: Update transform style directly
        el.style.transform = `translateY(${offset}px)`
      }
    }
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    
    // Grab all elements and typecast them
    elements = Array.from(document.querySelectorAll(selector)) as HTMLElement[]
    
    // Add scroll listener
    window.addEventListener('scroll', onScroll, { passive: true })
    
    // Initial calculation
    updateParallax()
  })

  onUnmounted(() => {
    if (typeof window === 'undefined') return
    window.removeEventListener('scroll', onScroll)
  })
}
