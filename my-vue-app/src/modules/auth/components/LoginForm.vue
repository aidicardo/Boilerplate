<script setup lang="ts">
import { reactive } from 'vue';
import { useAuth } from '../composables/useAuth';

interface LoginFormState {
  username: string;
  password: string;
}

const form = reactive<LoginFormState>({
  username: '',
  password: ''
});

const { login, loading, error } = useAuth();

async function submit() {
  await login(form.username, form.password);
}
</script>

<template>
  <form @submit.prevent="submit" class="space-y-4">
    <div>
      <label class="block text-sm font-medium">Username</label>
      <input v-model="form.username" type="text" class="border rounded w-full px-2 py-1" required />
    </div>
    <div>
      <label class="block text-sm font-medium">Password</label>
      <input v-model="form.password" type="password" class="border rounded w-full px-2 py-1" required />
    </div>
    <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    <button type="submit" :disabled="loading" class="bg-blue-500 text-white px-4 py-2 rounded">
      {{ loading ? 'Logging in...' : 'Login' }}
    </button>
  </form>
</template>
