import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import type { AuthResponse } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
export const supabase = createClient(supabaseUrl, supabaseKey);

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function login(username: string, password: string): Promise<AuthResponse> {
  try {
    // authenticate with Supabase
    const { data: supaData, error: supaError } = await supabase.auth.signInWithPassword({
      email: username,
      password
    });
    if (supaError) throw new Error(supaError.message);

    // authenticate with backend
    const { data } = await apiClient.post<AuthResponse>('/login', { username, password });
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message || 'Login failed');
  }
}

export async function register(payload: { username: string; email: string; password: string; }): Promise<AuthResponse> {
  try {
    // register with Supabase
    const { data: supaData, error: supaError } = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password
    });
    if (supaError) throw new Error(supaError.message);

    const { data } = await apiClient.post<AuthResponse>('/register', payload);
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message || 'Registration failed');
  }
}

export async function logout(): Promise<void> {
  try {
    await Promise.all([
      apiClient.post('/logout'),
      supabase.auth.signOut()
    ]);
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message || 'Logout failed');
  }
}

export default {
  login,
  register,
  logout
};
