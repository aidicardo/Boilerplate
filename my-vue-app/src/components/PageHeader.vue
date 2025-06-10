<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

const props = defineProps<Props>()
</script>

<template>
  <header class="mb-6" aria-labelledby="page-title">
    <h1 id="page-title" class="text-2xl font-bold text-gray-800">{{ props.title }}</h1>
    <p v-if="props.subtitle" class="mt-1 text-sm text-gray-600">{{ props.subtitle }}</p>
  </header>
</template>
