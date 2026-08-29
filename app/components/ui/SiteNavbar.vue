<template>
  <header 
    :class="[
      'fixed top-0 left-0 w-full z-50 h-[80px] flex items-center transition-all duration-500 ease-out',
      isHome 
        ? (isScrolled ? 'bg-surface-dark border-b border-white/5 translate-y-0 opacity-100' : '-translate-y-full opacity-0') 
        : 'bg-surface-dark border-b border-white/5 translate-y-0 opacity-100'
    ]"
  >
    <div class="container mx-auto px-6 md:px-12 lg:px-24 w-full flex items-center justify-between">
      
      <!-- Left: Logo -->
      <div class="flex-1 flex items-center justify-start">
        <NuxtLink to="/" class="flex items-center gap-3 group w-fit">
          <img src="/logo.svg" alt="Managia Logo" class="w-7 h-7 group-hover:opacity-80 transition-opacity shrink-0" />
          <span class="font-display text-lg tracking-[0.15em] text-text-light uppercase font-bold mt-0.5">MANAGIA</span>
        </NuxtLink>
      </div>

      <!-- Center: Desktop Nav -->
      <nav class="hidden lg:flex items-center justify-center gap-10">
        <NuxtLink
          v-for="link in NAV_LINKS"
          :key="link.href"
          :to="link.href"
          class="font-sans text-[15px] font-medium text-text-light/60 hover:text-text-light transition-colors py-2 relative group"
          active-class="!text-text-light"
        >
          {{ link.label }}
          <!-- Hover underline effect -->
          <span class="absolute left-0 bottom-1 w-full h-[1px] bg-text-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </NuxtLink>
      </nav>

      <!-- Right: CTA & Mobile Toggle -->
      <div class="flex-1 flex items-center justify-end gap-4">
        <UiBaseButton variant="primary" class="hidden md:inline-flex" size="md" to="https://forms.gle/managia-join-form">
          Join Us
        </UiBaseButton>
        <button
          @click="isMenuOpen = true"
          class="lg:hidden p-2 -mr-2 text-text-light/70 hover:text-text-light transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
          aria-label="Open menu"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    
    <UiMobileMenu :isOpen="isMenuOpen" @close="isMenuOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { NAV_LINKS } from '~/constants/data';
import BaseButton from './BaseButton.vue';
import MobileMenu from './MobileMenu.vue';

const route = useRoute();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

// Determine if we are on the homepage
const isHome = computed(() => route.path === '/');

const handleScroll = () => {
  // Morph/slide down the navbar after scrolling 300px
  isScrolled.value = window.scrollY > 300;
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>
