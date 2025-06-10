<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <main class="space-y-6 p-4" role="main">
    <!-- Page title and intro -->
    <PageHeader title="Home" subtitle="Dashboard overview" />

    <!-- Example content grid -->
    <section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Dashboard quick links">
      <div class="rounded-lg bg-white p-4 shadow">Card 1</div>
      <div class="rounded-lg bg-white p-4 shadow">Card 2</div>
      <div class="rounded-lg bg-white p-4 shadow">Card 3</div>
    </section>
  </main>
</template>
