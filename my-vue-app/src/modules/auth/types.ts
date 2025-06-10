export interface User {
  id: number;
  username: string;
  email: string;
  role?: 'admin' | 'user';
}

export interface AuthResponse {
  user: User;
  token: string;
}
