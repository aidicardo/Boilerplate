<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'

// Controls sidebar visibility on small screens
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>

<template>
  <!-- Root container spans full viewport height -->
  <div class="flex min-h-screen flex-col bg-gray-50">
    <!-- Sticky application header -->
    <header class="sticky top-0 z-30 w-full" role="banner">
      <TheHeader @toggle-sidebar="toggleSidebar" />
    </header>

    <div class="flex flex-1 overflow-hidden">
      <!-- Overlay for mobile sidebar -->
      <Transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-200"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isSidebarOpen"
          class="fixed inset-0 z-40 bg-black/50 md:hidden"
          aria-hidden="true"
          @click="closeSidebar"
        ></div>
      </Transition>

      <!-- Collapsible sidebar navigation -->
      <aside
        role="navigation"
        aria-label="Sidebar"
        class="fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-md transition-transform duration-200 md:static md:translate-x-0"
        :class="{ '-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen }"
      >
        <TheSidebar @close="closeSidebar" />
      </aside>

      <!-- Main content area -->
      <main id="main" role="main" class="flex-1 overflow-y-auto p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>
