export interface AppUser {
  id: number | string;
  name: string;
  email: string;
  avatar?: string;
  role?: 'admin' | 'user';
}

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'fa';

export interface AppSettings {
  theme: Theme;
  language: Language;
}
