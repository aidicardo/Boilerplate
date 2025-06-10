<script setup lang="ts">
import { RouterLink } from 'vue-router'
// Emit close event for mobile drawer
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div class="flex h-full flex-col bg-white shadow-md" role="navigation" aria-label="Sidebar">
    <!-- Mobile close button -->
    <div class="flex items-center justify-between px-4 py-2 lg:hidden">
      <span class="text-base font-semibold">Menu</span>
      <button
        type="button"
        class="rounded p-1 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
        aria-label="Close sidebar"
        @click="emit('close')"
      >
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <nav class="flex-1 space-y-1 px-4 py-2">
      <RouterLink
        to="/"
        class="block rounded px-2 py-1 text-gray-700 hover:bg-gray-100"
      >Home</RouterLink>
      <RouterLink
        to="/about"
        class="block rounded px-2 py-1 text-gray-700 hover:bg-gray-100"
      >About</RouterLink>
    </nav>
  </div>
</template>
