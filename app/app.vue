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
    


    <!-- Main Content -->
    <div class="relative z-10">
      <NuxtPage />
    </div>
    
    <UiSiteFooter />
  </div>
</template>
