<script setup lang="ts">
import LoginForm from '@/modules/auth/components/LoginForm.vue'
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-gray-50 p-4" role="main">
    <section class="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow">
      <PageHeader title="Sign in" />
      <!-- Login form -->
      <LoginForm />
    </section>
  </main>
</template>
