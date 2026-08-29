const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.vue')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const componentsToPrefix = ['AsciiArt', 'BaseButton', 'MobileMenu', 'SectionHeader', 'SiteFooter', 'SiteNavbar'];
const files = walkSync('./app');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  componentsToPrefix.forEach(comp => {
    // Regex to match <Component, </Component>, <Component /> 
    // but avoid matching <UiComponent> if it's already there
    const openRegex = new RegExp(`<${comp}(\\s|>)`, 'g');
    const closeRegex = new RegExp(`<\/${comp}>`, 'g');
    
    if (openRegex.test(content) || closeRegex.test(content)) {
      content = content.replace(openRegex, `<Ui${comp}$1`);
      content = content.replace(closeRegex, `</Ui${comp}>`);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
