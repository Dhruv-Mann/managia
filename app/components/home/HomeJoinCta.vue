<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'
import { onMounted } from 'vue'

useScrollReveal('.scroll-reveal')
</script>

<template>
  <section class="bg-surface-dark text-text-light py-32 px-6 text-center flex flex-col items-center">
    <h2 class="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl scroll-reveal">
      Ready to be part of something?
    </h2>
    <p class="font-sans text-lg opacity-55 mt-6 max-w-xl scroll-reveal" style="transition-delay: 100ms;">
      Managia is open to everyone. All you need is the will to show up.
    </p>
    <div class="mt-10 scroll-reveal" style="transition-delay: 200ms;">
      <UiBaseButton to="https://forms.gle/managia-join-form" variant="primary">
        Join Managia
      </UiBaseButton>
    </div>
  </section>
</template>
