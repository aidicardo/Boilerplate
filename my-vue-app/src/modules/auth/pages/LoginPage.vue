<script setup lang="ts">
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';
import LoginForm from '../components/LoginForm.vue';

const { isAuthenticated } = useAuth();
const router = useRouter();

watchEffect(() => {
  if (isAuthenticated.value) {
    router.push('/dashboard');
  }
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <div class="w-full max-w-md bg-white rounded shadow p-6">
      <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>
      <LoginForm />
    </div>
  </div>
</template>
