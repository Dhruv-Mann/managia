<template>
  <article class="bg-root rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
    <div class="relative h-52 w-full">
      <img 
        :src="event.image" 
        :alt="event.title"
        class="w-full h-full object-cover"
        :class="{ 'grayscale contrast-125': event.isPast }"
      />
      <div class="absolute top-4 left-4 bg-accent text-text-light rounded-lg px-3 py-1 font-mono text-xs">
        {{ event.date }}
      </div>
      <div class="absolute top-4 right-4 bg-surface-dark/80 text-text-light rounded-full px-3 py-1 font-sans text-xs uppercase">
        {{ event.category }}
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="font-display text-xl text-text-primary">{{ event.title }}</h3>
      <p class="font-sans text-sm opacity-55 mt-2 text-text-primary">{{ event.description }}</p>
      
      <div class="font-mono text-xs opacity-35 mt-4 text-text-primary flex justify-between items-center">
        <span>{{ event.location }}</span>
        <span>{{ event.time }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ClubEvent } from '~/types'

defineProps<{
  event: ClubEvent
}>()
</script>
