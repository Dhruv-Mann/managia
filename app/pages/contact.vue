<template>
  <main class="min-h-screen bg-transparent pt-32 lg:pt-40 pb-24 px-6 md:px-12 lg:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

      <!-- Left Column (Typography & Info) -->
      <div class="scroll-reveal lg:sticky lg:top-40 relative">
        <h1 class="font-display text-[15vw] md:text-[10vw] lg:text-8xl tracking-tighter leading-[0.85] uppercase text-surface-dark">
          Get In<br/>
          <span class="text-accent italic pr-4">Touch.</span>
        </h1>
        <p class="font-sans text-lg md:text-xl text-surface-dark/70 mt-8 max-w-md leading-relaxed relative z-10">
          Whether you have a question about our events, want to partner with us, or just want to say hireach out directly to our team.
        </p>

        <!-- ASCII Art Decoration -->
        <div class="absolute -bottom-24 -left-12 opacity-60 pointer-events-none hidden lg:block mix-blend-multiply z-0">
          <UiAsciiArt src="/ascii-branch.svg?v=2" :width="90" :fontSize="6" />
        </div>

        <div class="mt-16 space-y-8 relative z-10">
          <div class="flex items-center gap-6 group">
            <div class="w-12 h-12 rounded-full bg-surface-dark/5 flex items-center justify-center group-hover:bg-accent group-hover:text-text-light transition-colors duration-300 text-surface-dark">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <p class="font-sans text-xs tracking-widest uppercase font-bold text-surface-dark/40 mb-1">General Inquiries</p>
              <a :href="`mailto:${SOCIAL_LINKS.email}`" class="font-sans text-lg font-medium text-surface-dark hover:text-accent transition-colors">{{ SOCIAL_LINKS.email }}</a>
            </div>
          </div>

          <div class="flex gap-4 pt-8 border-t border-surface-dark/10">
            <a :href="SOCIAL_LINKS.linkedin" target="_blank" class="w-12 h-12 rounded-full bg-surface-dark/5 flex items-center justify-center text-surface-dark hover:bg-surface-dark hover:text-text-light transition-colors duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a :href="SOCIAL_LINKS.twitter" target="_blank" class="w-12 h-12 rounded-full bg-surface-dark/5 flex items-center justify-center text-surface-dark hover:bg-surface-dark hover:text-text-light transition-colors duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a :href="SOCIAL_LINKS.instagram" target="_blank" class="w-12 h-12 rounded-full bg-surface-dark/5 flex items-center justify-center text-surface-dark hover:bg-surface-dark hover:text-text-light transition-colors duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column (Leaders Contact Directory) -->
      <div class="scroll-reveal" style="transition-delay: 200ms">
        <h2 class="font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-surface-dark/50 mb-10 border-b-2 border-surface-dark/10 pb-4">Core Team Directory</h2>

        <div class="space-y-12">
          <!-- Leader 1 -->
          <div class="group">
            <h3 class="font-display text-4xl text-surface-dark mb-1">Arjun Mehta</h3>
            <p class="font-sans text-sm text-accent font-bold uppercase tracking-widest mb-4">President</p>
            <div class="space-y-2">
              <a href="mailto:arjun@managia.club" class="block font-sans text-lg text-surface-dark/80 hover:text-surface-dark transition-colors">arjun@managia.club</a>
              <a href="tel:+1234567890" class="block font-sans text-lg text-surface-dark/80 hover:text-surface-dark transition-colors">+1 (234) 567-8901</a>
            </div>
          </div>

          <!-- Leader 2 -->
          <div class="group">
            <h3 class="font-display text-4xl text-surface-dark mb-1">Priya Sharma</h3>
            <p class="font-sans text-sm text-accent font-bold uppercase tracking-widest mb-4">VP Operations</p>
            <div class="space-y-2">
              <a href="mailto:priya@managia.club" class="block font-sans text-lg text-surface-dark/80 hover:text-surface-dark transition-colors">priya@managia.club</a>
              <a href="tel:+19876543210" class="block font-sans text-lg text-surface-dark/80 hover:text-surface-dark transition-colors">+1 (987) 654-3210</a>
            </div>
          </div>

          <!-- Leader 3 -->
          <div class="group">
            <h3 class="font-display text-4xl text-surface-dark mb-1">Karan Patel</h3>
            <p class="font-sans text-sm text-accent font-bold uppercase tracking-widest mb-4">Head of Events</p>
            <div class="space-y-2">
              <a href="mailto:karan@managia.club" class="block font-sans text-lg text-surface-dark/80 hover:text-surface-dark transition-colors">karan@managia.club</a>
              <a href="tel:+15551234567" class="block font-sans text-lg text-surface-dark/80 hover:text-surface-dark transition-colors">+1 (555) 123-4567</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<script setup lang="ts">
import { SOCIAL_LINKS } from '~/constants/data'
import { useScrollReveal } from '~/composables/useScrollReveal'

useHead({
  title: 'Contact  Managia'
})

useScrollReveal('.scroll-reveal')
</script>
