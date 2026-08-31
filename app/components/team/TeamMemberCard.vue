<template>
  <article class="relative bg-surface-dark rounded-2xl overflow-hidden group flex flex-col justify-end w-full h-full shadow-card hover:shadow-card-hover transition-shadow duration-300">
    
    <!-- Background Image with Parallax/Scale effect on hover -->
    <div class="absolute inset-0 w-full h-full overflow-hidden">
      <img 
        :src="member.image" 
        :alt="member.name"
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </div>
    
    <!-- Gradient Overlay (Darkens on hover for better text readability) -->
    <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
    
    <!-- Content Layer -->
    <div class="relative z-10 p-6 md:p-8 flex flex-col justify-end">
      
      <!-- Static Headers -->
      <h3 class="font-display text-2xl text-text-light mb-1">{{ member.name }}</h3>
      <p class="font-sans text-sm text-accent font-medium uppercase tracking-wider">{{ member.role }}</p>
      
      <!-- Expandable Bio (Reveals on Hover) -->
      <div class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
        <div class="overflow-hidden">
          <p class="font-sans text-sm text-text-light/80 mt-4 leading-relaxed">
            {{ member.bio }}
          </p>
          

        </div>
      </div>
      
    </div>
  </article>
</template>

<script setup lang="ts">
import type { TeamMember } from '~/types'

defineProps<{
  member: TeamMember
}>()
</script>
