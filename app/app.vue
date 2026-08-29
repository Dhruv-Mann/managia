<script setup lang="ts">
/**
 * App Root  Managia
 *
 * Wraps all pages between the global Navbar and Footer.
 * Nuxt 4 auto-imports from components/ui/ with 'Ui' prefix.
 */
</script>

<template>
  <div class="min-h-screen bg-root text-text-primary selection:bg-surface-dark selection:text-root">
    <UiSiteNavbar />
    
    <!-- Background ASCII Art Decorations (Fixed to corners/vacant spaces) -->
    <div class="fixed top-20 -left-10 opacity-60 pointer-events-none z-0 hidden lg:block mix-blend-multiply">
      <UiAsciiArt src="/ascii-rose.svg?v=2" :width="120" :fontSize="6" />
    </div>
    
    <div class="fixed bottom-20 -right-10 opacity-60 pointer-events-none z-0 hidden lg:block mix-blend-multiply">
      <UiAsciiArt src="/ascii-rose.svg?v=2" :width="120" :fontSize="6" />
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <NuxtPage />
    </div>
    
    <UiSiteFooter />
  </div>
</template>
