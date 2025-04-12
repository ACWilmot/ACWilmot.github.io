
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ogszwetzvvaqmlswrajz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nc3p3ZXR6dnZhcW1sc3dyYWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1OTgyMjUsImV4cCI6MjA1OTE3NDIyNX0.5LU8ETX9d8U9vAnXXtg23Mx6SxeOVJk8mngbgu8JIyE";

// Create a custom storage implementation that falls back to memory storage when localStorage is unavailable
const customStorage = {
  // In-memory fallback storage
  memoryStorage: new Map<string, string>(),
  
  getItem: (key: string): string | null => {
    try {
      const value = localStorage.getItem(key);
      if (value !== null) return value;
      return customStorage.memoryStorage.get(key) || null;
    } catch (error) {
      console.log('Using memory storage fallback for read');
      return customStorage.memoryStorage.get(key) || null;
    }
  },
  
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.log('Using memory storage fallback for write');
      customStorage.memoryStorage.set(key, value);
    }
  },
  
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log('Using memory storage fallback for remove');
      customStorage.memoryStorage.delete(key);
    }
  }
};

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: customStorage,
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'implicit',
  }
});
