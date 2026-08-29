<script setup lang="ts">
import { EVENTS } from '~/constants/data'
import { computed, onMounted } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

const upcomingEvents = computed(() => EVENTS.filter(e => !e.isPast))

useScrollReveal('.scroll-reveal')
</script>

<template>
  <section class="bg-surface-dark text-text-light py-24">
    <div class="px-6 md:px-12 lg:px-24 scroll-reveal">
      <UiSectionHeader title="Upcoming Events" mode="light" class="text-text-light" />
    </div>
    
    <div class="mt-16 flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 md:px-12 lg:px-24 gap-6 pb-8">
      <div 
        v-for="(event, index) in upcomingEvents" 
        :key="event.id"
        class="w-[85vw] md:w-[400px] flex-none snap-center scroll-reveal"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <div class="relative">
          <img 
            :src="event.image" 
            :alt="event.title" 
            class="w-full h-56 rounded-xl object-cover grayscale contrast-125"
          />
          <div class="absolute top-4 left-4 bg-accent text-text-light font-mono text-xs px-3 py-1.5 rounded-lg shadow-elevated">
            {{ event.date }}
          </div>
        </div>
        <div class="mt-6">
          <h3 class="font-display text-xl">{{ event.title }}</h3>
          <p class="font-sans text-sm opacity-55 mt-2 line-clamp-2">
            {{ event.description }}
          </p>
        </div>
      </div>
      
      <div class="w-[85vw] md:w-[300px] flex-none snap-center flex items-center justify-center scroll-reveal">
        <UiBaseButton to="/events" variant="ghost" class="text-text-light">
          View All Events →
        </UiBaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
