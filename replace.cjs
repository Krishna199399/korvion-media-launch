const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/routes/*.tsx');

files.forEach(file => {
  if (file.includes('__root.tsx') || file.includes('index.tsx') || file.includes('contact.tsx') || file.includes('careers.tsx') || file.includes('services.tsx') || file.includes('work.tsx') || file.includes('process.tsx')) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (!content.includes('ImagePlaceholder3D')) {
    content = content.replace(
      /import \{ TiltCard \} from "\@\/components\/animations\/TiltCard";/,
      `import { TiltCard } from "@/components/animations/TiltCard";\nimport { ImagePlaceholder3D } from "@/components/animations/ImagePlaceholder3D";`
    );
    changed = true;
  }

  // Find all <img ... src="/src/assets/..." ... /> tags and replace them.
  // We can just use a simple regex matching everything between <img and /> if it contains /src/assets/
  const imgRegex = /<img[^>]*src="\/src\/assets\/[^>]*\/>/g;
  
  if (imgRegex.test(content)) {
    content = content.replace(imgRegex, (match) => {
      // If it's a portfolio image
      if (match.includes('portfolio')) {
        return `<ImagePlaceholder3D text="PORTFOLIO PREVIEW" className="absolute inset-0" />`;
      }
      // If it's a hero image
      return `<ImagePlaceholder3D text="HERO BACKGROUND 3D" className="w-full h-full opacity-40 [&>div]:rounded-none [&>div]:border-none absolute inset-0 z-[-1]" />`;
    });
    changed = true;
  }

  // Find aspect-[4/3] blocks:
  const aspectRegex = /<div className="relative aspect-\[4\/3\][^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;
  // This is too fragile. Let's replace the inner part of those specific placeholders manually if possible, or just use a specific string replacement.

  // Let's replace the whole Growth Metrics Visual block
  const blockToReplace = `{/* Image Placeholder */}
              <div className="relative aspect-[4/3] rounded-3xl border border-border bg-surface/50 backdrop-blur-xl shadow-elegant overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center p-8">
                    <TrendingUp className="h-20 w-20 mx-auto mb-4 text-primary" />
                    <p className="text-sm font-mono">Growth Metrics Visual</p>
                  </div>
                </div>
              </div>`;
  if (content.includes(blockToReplace)) {
    content = content.replace(blockToReplace, `<ImagePlaceholder3D text="Growth Metrics Visual" />`);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
