<template>
  <main class="min-h-screen bg-root pb-24">
    <section class="bg-surface-dark text-text-light pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto scroll-reveal">
        <h1 class="font-display text-5xl md:text-7xl font-bold">Events</h1>
      </div>
    </section>

    <section class="px-6 md:px-12 lg:px-24 pt-12">
      <div class="max-w-7xl mx-auto">
        <!-- Filters -->
        <div class="flex flex-wrap gap-3 mb-12 scroll-reveal">
          <button
            v-for="filter in EVENT_CATEGORIES"
            :key="filter"
            @click="activeFilter = filter"
            class="px-4 py-2 rounded-lg font-sans text-sm transition-colors duration-150 active:scale-95"
            :class="activeFilter === filter ? 'bg-surface-dark text-text-light' : 'bg-surface-mid/10 text-text-primary hover:bg-surface-mid/20'"
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
            <div class="relative rounded-xl overflow-hidden bg-surface-mid/10">
              <img
                :src="image.src"
                :alt="image.category"
                class="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { EVENTS_PHOTOS, EVENT_CATEGORIES } from '~/constants/data'
import { useScrollReveal } from '~/composables/useScrollReveal'

useHead({
  title: 'Events  Managia'
})

const route = useRoute()
const activeFilter = ref(route.query.category ? String(route.query.category) : 'All')

// Ensure filter stays in sync if user navigates via browser history or links
watch(() => route.query.category, (newCategory) => {
  if (newCategory) {
    activeFilter.value = String(newCategory)
  } else {
    activeFilter.value = 'All'
  }
})

const filteredImages = computed(() => {
  if (activeFilter.value === 'All') return EVENTS_PHOTOS
  return EVENTS_PHOTOS.filter(img => img.category === activeFilter.value)
})

const { refresh } = useScrollReveal('.scroll-reveal')

watch(filteredImages, async () => {
  await nextTick()
  refresh()
})
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
