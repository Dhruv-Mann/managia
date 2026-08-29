<script setup lang="ts">
import HomeHero from '~/components/home/HomeHero.vue'
import HomeWorkPreview from '~/components/home/HomeWorkPreview.vue'
import HomeEventsPreview from '~/components/home/HomeEventsPreview.vue'
import HomeMarquee from '~/components/home/HomeMarquee.vue'
import HomeTeamPreview from '~/components/home/HomeTeamPreview.vue'
import HomeGalleryPreview from '~/components/home/HomeGalleryPreview.vue'
import HomeJoinCta from '~/components/home/HomeJoinCta.vue'

useHead({
  title: 'Managia  We do everything'
})
</script>

<template>
  <div class="min-h-screen">
    <HomeHero />
    <HomeWorkPreview />
    <HomeEventsPreview />
    <HomeMarquee />
    <HomeTeamPreview />
    <HomeGalleryPreview />
    <HomeJoinCta />
  </div>
</template>
