const fs = require('fs');
let content = fs.readFileSync('app/components/ui/SiteFooter.vue', 'utf8');
content = content.replace(/onMounted\(\(\) => \{\n  useScrollReveal\('\.scroll-reveal'\);\n\n/g, "useScrollReveal('.scroll-reveal');\n");
fs.writeFileSync('app/components/ui/SiteFooter.vue', content);

let content2 = fs.readFileSync('app/components/ui/SectionHeader.vue', 'utf8');
content2 = content2.replace(/onMounted\(\(\) => \{\n  useScrollReveal\('\.scroll-reveal'\);\n\n/g, "useScrollReveal('.scroll-reveal');\n");
fs.writeFileSync('app/components/ui/SectionHeader.vue', content2);
