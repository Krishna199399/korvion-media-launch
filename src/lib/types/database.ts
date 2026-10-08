// Auto-generated Supabase database types placeholder
// To regenerate: npm run db:types (requires Supabase CLI)
// This file will be overwritten when you run: supabase gen types typescript --local > lib/supabase/database.types.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string | null;
          content: string;
          content_html: string | null;
          featured_image_url: string | null;
          featured_image_alt: string | null;
          category_id: string | null;
          author_id: string | null;
          author_name: string | null;
          author_avatar_url: string | null;
          status: 'draft' | 'published' | 'archived' | 'scheduled';
          visibility: 'public' | 'private' | 'password';
          published_at: string | null;
          scheduled_at: string | null;
          reading_time_minutes: number;
          view_count: number;
          like_count: number;
          comment_count: number;
          is_featured: boolean;
          is_pinned: boolean;
          allow_comments: boolean;
          meta_title: string | null;
          meta_description: string | null;
          meta_keywords: string | null;
          og_image_url: string | null;
          canonical_url: string | null;
          schema_markup: Json | null;
          table_of_contents: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['blog_posts']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['blog_posts']['Insert']>;
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          color: string;
          icon: string | null;
          post_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['categories']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['categories']['Insert']>;
      };
      tags: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          post_count: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['tags']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['tags']['Insert']>;
      };
      blog_tags: {
        Row: {
          blog_post_id: string;
          tag_id: string;
        };
        Insert: Database['public']['Tables']['blog_tags']['Row'];
        Update: Partial<Database['public']['Tables']['blog_tags']['Insert']>;
      };
      blog_revisions: {
        Row: {
          id: string;
          blog_post_id: string;
          title: string | null;
          content: string | null;
          content_html: string | null;
          revision_number: number;
          change_summary: string | null;
          author_id: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['blog_revisions']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['blog_revisions']['Insert']>;
      };
      blog_redirects: {
        Row: {
          id: string;
          from_slug: string;
          to_slug: string;
          redirect_type: 301 | 302;
          is_active: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['blog_redirects']['Row'], 'id' | 'created_at'> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['blog_redirects']['Insert']>;
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          status: 'active' | 'unsubscribed' | 'bounced' | 'pending';
          source: string | null;
          tags: string[];
          subscribed_at: string;
          unsubscribed_at: string | null;
          confirmed_at: string | null;
          ip_address: string | null;
          metadata: Json;
        };
        Insert: Omit<Database['public']['Tables']['newsletter_subscribers']['Row'], 'id' | 'subscribed_at'> & {
          id?: string;
          subscribed_at?: string;
        };
        Update: Partial<Database['public']['Tables']['newsletter_subscribers']['Insert']>;
      };
      media: {
        Row: {
          id: string;
          filename: string;
          original_filename: string | null;
          mime_type: string | null;
          size_bytes: number | null;
          width: number | null;
          height: number | null;
          url: string;
          storage_path: string;
          alt_text: string | null;
          caption: string | null;
          tags: string[];
          uploaded_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['media']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['media']['Insert']>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row'];

export type InsertTables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Insert'];

export type UpdateTables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Update'];
