<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useAppStore } from '@/store/useAppStore'
import { useAuthStore } from '@/modules/auth/store/useAuthStore'

const route = useRoute()

const appStore = useAppStore()
const authStore = useAuthStore()

const layout = computed(() => {
  const name = route.meta.layout as string | undefined
  return name === 'auth' || name === 'public' ? AuthLayout : DefaultLayout
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <router-view v-slot="{ Component }">
      <Suspense>
        <transition name="fade" mode="out-in">
          <component :is="layout">
            <component :is="Component" />
          </component>
        </transition>
      </Suspense>
    </router-view>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
