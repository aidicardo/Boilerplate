import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type AxiosError } from 'axios';
import router from '@/router';
import { useAuthStore } from '@/modules/auth/store/useAuthStore';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: unknown;
}

const defaultConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
};

function attachInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use((config) => {
    const auth = useAuthStore();
    const token = auth.token;
    if (token) {
      config.headers = config.headers || {};
      Object.assign(config.headers, { Authorization: `Bearer ${token}` });
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        router.push({ name: 'login' });
      }
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
      return Promise.reject(error);
    }
  );
}

function createAxiosInstance(config?: AxiosRequestConfig): AxiosInstance {
  const instance = axios.create({ ...defaultConfig, ...config });
  attachInterceptors(instance);
  return instance;
}

const instance = createAxiosInstance();

async function request<T>(method: string, url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await instance.request<T>({ url, method, data, ...config });
    return { success: true, data: response.data };
  } catch (error) {
    const err = error as AxiosError;
    return { success: false, error: err.response?.data || err.message };
  }
}

export function get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
  return request<T>('get', url, undefined, config);
}

export function post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
  return request<T>('post', url, data, config);
}

export function put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
  return request<T>('put', url, data, config);
}

export function patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
  return request<T>('patch', url, data, config);
}

export function del<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
  return request<T>('delete', url, undefined, config);
}

export function createApiClient(config?: AxiosRequestConfig) {
  const customInstance = createAxiosInstance(config);
  return {
    get: <T>(url: string, cfg?: AxiosRequestConfig) => customInstance.get<T>(url, cfg),
    post: <T>(url: string, data?: unknown, cfg?: AxiosRequestConfig) => customInstance.post<T>(url, data, cfg),
    put: <T>(url: string, data?: unknown, cfg?: AxiosRequestConfig) => customInstance.put<T>(url, data, cfg),
    patch: <T>(url: string, data?: unknown, cfg?: AxiosRequestConfig) => customInstance.patch<T>(url, data, cfg),
    delete: <T>(url: string, cfg?: AxiosRequestConfig) => customInstance.delete<T>(url, cfg)
  };
}

export default {
  get,
  post,
  put,
  patch,
  delete: del,
  createApiClient
};
