/// <reference types="vite/client" />

import ApiClient from './src/services/ApiClient'
import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: typeof ApiClient
  }
}
