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
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            class="px-4 py-2 rounded-lg font-sans text-sm transition-colors duration-150 active:scale-95"
            :class="activeFilter === filter ? 'bg-accent text-text-light' : 'bg-surface-mid/10 text-text-primary hover:bg-surface-mid/20'"
          >
            {{ filter }}
          </button>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            v-for="(event, index) in filteredEvents"
            :key="event.id"
            :event="event"
            class="scroll-reveal"
            :style="{ transitionDelay: `${(index % 3) * 100}ms` }"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { EVENTS } from '~/constants/data'
import EventCard from '~/components/events/EventCard.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

useHead({
  title: 'Events  Managia'
})

const filters = ['All', 'Hackathons', 'Conferences', 'Cultural', 'Games', 'Social']
const activeFilter = ref('All')

const filteredEvents = computed(() => {
  if (activeFilter.value === 'All') return EVENTS
  const categoryMap: Record<string, string> = {
    'Hackathons': 'hackathon',
    'Conferences': 'conference',
    'Cultural': 'cultural',
    'Games': 'games',
    'Social': 'social'
  }
  return EVENTS.filter(e => e.category === categoryMap[activeFilter.value])
})

useScrollReveal('.scroll-reveal')
</script>
