const fs = require('fs');

let content = fs.readFileSync('app/pages/join.vue', 'utf8');

// Fix Header
content = content.replace(
  /<h1 class="font-display text-5xl md:text-7xl font-bold">Join Managia<\/h1>\n\s+<p class="font-sans text-lg md:text-xl opacity-75 mt-6 max-w-2xl">\n\s+Open to everyone. Seriously.\n\s+<\/p>/g,
  `<h1 class="font-display text-[12vw] md:text-8xl tracking-tighter leading-[0.9] uppercase">\n          Join<br/>\n          <span class="text-accent italic pr-4">Managia.</span>\n        </h1>\n        <p class="font-sans text-lg md:text-xl opacity-75 mt-8 max-w-md leading-relaxed">\n          Open to everyone. Seriously.\n        </p>`
);

// Fix Form Container
content = content.replace(
  /class="max-w-3xl mx-auto bg-root rounded-xl shadow-card p-8 md:p-12 scroll-reveal"/g,
  `class="max-w-3xl mx-auto bg-white rounded-3xl shadow-elevated p-8 md:p-12 scroll-reveal border border-surface-dark/5"`
);

// Fix Form labels and inputs
content = content.replace(/class="block font-sans text-sm font-medium text-text-primary"/g, 'class="block font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-surface-dark/50 transition-colors"');
content = content.replace(/class="w-full bg-root border border-border-subtle rounded-lg px-4 py-3 font-sans text-sm focus:border-accent focus:ring-0 outline-none transition-colors text-text-primary"/g, 'class="w-full bg-transparent border-b-2 border-surface-dark/10 rounded-none px-0 py-3 font-sans text-lg focus:border-accent focus:ring-0 outline-none transition-colors text-surface-dark placeholder:text-surface-dark/20"');
content = content.replace(/class="w-full bg-root border border-border-subtle rounded-lg px-4 py-3 font-sans text-sm focus:border-accent focus:ring-0 outline-none transition-colors text-text-primary appearance-none"/g, 'class="w-full bg-transparent border-b-2 border-surface-dark/10 rounded-none px-0 py-3 font-sans text-lg focus:border-accent focus:ring-0 outline-none transition-colors text-surface-dark appearance-none cursor-pointer"');
content = content.replace(/class="w-full bg-root border border-border-subtle rounded-lg px-4 py-3 font-sans text-sm focus:border-accent focus:ring-0 outline-none transition-colors text-text-primary resize-none"/g, 'class="w-full bg-transparent border-b-2 border-surface-dark/10 rounded-none px-0 py-3 font-sans text-lg focus:border-accent focus:ring-0 outline-none transition-colors text-surface-dark placeholder:text-surface-dark/20 resize-none"');

fs.writeFileSync('app/pages/join.vue', content);
