<script setup lang="ts">
import { GALLERY_IMAGES } from '~/constants/data'
import { computed, onMounted } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

const previewImages = computed(() => GALLERY_IMAGES.slice(0, 6))

useScrollReveal('.scroll-reveal')
</script>

<template>
  <section class="bg-transparent py-24 px-6 md:px-12 lg:px-24 text-center">
    <div class="scroll-reveal">
      <UiSectionHeader title="Moments" class="flex justify-center" />
    </div>
    
    <div class="masonry-grid mt-16 scroll-reveal">
      <div 
        v-for="(image, index) in previewImages" 
        :key="image.id"
        class="masonry-item mb-6 relative group rounded-xl overflow-hidden scroll-reveal"
        :class="{
          'h-80': image.aspect === 'tall',
          'h-48': image.aspect === 'wide',
          'h-64': image.aspect === 'square'
        }"
        :style="{ transitionDelay: `${index * 80}ms` }"
      >
        <img 
          :src="image.src" 
          :alt="image.alt"
          class="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 text-left">
          <h4 v-if="image.eventName" class="font-display text-text-light text-lg">{{ image.eventName }}</h4>
          <p v-if="image.date" class="font-mono text-text-light/80 text-xs mt-1">{{ image.date }}</p>
        </div>
      </div>
    </div>
    
    <div class="mt-16 flex justify-center scroll-reveal">
      <UiBaseButton to="/gallery" variant="secondary">
        View Full Gallery
      </UiBaseButton>
    </div>
  </section>
</template>

<style scoped>
.masonry-grid {
  column-count: 1;
  column-gap: 1.5rem;
}
@media (min-width: 768px) {
  .masonry-grid {
    column-count: 2;
  }
}
@media (min-width: 1024px) {
  .masonry-grid {
    column-count: 3;
  }
}
.masonry-item {
  break-inside: avoid;
}
</style>
