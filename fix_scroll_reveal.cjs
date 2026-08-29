const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.vue')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // Replace nested onMounted
            content = content.replace(/onMounted\(\s*\(\)\s*=>\s*\{\s*useScrollReveal\('([^']+)'\)\s*\}\s*\)/g, "useScrollReveal('$1')");
            // Sometimes it's without string arg
            content = content.replace(/onMounted\(\s*\(\)\s*=>\s*\{\s*useScrollReveal\(\)\s*\}\s*\)/g, "useScrollReveal()");
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log('Fixed', fullPath);
            }
        }
    }
}

processDir('app/components');
processDir('app/pages');
