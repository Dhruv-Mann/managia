<template>
  <main class="min-h-screen bg-root pb-24">
    <section class="bg-surface-dark text-text-light pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto scroll-reveal">
        <h1 class="font-display text-5xl md:text-7xl font-bold">Gallery</h1>
      </div>
    </section>

    <section class="px-6 md:px-12 lg:px-24 pt-12">
      <div class="max-w-7xl mx-auto">

        <!-- Bento Grid -->
        <div class="bento-grid">
          <div
            v-for="(image, index) in GALLERY_IMAGES"
            :key="image.id"
            class="bento-item scroll-reveal"
            :style="{ transitionDelay: `${(index % 4) * 100}ms` }"
          >
            <NuxtLink
              :to="{ path: '/events', query: { category: image.eventName } }"
              class="relative rounded-xl overflow-hidden group virtualize bg-surface-mid/10 h-full w-full block"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />

              <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p v-if="image.eventName" class="font-display text-text-light text-lg">{{ image.eventName }}</p>
                <p v-if="image.date" class="font-mono text-text-light/70 text-xs mt-1">{{ image.date }}</p>
              </div>
            </NuxtLink>
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





useScrollReveal('.scroll-reveal')
</script>

<style scoped>
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 300px;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 300px);
  }
  .bento-item:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    height: 100%;
  }
  .bento-item:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    height: 100%;
  }
  .bento-item:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    height: 100%;
  }
  .bento-item:nth-child(4) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    height: 100%;
  }
}
</style>
