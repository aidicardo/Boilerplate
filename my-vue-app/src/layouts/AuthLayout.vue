<script setup lang="ts">
// Layout for public authentication pages
</script>

<template>
  <!-- Centered container with subtle background -->
  <section class="relative flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" aria-label="Authentication">
    <!-- Decorative background overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-100 to-white" aria-hidden="true"></div>

    <!-- Auth card with transition -->
    <main role="main" class="relative z-10 w-full max-w-md">
      <Transition
        enter-active-class="transform transition duration-300"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transform transition duration-300"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-4"
      >
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <slot />
        </div>
      </Transition>
    </main>
  </section>
</template>
