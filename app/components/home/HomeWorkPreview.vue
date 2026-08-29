<script setup lang="ts">
import { WORK_VERTICALS } from '~/constants/data'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { onMounted } from 'vue'

useScrollReveal('.scroll-reveal')
</script>

<template>
  <section class="relative bg-root py-24 px-6 md:px-12 lg:px-24">
    <UiSectionHeader title="What We Do" class="scroll-reveal relative z-10" />
    


    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative z-10">
      <div 
        v-for="(vertical, index) in WORK_VERTICALS" 
        :key="vertical.title"
        class="scroll-reveal group"
        :style="{ transitionDelay: `${index * 80}ms` }"
      >
        <img 
          :src="vertical.image" 
          :alt="vertical.title" 
          class="w-full h-48 rounded-xl object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
        />
        <h3 class="font-display text-xl mt-6 text-text-primary">
          {{ vertical.title }}
        </h3>
        <p class="font-sans text-sm opacity-55 mt-2 text-text-primary">
          {{ vertical.description }}
        </p>
      </div>
    </div>
    <div class="mt-16 flex justify-end scroll-reveal">
      <UiBaseButton to="/work" variant="ghost">
        Explore Our Work →
      </UiBaseButton>
    </div>
  </section>
</template>
