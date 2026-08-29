import { onMounted, onUnmounted } from 'vue'

/**
 * useScrollReveal implements native IntersectionObserver to toggle
 * classes on elements, ensuring 60fps animations without VDOM thrashing
 * or heavy GSAP loads, fully complying with maya-design performance rules.
 */
export function useScrollReveal(selector = '.scroll-reveal') {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    // Only run on client
    if (typeof window === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            // Optionally stop observing once revealed
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px 0px -50px 0px' // Slightly before it reaches viewport bottom
      }
    )

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => observer!.observe(el))
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
