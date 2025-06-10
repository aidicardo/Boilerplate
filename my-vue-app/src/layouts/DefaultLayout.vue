<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import { useLayout } from '@/composables/useLayout'

// Manage sidebar/drawer visibility
const { isDrawerOpen, toggleDrawer, closeDrawer } = useLayout()
</script>

<template>
  <!-- Overall page container -->
  <div class="min-h-screen bg-gray-50 lg:grid lg:grid-cols-[16rem_1fr]">
    <!-- Mobile overlay when sidebar is open -->
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-200"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isDrawerOpen"
        class="fixed inset-0 z-40 bg-black/50 lg:hidden"
        aria-hidden="true"
        @click="closeDrawer"
      ></div>
    </Transition>

    <!-- Sidebar navigation -->
    <aside
      class="fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-md transition-transform duration-200 lg:static lg:translate-x-0"
      :class="{ '-translate-x-full': !isDrawerOpen, 'translate-x-0': isDrawerOpen }"
      role="navigation"
      aria-label="Main sidebar"
    >
      <TheSidebar @close="closeDrawer" />
    </aside>

    <!-- Main column -->
    <div class="flex min-h-screen flex-col lg:ml-64">
      <!-- Sticky header -->
      <header class="sticky top-0 z-30 w-full" role="banner">
        <TheHeader @toggle="toggleDrawer" />
      </header>

      <!-- Scrollable content area -->
      <main id="main" role="main" class="flex-1 overflow-auto p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>
