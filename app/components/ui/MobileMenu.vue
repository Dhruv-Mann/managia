<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-40 bg-surface-dark/80 backdrop-blur-sm" @click="$emit('close')"></div>
    </Transition>
    <Transition name="slide">
      <div
        v-if="isOpen"
        class="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-surface-dark p-6 shadow-xl sm:p-8 text-text-light flex flex-col"
        @keydown.esc="$emit('close')"
        tabindex="-1"
        ref="menuRef"
      >
        <div class="flex items-center justify-between mb-12">
          <span class="font-display text-lg tracking-[0.15em] uppercase">MANAGIA</span>
          <button
            @click="$emit('close')"
            class="p-2 -mr-2 text-text-light/70 hover:text-text-light transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav class="flex-1 flex flex-col gap-6">
          <NuxtLink
            v-for="link in NAV_LINKS"
            :key="link.href"
            :to="link.href"
            class="font-display text-2xl uppercase tracking-widest hover:text-accent transition-colors"
            @click="$emit('close')"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
        
        <div class="mt-auto pt-8 border-t border-border-dark">
          <UiBaseButton variant="primary" class="w-full" size="lg" to="https://forms.gle/managia-join-form" @click="$emit('close')">
            Join Us
          </UiBaseButton>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue';
import { NAV_LINKS } from '~/constants/data';
import BaseButton from './BaseButton.vue';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const menuRef = ref<HTMLElement | null>(null);

watch(() => props.isOpen, (newVal) => {
  if (typeof window !== 'undefined') {
    if (newVal) {
      document.body.style.overflow = 'hidden';
      nextTick(() => {
        menuRef.value?.focus();
      });
    } else {
      document.body.style.overflow = '';
    }
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: transform 0.25s ease-out;
}
.slide-leave-active {
  transition: transform 0.15s ease-in;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
