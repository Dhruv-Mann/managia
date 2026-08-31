<template>
  <footer class="bg-surface-dark text-text-light pt-24 overflow-hidden relative">
    
    <!-- Top CTA Section -->
    <div class="container mx-auto px-6 md:px-12 lg:px-24 mb-24 scroll-reveal">
      <h2 class="font-display text-4xl md:text-6xl lg:text-7xl mb-8 max-w-2xl leading-tight">
        Ready to build<br/>
        <span class="text-accent italic">something great?</span>
      </h2>
      <UiBaseButton to="https://forms.gle/managia-join-form" variant="primary" size="lg">
        Join the Club &rarr;
      </UiBaseButton>
    </div>

    <!-- Main Footer Grid -->
    <div class="container mx-auto px-6 md:px-12 lg:px-24 pb-12 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-border-dark pt-12 scroll-reveal" style="transition-delay: 100ms;">
      
      <!-- Branding & Info -->
      <div class="md:col-span-6 flex flex-col items-start gap-6">
        <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/logo-dark.svg" alt="Managia Logo" class="w-8 h-8 invert" />
          <span class="font-display text-xl tracking-[0.15em] uppercase font-bold">MANAGIA</span>
        </NuxtLink>
        <p class="font-sans text-base opacity-60 max-w-sm">
          Managing the unmanageable. From messy schedules to landmark events, we build what lasts.
        </p>
      </div>

      <!-- Links -->
      <div class="md:col-span-3 flex flex-col gap-4">
        <h3 class="font-mono text-xs tracking-[0.2em] uppercase opacity-40 mb-2">Navigation</h3>
        <NuxtLink
          v-for="link in NAV_LINKS"
          :key="link.href"
          :to="link.href"
          class="font-sans text-base opacity-80 hover:opacity-100 hover:text-accent transition-colors w-fit"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Socials -->
      <div class="md:col-span-3 flex flex-col gap-4">
        <h3 class="font-mono text-xs tracking-[0.2em] uppercase opacity-40 mb-2">Connect</h3>
        <template v-for="(url, platform) in filteredSocials" :key="platform">
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="font-sans text-base opacity-80 hover:opacity-100 hover:text-accent transition-colors capitalize w-fit"
          >
            {{ platform }}
          </a>
        </template>
        <a :href="`mailto:${SOCIAL_LINKS.email}`" class="font-sans text-base opacity-80 hover:opacity-100 hover:text-accent transition-colors mt-2 w-fit">
          {{ SOCIAL_LINKS.email }}
        </a>
      </div>
    </div>

    <!-- Sub-footer Meta -->
    <div class="container mx-auto px-6 md:px-12 lg:px-24 pb-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono opacity-40 scroll-reveal" style="transition-delay: 200ms;">
      <p>&copy; 2026 Managia. All rights reserved.</p>
      <p class="mt-2 md:mt-0">Made with intent.</p>
    </div>

    <!-- Massive Background Text -->
    <div class="w-full overflow-hidden flex justify-center items-end mt-12 pointer-events-none select-none scroll-reveal" style="transition-delay: 300ms;">
      <h1 class="font-display text-[22vw] leading-[0.75] tracking-tighter opacity-[0.03] whitespace-nowrap -mb-[2vw]">
        MANAGIA
      </h1>
    </div>

  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NAV_LINKS, SOCIAL_LINKS } from '~/constants/data';
import BaseButton from './BaseButton.vue';
import { useScrollReveal } from '~/composables/useScrollReveal';

useScrollReveal('.scroll-reveal');

// Filter out email from socials loop since we handle it separately
const filteredSocials = computed(() => {
  const { email, ...rest } = SOCIAL_LINKS;
  return rest;
});
</script>
