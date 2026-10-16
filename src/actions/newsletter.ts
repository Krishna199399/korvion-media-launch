'use server';

import { z } from 'zod';

const emailSchema = z.string().email();

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
}

// In-memory mock store (resets on restart)
const subscribers: Subscriber[] = [
  {
    id: '1',
    email: 'demo@example.com',
    subscribedAt: '2025-01-15T10:00:00Z',
    status: 'active',
  },
  {
    id: '2',
    email: 'test@korvion.com',
    subscribedAt: '2025-01-20T14:30:00Z',
    status: 'active',
  },
];

/**
 * Subscribe to newsletter
 */
export async function subscribeNewsletter(
  email: string
): Promise<{ success: boolean; message: string }> {
  try {
    // Validate email
    const validated = emailSchema.safeParse(email);
    if (!validated.success) {
      return {
        success: false,
        message: 'Please enter a valid email address',
      };
    }

    // Check for duplicates
    const existing = subscribers.find(
      (sub) => sub.email.toLowerCase() === email.toLowerCase()
    );

    if (existing) {
      if (existing.status === 'active') {
        return {
          success: false,
          message: 'This email is already subscribed',
        };
      } else {
        // Reactivate
        existing.status = 'active';
        existing.subscribedAt = new Date().toISOString();
        return {
          success: true,
          message: 'Welcome back! You\'re subscribed again.',
        };
      }
    }

    // Add new subscriber
    const newSubscriber: Subscriber = {
      id: Date.now().toString(),
      email: validated.data,
      subscribedAt: new Date().toISOString(),
      status: 'active',
    };

    subscribers.push(newSubscriber);

    return {
      success: true,
      message: 'Successfully subscribed! Check your inbox for confirmation.',
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}

/**
 * Get all subscribers (admin only)
 */
export async function getSubscribers(): Promise<Subscriber[]> {
  try {
    // TODO: Add authentication check when Supabase is connected
    return [...subscribers].sort(
      (a, b) =>
        new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime()
    );
  } catch (error) {
    console.error('Failed to fetch subscribers:', error);
    throw new Error('Failed to fetch subscribers');
  }
}

/**
 * Delete a subscriber by ID (admin only)
 */
export async function deleteSubscriber(
  id: string
): Promise<{ success: boolean; message: string }> {
  try {
    const index = subscribers.findIndex((sub) => sub.id === id);
    if (index === -1) {
      return { success: false, message: 'Subscriber not found' };
    }
    subscribers.splice(index, 1);
    return { success: true, message: 'Subscriber removed successfully' };
  } catch (error) {
    console.error('Failed to delete subscriber:', error);
    return { success: false, message: 'Failed to delete subscriber' };
  }
}

/**
 * Toggle subscriber active status (admin only)
 */
export async function toggleSubscriberStatus(
  id: string
): Promise<{ success: boolean; status?: 'active' | 'unsubscribed'; message: string }> {
  try {
    const subscriber = subscribers.find((sub) => sub.id === id);
    if (!subscriber) {
      return { success: false, message: 'Subscriber not found' };
    }
    subscriber.status = subscriber.status === 'active' ? 'unsubscribed' : 'active';
    return {
      success: true,
      status: subscriber.status,
      message: `Subscriber marked as ${subscriber.status}`,
    };
  } catch (error) {
    console.error('Failed to toggle subscriber status:', error);
    return { success: false, message: 'Failed to toggle status' };
  }
}

