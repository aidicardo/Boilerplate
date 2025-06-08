<script setup lang="ts">
import { reactive } from 'vue';
import { useAuth } from '../composables/useAuth';

interface RegisterFormState {
  username: string;
  email: string;
  password: string;
}

const form = reactive<RegisterFormState>({
  username: '',
  email: '',
  password: ''
});

const { register, loading, error } = useAuth();

async function submit() {
  await register({ ...form });
}
</script>

<template>
  <form @submit.prevent="submit" class="space-y-4">
    <div>
      <label class="block text-sm font-medium">Username</label>
      <input v-model="form.username" type="text" class="border rounded w-full px-2 py-1" required />
    </div>
    <div>
      <label class="block text-sm font-medium">Email</label>
      <input v-model="form.email" type="email" class="border rounded w-full px-2 py-1" required />
    </div>
    <div>
      <label class="block text-sm font-medium">Password</label>
      <input v-model="form.password" type="password" class="border rounded w-full px-2 py-1" required />
    </div>
    <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    <button type="submit" :disabled="loading" class="bg-blue-500 text-white px-4 py-2 rounded">
      {{ loading ? 'Registering...' : 'Register' }}
    </button>
  </form>
</template>
