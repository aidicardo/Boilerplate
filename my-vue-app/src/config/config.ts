export interface AppConfig {
  apiBaseUrl: string
  nodeEnv: string
}

const config: AppConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  nodeEnv: import.meta.env.MODE
}

export default config
