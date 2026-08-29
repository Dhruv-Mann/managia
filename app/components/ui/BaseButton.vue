<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center rounded-full font-sans font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95',
      variantClasses,
      sizeClasses,
      {
        'opacity-50 pointer-events-none': disabled,
        'cursor-wait': loading,
      }
    ]"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="mr-3 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
    
    <!-- Using a relative span to potentially add hover underline or slide effects in the future, keeps it clean -->
    <span class="relative flex items-center justify-center gap-2">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { resolveComponent } from 'vue';

const NuxtLink = resolveComponent('NuxtLink');

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'secondary-light';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  disabled?: boolean;
  loading?: boolean;
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
});

defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      // Sleek black/dark background, turns accent brown on hover, casts subtle shadow
      return 'bg-surface-dark text-text-light hover:bg-accent hover:shadow-lg hover:shadow-accent/20';
    case 'secondary':
      // Clean outline button that fills dark on hover
      return 'border-2 border-surface-dark/10 text-surface-dark hover:border-surface-dark hover:bg-surface-dark hover:text-text-light';
    case 'secondary-light':
      // Light outline for dark backgrounds
      return 'border-2 border-text-light/20 text-text-light hover:border-text-light hover:bg-text-light hover:text-surface-dark';
    case 'ghost':
      // Transparent button with a subtle dark wash on hover
      return 'bg-transparent text-surface-dark hover:bg-surface-dark/5';
    default:
      return '';
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-6 py-2.5 text-[10px] min-h-[38px]';
    case 'lg':
      return 'px-10 py-4 text-[12px] min-h-[52px]';
    case 'md':
    default:
      return 'px-8 py-3 text-[11px] min-h-[44px]';
  }
});
</script>

<style scoped>
/* Remove the old active:scale-96 since we use Tailwind's native active:scale-95 now */
</style>
