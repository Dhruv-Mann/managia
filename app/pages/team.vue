<template>
  <main class="min-h-screen bg-transparent pb-24">
    <section class="bg-surface-dark text-text-light pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto scroll-reveal">
        <h1 class="font-display text-[12vw] md:text-8xl tracking-tighter leading-[0.9] uppercase">
          The<br/>
          <span class="text-accent italic pr-4">Team.</span>
        </h1>
        <p class="font-sans text-lg md:text-xl opacity-75 mt-8 max-w-md leading-relaxed">
          The people behind Managia. Meet the collective of students making everything happen.
        </p>
      </div>
    </section>

    <section class="px-6 md:px-12 lg:px-24 pt-24 relative z-10">
      


      <!-- Bento Grid Layout -->
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[350px]">
        <TeamMemberCard
          v-for="(member, index) in TEAM_MEMBERS"
          :key="member.name"
          :member="member"
          :class="['scroll-reveal', getBentoClasses(index)]"
          :style="{ transitionDelay: `${(index % 4) * 100}ms` }"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { TEAM_MEMBERS } from '~/constants/data'
import TeamMemberCard from '~/components/team/TeamMemberCard.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

useHead({
  title: 'Team  Managia'
})

useScrollReveal('.scroll-reveal')

// Bento logic for 6 members on a 4-column grid
const getBentoClasses = (index: number) => {
  switch (index) {
    case 0: return 'md:col-span-2 lg:col-span-2 lg:row-span-2' // President (Large Square)
    case 1: return 'md:col-span-1 lg:col-span-1 lg:row-span-2' // VP Ops (Tall Portrait)
    case 2: return 'md:col-span-1 lg:col-span-1 lg:row-span-1' // Head of Events (Small Square)
    case 3: return 'md:col-span-1 lg:col-span-1 lg:row-span-1' // Creative Dir (Small Square)
    case 4: return 'md:col-span-2 lg:col-span-2 lg:row-span-1' // Head of Tech (Wide Rectangle)
    case 5: return 'md:col-span-2 lg:col-span-2 lg:row-span-1' // Head of Outreach (Wide Rectangle)
    default: return 'md:col-span-1 lg:col-span-1 lg:row-span-1'
  }
}
</script>
