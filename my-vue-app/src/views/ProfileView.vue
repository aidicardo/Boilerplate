<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <main class="space-y-6 p-4" role="main">
    <PageHeader title="Profile" subtitle="Manage your personal information" />

    <!-- User information placeholder -->
    <section class="rounded-lg bg-white p-4 shadow" aria-label="User details">
      <h2 class="text-lg font-semibold">User Details</h2>
      <p class="mt-2 text-sm text-gray-600">Update your profile information.</p>
    </section>
  </main>
</template>
