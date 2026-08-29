<template>
  <main class="min-h-screen bg-root pb-24">
    <section class="bg-surface-dark text-text-light pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto scroll-reveal">
        <h1 class="font-display text-5xl md:text-7xl font-bold">Gallery</h1>
      </div>
    </section>

    <section class="px-6 md:px-12 lg:px-24 pt-12">
      <div class="max-w-7xl mx-auto">
        <!-- Filters -->
        <div class="flex flex-wrap gap-3 mb-12 scroll-reveal">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            class="px-4 py-2 rounded-lg font-sans text-sm transition-colors duration-150 active:scale-95"
            :class="activeFilter === filter ? 'bg-accent text-text-light' : 'bg-surface-mid/10 text-text-primary hover:bg-surface-mid/20'"
          >
            {{ filter }}
          </button>
        </div>

        <!-- Masonry Grid -->
        <div class="masonry-grid">
          <div
            v-for="(image, index) in filteredImages"
            :key="image.id"
            class="masonry-item scroll-reveal mb-6"
            :style="{ transitionDelay: `${(index % 4) * 100}ms` }"
          >
            <div
              class="relative rounded-xl overflow-hidden group virtualize bg-surface-mid/10"
              :class="getHeightClass(image.aspect)"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />

              <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p v-if="image.eventName" class="font-display text-text-light text-lg">{{ image.eventName }}</p>
                <p v-if="image.date" class="font-mono text-text-light/70 text-xs mt-1">{{ image.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { GALLERY_IMAGES } from '~/constants/data'
import { useScrollReveal } from '~/composables/useScrollReveal'

useHead({
  title: 'Gallery  Managia'
})

const filters = ['All', 'Events', 'Team', 'Campus', 'Workshops']
const activeFilter = ref('All')

const filteredImages = computed(() => {
  if (activeFilter.value === 'All') return GALLERY_IMAGES
  const category = activeFilter.value.toLowerCase()
  return GALLERY_IMAGES.filter(img => img.category === category)
})

const getHeightClass = (aspect: 'tall' | 'wide' | 'square') => {
  if (aspect === 'tall') return 'h-80'
  if (aspect === 'wide') return 'h-52'
  return 'h-64'
}

useScrollReveal('.scroll-reveal')
</script>

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
