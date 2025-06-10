<script setup lang="ts">
import RegisterForm from '@/modules/auth/components/RegisterForm.vue'
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-gray-50 p-4" role="main">
    <section class="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow">
      <PageHeader title="Register" />
      <!-- Registration form -->
      <RegisterForm />
    </section>
  </main>
</template>
