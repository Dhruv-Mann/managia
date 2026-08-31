<script setup lang="ts">
import { TEAM_MEMBERS } from '~/constants/data'
import { computed, onMounted } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

const previewTeam = computed(() => TEAM_MEMBERS)

useScrollReveal('.scroll-reveal')
</script>

<template>
  <section class="bg-transparent py-24 px-6 md:px-12 lg:px-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="h-[60vh] lg:h-full w-full scroll-reveal">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
          alt="Managia Team" 
          class="w-full h-full object-cover rounded-xl grayscale contrast-125"
        />
      </div>
      <div class="flex flex-col">
        <div class="scroll-reveal">
          <UiSectionHeader title="The Pillars" />
        </div>
        
        <div class="mt-12 flex flex-col gap-8">
          <div 
            v-for="(member, index) in previewTeam" 
            :key="member.name"
            class="flex items-center gap-6 scroll-reveal"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <img 
              :src="member.image" 
              :alt="member.name" 
              class="w-14 h-14 rounded-full object-cover grayscale"
            />
            <div>
              <h4 class="font-display text-base text-text-primary">{{ member.name }}</h4>
              <p class="font-sans text-sm opacity-55 text-text-primary">{{ member.role }}</p>
            </div>
          </div>
        </div>
        
        <div class="mt-12 scroll-reveal">
          <UiBaseButton to="/team" variant="ghost">
            View All Pillars →
          </UiBaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
