<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'
import { useParallax } from '~/composables/useParallax'
import { NAV_LINKS } from '~/constants/data'

useScrollReveal('.hero-reveal')
useParallax('.parallax-hero-img', 0.15)
</script>

<template>
  <section class="relative min-h-[100dvh] bg-root pt-8 md:pt-12 pb-6 px-4 md:px-8 flex flex-col items-center overflow-hidden">
    
    <!-- Massive Text (Left-aligned, edge-to-edge) -->
    <div class="w-full max-w-[1800px] mx-auto flex justify-start hero-reveal">
      <h1 class="font-display font-bold leading-[0.8] tracking-tighter text-surface-dark uppercase whitespace-nowrap text-[17vw] xl:text-[16vw]">
        MANAGIA
      </h1>
    </div>

    <!-- 3 Column Info Row -->
    <div class="w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-8 md:mt-12 px-2 hero-reveal" style="transition-delay: 100ms;">
      
      <!-- Left: Description -->
      <div class="text-left">
        <p class="font-sans text-xs md:text-sm text-surface-dark/80 font-medium leading-relaxed max-w-[280px]">
          A collective of MBA students redefining what a club can be. We build, we host, we play. We do everything.
        </p>
      </div>

      <!-- Center: CTA Button -->
      <div class="flex justify-start md:justify-center">
        <UiBaseButton to="https://forms.gle/managia-join-form" variant="primary" size="md">
          Get in Touch
        </UiBaseButton>
      </div>

      <!-- Right: Links -->
      <div class="flex flex-wrap justify-start md:justify-end gap-x-6 gap-y-2 font-sans text-[10px] md:text-xs font-bold tracking-widest uppercase text-surface-dark">
        <NuxtLink 
          v-for="link in NAV_LINKS" 
          :key="link.href" 
          :to="link.href" 
          class="hover:text-accent transition-colors relative group"
        >
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </NuxtLink>
      </div>
      
    </div>

    <!-- Two Column Layout (90/10) -->
    <div class="w-full max-w-[1800px] mx-auto mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-[9fr_1fr] gap-8 items-stretch min-h-[40vh] md:min-h-[50vh] hero-reveal" style="transition-delay: 200ms;">
      
      <!-- Left: DomeGallery (70%) -->
      <div class="relative w-full h-full min-h-[40vh] md:min-h-[60vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-[#000000] group">
        <UiDomeGallery :grayscale="false" :segments="25" />
      </div>

      <!-- Right: Spinning Logo (10%) -->
      <div class="relative w-full h-full min-h-[40vh] md:min-h-[60vh] flex items-end justify-start pb-4 md:pb-8 group">
        <!-- Circular Badge with Micro-Interactions -->
        <div class="w-32 h-32 md:w-40 md:h-40 bg-root rounded-full flex items-center justify-center shadow-card z-20 cursor-pointer group/badge hover:scale-110 transition-transform duration-500 ease-out">
          <svg class="w-full h-full text-surface-dark animate-[spin_15s_linear_infinite] group-hover/badge:[animation-play-state:paused]" viewBox="0 0 100 100">
            <path id="curve" fill="transparent" d="M 50 15 A 35 35 0 1 1 49.9 15" />
            <text class="font-mono text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase" fill="currentColor">
              <textPath href="#curve" startOffset="0%">
                Innovation • Community • Culture • 
              </textPath>
            </text>
          </svg>
          <!-- Center Logo in Badge -->
          <img src="/logo-dark.svg" class="absolute w-10 h-10 md:w-12 md:h-12 opacity-90 group-hover/badge:rotate-[360deg] group-hover/badge:scale-110 transition-all duration-700 ease-out" alt="Logo" />
        </div>
      </div>
    </div>

  </section>
</template>
