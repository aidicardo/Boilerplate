<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-gray-50 p-4" role="main">
    <section class="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow">
      <PageHeader title="Forgot Password" />
      <!-- Password recovery form -->
      <form class="space-y-4" aria-label="Password recovery form">
        <div>
          <label for="email" class="mb-1 block text-sm font-medium">Email</label>
          <input id="email" type="email" class="w-full rounded border px-3 py-2" />
        </div>
        <button type="submit" class="w-full rounded bg-blue-500 py-2 text-white">Send recovery link</button>
      </form>
    </section>
  </main>
</template>
