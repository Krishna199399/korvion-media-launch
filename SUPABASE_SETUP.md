# Supabase Setup Guide for Korvion Media Blog

This guide walks you through setting up the free Supabase backend for the Korvion Media blog CMS.

## Prerequisites
- A free Supabase account at https://supabase.com
- Node.js 18+ installed
- This repository cloned locally

---

## Step 1: Create a Supabase Project

1. Go to https://supabase.com and sign up (free — no credit card required)
2. Click **New Project**
3. Choose your organization
4. Fill in:
   - **Project Name**: `korvion-media` (or any name)
   - **Database Password**: Choose a strong password and save it somewhere
   - **Region**: `Southeast Asia (Singapore)` — closest to India
5. Click **Create new project** and wait ~2 minutes for provisioning

---

## Step 2: Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **New query**
3. Copy the entire contents of `supabase/schema.sql`
4. Paste into the SQL editor
5. Click **Run** (or Ctrl+Enter)
6. You should see: `Success. No rows returned.`

---

## Step 3: Set Up Storage Buckets

1. Go to **Storage** in the left sidebar
2. Click **New bucket**
3. Create two buckets:

   **Bucket 1: Blog Images**
   - Name: `blog-images`
   - Toggle **Public bucket** ON
   - Click Save

   **Bucket 2: Media Library**
   - Name: `media-library`
   - Toggle **Public bucket** ON
   - Click Save

4. Set up storage policies (go to **SQL Editor** and run):
```sql
-- Blog Images bucket policies
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

INSERT INTO storage.buckets (id, name, public) VALUES ('media-library', 'media-library', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Allow public read
CREATE POLICY IF NOT EXISTS "Public read blog images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-images');

CREATE POLICY IF NOT EXISTS "Auth upload blog images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

CREATE POLICY IF NOT EXISTS "Auth update blog images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

CREATE POLICY IF NOT EXISTS "Auth delete blog images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- Media library policies
CREATE POLICY IF NOT EXISTS "Public read media library"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'media-library');

CREATE POLICY IF NOT EXISTS "Auth upload media library"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'media-library' AND auth.role() = 'authenticated');
```

---

## Step 4: Configure Authentication

1. Go to **Authentication > Settings** in the sidebar
2. Under **Email Auth**, ensure it is enabled
3. For the CMS admin, you only need email/password auth
4. Under **URL Configuration**, set:
   - **Site URL**: `https://your-domain.com` (or `http://localhost:3000` for dev)
   - **Redirect URLs**: Add `http://localhost:3000/**` and your production URL

### Create Your Admin User

1. Go to **Authentication > Users**
2. Click **Add user > Create new user**
3. Enter your admin email and a strong password
4. Confirm the user

---

## Step 5: Get Your Environment Variables

1. Go to **Settings > API** (in the left sidebar)
2. Copy the following values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key (secret!) → `SUPABASE_SERVICE_ROLE_KEY`

3. Create `.env.local` in your project root:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> ⚠️ NEVER commit `.env.local` to Git — it is already in `.gitignore`

---

## Step 6: Load Sample Data (Optional)

To seed the database with sample blog posts:

1. Go to **SQL Editor**
2. Copy contents of `scripts/seed-data.sql`
3. Paste and run

---

## Step 7: Verify Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit: http://localhost:3000
```

---

## Free Tier Limits

Supabase free tier includes:
- **Database**: 500MB
- **Storage**: 1GB
- **Bandwidth**: 2GB/month
- **Auth**: 50,000 MAUs
- **API requests**: Unlimited

This is more than sufficient for a growing blog.

---

## Troubleshooting

**"Invalid API key"** — Double-check your `.env.local` values match the Supabase dashboard exactly.

**"Row-level security violation"** — Ensure you are authenticated (logged into admin) before making write requests.

**"Storage bucket not found"** — Run the bucket creation SQL in Step 3.

**Project paused** — Supabase pauses free projects after 7 days of inactivity. Simply click "Restore" in the dashboard.
