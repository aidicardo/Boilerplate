<script setup lang="ts">
// Emit toggle event to open/close the sidebar on mobile
const emit = defineEmits<{
  (e: 'toggle'): void
}>()
</script>

<template>
  <!-- Application header -->
  <nav
    class="flex items-center justify-between bg-white px-4 py-2 shadow-md lg:ml-64"
    role="banner"
  >
    <!-- Hamburger button visible on mobile -->
    <button
      type="button"
      class="rounded p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
      aria-label="Toggle sidebar"
      @click="emit('toggle')"
    >
      <span class="sr-only">Open sidebar</span>
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <h1 class="text-lg font-semibold">My App</h1>

    <!-- Placeholder for right aligned actions -->
    <div class="flex items-center space-x-4">
      <slot />
    </div>
  </nav>
</template>
