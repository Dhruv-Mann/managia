<template>
  <section class="py-24 px-6 md:px-12 lg:px-24 bg-root">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
      <div 
        v-for="(vertical, index) in WORK_VERTICALS" 
        :key="vertical.title"
        class="scroll-reveal"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <img 
          :src="vertical.image" 
          :alt="vertical.title"
          class="w-full h-64 object-cover rounded-xl"
        />
        <h3 class="font-display text-2xl mt-6 text-text-primary">{{ vertical.title }}</h3>
        <p class="font-sans text-base opacity-55 mt-3 max-w-md text-text-primary">{{ vertical.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { WORK_VERTICALS } from '~/constants/data'
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal('.scroll-reveal')
</script>
