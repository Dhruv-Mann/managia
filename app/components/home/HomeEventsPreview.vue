<script setup lang="ts">
import { GALLERY_IMAGES } from '~/constants/data'
import { computed } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

const collage = computed(() => GALLERY_IMAGES.slice(0, 4))

useScrollReveal('.scroll-reveal')
</script>

<template>
  <section class="bg-surface-dark text-text-light py-24">
    <div class="px-6 md:px-12 lg:px-24 scroll-reveal">
      <UiSectionHeader title="Our Events" mode="light" class="text-text-light" />
    </div>
    
    <div class="mt-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-6">
        <!-- 1: Mobile full width (col-span-2), Desktop spans 8 cols -->
        <div class="col-span-2 md:col-span-8 h-[200px] md:h-[400px] scroll-reveal rounded-2xl overflow-hidden group relative">
          <img :src="collage[0].src" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div class="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
            <span class="font-sans text-sm md:text-base font-semibold text-text-light tracking-wide">{{ collage[0].eventName }}</span>
          </div>
        </div>
        <!-- 2: Mobile 1 col, Desktop spans 4 cols -->
        <div class="col-span-1 md:col-span-4 h-[160px] md:h-[400px] scroll-reveal rounded-2xl overflow-hidden group relative" style="transition-delay: 100ms">
          <img :src="collage[1].src" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div class="absolute bottom-3 left-3 md:bottom-6 md:left-6 z-10">
            <span class="font-sans text-xs md:text-base font-semibold text-text-light tracking-wide">{{ collage[1].eventName }}</span>
          </div>
        </div>
        <!-- 3: Mobile 1 col, Desktop spans 5 cols -->
        <div class="col-span-1 md:col-span-5 h-[160px] md:h-[350px] scroll-reveal rounded-2xl overflow-hidden group relative" style="transition-delay: 200ms">
          <img :src="collage[2].src" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div class="absolute bottom-3 left-3 md:bottom-6 md:left-6 z-10">
            <span class="font-sans text-xs md:text-base font-semibold text-text-light tracking-wide">{{ collage[2].eventName }}</span>
          </div>
        </div>
        <!-- 4: Mobile full width (col-span-2), Desktop spans 7 cols -->
        <div class="col-span-2 md:col-span-7 h-[200px] md:h-[350px] scroll-reveal rounded-2xl overflow-hidden group relative" style="transition-delay: 300ms">
          <img :src="collage[3].src" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div class="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
            <span class="font-sans text-sm md:text-base font-semibold text-text-light tracking-wide">{{ collage[3].eventName }}</span>
          </div>
        </div>
      </div>
      
      <div class="mt-16 flex justify-center scroll-reveal" style="transition-delay: 400ms">
        <UiBaseButton to="/events" variant="ghost" class="text-text-light">
          View All Events →
        </UiBaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Empty style block to fix Vite HMR cache parsing issue after removing the previous one */
</style>
