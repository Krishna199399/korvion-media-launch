const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/routes/*.tsx');

files.forEach(file => {
  if (file.includes('__root.tsx') || file.includes('index.tsx') || file.includes('contact.tsx') || file.includes('careers.tsx') || file.includes('services.tsx') || file.includes('work.tsx') || file.includes('process.tsx')) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Add import if not present
  if (!content.includes('InteractiveFlow3D')) {
    // Just inject it after the last import
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfLine = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfLine + 1) + 'import { InteractiveFlow3D } from "@/components/animations/InteractiveFlow3D";\n' + content.slice(endOfLine + 1);
      changed = true;
    }
  }

  // Define nodes based on filename
  let nodes = '["Strategy", "Execution", "Optimization", "Scale"]';
  let title = "The Growth Flow";
  
  if (file.includes('seo')) {
    nodes = '["Technical SEO", "Content Strategy", "Link Authority", "Core Web Vitals", "CRO", "Revenue Growth"]';
    title = "The SEO & CRO Ecosystem";
  } else if (file.includes('social-media')) {
    nodes = '["Audience Research", "Content Strategy", "Community Building", "Influencer Campaigns", "Viral Growth", "Brand Authority"]';
    title = "The Social Media Growth System";
  } else if (file.includes('performance')) {
    nodes = '["Market Research", "Offer Creation", "Funnel Building", "Ad Creative", "Media Buying", "A/B Testing", "Scale"]';
    title = "The Performance Marketing Engine";
  } else if (file.includes('website-design')) {
    nodes = '["UX Research", "Wireframing", "UI Design", "Prototyping", "Development", "Performance Optimization", "Launch"]';
    title = "The Digital Experience Flow";
  } else if (file.includes('video-production') || file.includes('content')) {
    nodes = '["Concept Strategy", "Scripting", "Pre-Production", "Shooting", "Post-Production", "Color Grading", "Distribution"]';
    title = "The Content Production Pipeline";
  } else if (file.includes('branding')) {
    nodes = '["Brand Discovery", "Positioning", "Visual Identity", "Brand Voice", "Brand Guidelines", "Market Rollout"]';
    title = "The Brand Evolution Process";
  }

  // Insert before {/* FAQ Section */}
  const insertRegex = /\{\/\*[\s\n]*FAQ [sS]ection[\s\n]*\*\/\}/;
  
  if (insertRegex.test(content) && !content.includes('InteractiveFlow3D nodes=')) {
    const sectionToInsert = `
      {/* 3D Flow Animation Section */}
      <section className="section-isolate py-32 bg-background border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center mb-16 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-gradient-primary">{title}</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            A disconnected strategy leaks revenue. We build interconnected systems where every step amplifies the next.
          </p>
        </div>
        <InteractiveFlow3D nodes={${nodes}} />
      </section>

      {/* FAQ Section */}`;
      
    content = content.replace(insertRegex, sectionToInsert);
    changed = true;
  }

  // TiltCard enhancement
  if (content.includes('tiltAmount={5}')) {
    content = content.replace(/tiltAmount=\{5\}/g, 'tiltAmount={15}');
    changed = true;
  }
  if (content.includes('tiltAmount={8}')) {
    content = content.replace(/tiltAmount=\{8\}/g, 'tiltAmount={15}');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Added 3D Flow to ' + file);
  }
});
