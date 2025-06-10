<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <main class="space-y-6 p-4" role="main">
    <PageHeader title="Contact Us" />

    <!-- Simple contact form placeholder -->
    <form class="space-y-4 max-w-md" aria-label="Contact form">
      <div>
        <label for="name" class="mb-1 block text-sm font-medium">Name</label>
        <input id="name" type="text" class="w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label for="message" class="mb-1 block text-sm font-medium">Message</label>
        <textarea id="message" rows="4" class="w-full rounded border px-3 py-2"></textarea>
      </div>
      <button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white">Send</button>
    </form>
  </main>
</template>
