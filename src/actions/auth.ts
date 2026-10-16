"use server";

import { redirect } from "next/navigation";

// Mock auth functions - will connect to Supabase later
// TODO: Replace with actual Supabase authentication

export interface User {
  id: string;
  email: string;
  name: string;
  role: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR";
}

export interface AuthResult {
  success: boolean;
  error?: string;
  user?: User;
}

export async function signIn(
  email: string,
  password: string
): Promise<AuthResult> {
  // TODO: Connect to Supabase Auth
  // For now, accept any email/password for development
  try {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call

    if (!email || !password) {
      return {
        success: false,
        error: "Email and password are required",
      };
    }

    // Mock successful login
    return {
      success: true,
      user: {
        id: "1",
        email,
        name: email.split("@")[0],
        role: "ADMIN",
      },
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to sign in",
    };
  }
}

export async function signOut(): Promise<{ success: boolean }> {
  // TODO: Connect to Supabase
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export async function getSession(): Promise<{ user: User | null }> {
  // TODO: Get real session from Supabase
  // For development, return mock logged-in admin
  return {
    user: {
      id: "1",
      email: "admin@korvionmedia.com",
      name: "Admin User",
      role: "ADMIN",
    },
  };
}

export async function requireAuth() {
  const session = await getSession();
  if (!session.user) {
    redirect("/admin/login");
  }
  return session.user;
}
