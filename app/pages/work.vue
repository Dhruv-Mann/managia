<template>
  <main>
    <section class="bg-surface-dark text-text-light pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto scroll-reveal">
        <h1 class="font-display text-5xl md:text-7xl font-bold">Our Work</h1>
        <p class="font-sans text-lg md:text-xl opacity-75 mt-6 max-w-2xl">
          Four verticals. One mission. Get things done.
        </p>
      </div>
    </section>

    <WorkVerticals />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import WorkVerticals from '~/components/work/WorkVerticals.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

useHead({
  title: 'Work  Managia'
})

useScrollReveal('.scroll-reveal')
</script>
