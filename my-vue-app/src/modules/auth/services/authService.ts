import axios from 'axios';
import type { AuthResponse } from '../types';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function login(username: string, password: string): Promise<AuthResponse> {
  try {
    const { data } = await apiClient.post<AuthResponse>('/login', { username, password });
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
}

export async function register(payload: { username: string; email: string; password: string; }): Promise<AuthResponse> {
  try {
    const { data } = await apiClient.post<AuthResponse>('/register', payload);
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
}

export async function logout(): Promise<void> {
  try {
    await apiClient.post('/logout');
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Logout failed');
  }
}

export default {
  login,
  register,
  logout
};
