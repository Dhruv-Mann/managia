<script setup lang="ts">
import { WORK_VERTICALS } from '~/constants/data'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { onMounted } from 'vue'

useScrollReveal('.scroll-reveal')
</script>

<template>
  <section class="relative bg-root py-24 px-6 md:px-12 lg:px-24">
    <UiSectionHeader title="What We Do" class="scroll-reveal relative z-10" />
    


    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
      <div 
        v-for="(vertical, index) in WORK_VERTICALS" 
        :key="vertical.title"
        class="scroll-reveal group"
        :style="{ transitionDelay: `${index * 80}ms` }"
      >
        <h3 class="font-display text-2xl text-text-primary">
          {{ vertical.title }}
        </h3>
        <p class="font-sans text-base opacity-70 mt-4 text-text-primary leading-relaxed">
          {{ vertical.description }}
        </p>
      </div>
    </div>

  </section>
</template>
