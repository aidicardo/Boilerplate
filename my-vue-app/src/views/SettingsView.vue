<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <main class="space-y-6 p-4" role="main">
    <PageHeader title="Settings" subtitle="Application preferences" />

    <!-- Settings sections placeholder -->
    <section class="divide-y rounded-lg bg-white shadow" aria-label="Settings sections">
      <div class="p-4">
        <h2 class="text-lg font-semibold">General</h2>
      </div>
      <div class="p-4">
        <h2 class="text-lg font-semibold">Notifications</h2>
      </div>
    </section>
  </main>
</template>
