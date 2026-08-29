<template>
  <div
    :class="[
      'scroll-reveal flex flex-col',
      align === 'center' ? 'items-center text-center' : 'items-start text-left',
      light ? 'text-text-light' : 'text-text-primary'
    ]"
    ref="sectionHeaderRef"
  >
    <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="font-sans text-base md:text-lg opacity-55 max-w-xl mt-4"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal';
import { ref, onMounted } from 'vue';

const props = withDefaults(defineProps<{
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}>(), {
  align: 'left',
  light: false,
});

const sectionHeaderRef = ref(null);

useScrollReveal('.scroll-reveal');

</script>
