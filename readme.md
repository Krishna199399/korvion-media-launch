# Korvion Media - Website & Blog CMS

Modern, high-performance marketing website with a full-featured blog CMS powered by Supabase. Built for Korvion Media, a digital marketing agency based in India.

## Features

- **Marketing Website**: Responsive landing pages, services showcase, portfolio, and contact forms
- **Blog CMS**: Complete content management system with rich text editor, categories, tags, and SEO optimization
- **Supabase Backend**: Free, open-source backend with PostgreSQL database, authentication, and file storage
- **Static Export Ready**: Can be deployed to Hostinger or any static hosting provider
- **Server-Side Rendering**: Full SSR support for blog content and dynamic routes via Vercel/Netlify

## Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + shadcn/ui
- **Animation**: GSAP, Framer Motion, Lenis smooth scroll
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Rich Text Editor**: TipTap (for blog content editing)
- **Deployment**: Vercel (SSR) or Hostinger (static export)

## Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd korvion-media-launch
npm install
```

### 2. Set Up Supabase

Follow the complete guide in **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** to:
- Create a free Supabase project
- Run the database schema
- Set up storage buckets
- Configure authentication
- Seed sample blog data

### 3. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
korvion-media-launch/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   └── lib/
│       ├── supabase/     # Supabase client configs
│       ├── types/        # TypeScript type definitions
│       └── utils/        # Utility functions
├── public/               # Static assets
├── supabase/
│   └── schema.sql        # Database schema
├── scripts/
│   ├── seed-data.sql     # Sample blog data
│   └── build-hostinger.js # Static export script
├── middleware.ts         # Auth & routing middleware
└── next.config.ts        # Next.js configuration
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build for production (SSR) |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run export:hostinger` | Build static export for Hostinger |
| `npm run db:types` | Generate TypeScript types from Supabase schema |
| `npm run db:reset` | Reset local Supabase database |
| `npm run db:push` | Push schema changes to Supabase |

## Deployment

### Option 1: Vercel (Recommended for Blog CMS)

The blog CMS requires server-side features (Supabase SSR, API routes). Deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Add environment variables in Vercel dashboard → Settings → Environment Variables.

### Option 2: Hostinger (Static Export)

For static marketing pages only (no blog admin):

1. Temporarily enable static export in `next.config.ts`:
   ```typescript
   output: 'export',
   ```

2. Build and export:
   ```bash
   npm run export:hostinger
   ```

3. Upload `out/` folder contents to Hostinger `public_html/`

## Hostinger Static Export

**Note**: The static export does NOT include the blog CMS admin panel. For blog functionality, deploy to Vercel.

### Export Process

1. Temporarily add `output: 'export'` to `next.config.ts`
2. Run:
   ```bash
   npm run export:hostinger
   ```
3. This creates a `hostinger-export.zip` file
4. Upload and extract to your Hostinger `public_html` directory

### What Gets Exported
- All marketing pages (home, about, services, contact, etc.)
- Static blog listing pages (if blog posts exist)
- Static individual blog post pages
- All assets (images, fonts, CSS, JS)

### What Does NOT Work in Static Export
- Blog admin dashboard
- Authentication
- Dynamic content updates
- API routes
- Server-side rendering

For a fully functional blog CMS with admin panel, deploy to **Vercel** instead.

---

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add some feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## License

Proprietary - © 2025 Korvion Media. All rights reserved.

---

## Support

For issues or questions:
- Create an issue in this repository
- Contact: [your-email@korvionmedia.com]
- Documentation: See `SUPABASE_SETUP.md` for backend setup

## Roadmap

- [ ] Blog admin dashboard (Phase 2)
- [ ] Comment system with moderation
- [ ] Newsletter integration
- [ ] Analytics dashboard
- [ ] Multi-author support
- [ ] Advanced SEO tools
- [ ] Content scheduling
- [ ] A/B testing for blog posts

