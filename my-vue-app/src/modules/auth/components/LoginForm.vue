<script setup lang="ts">
import { useAuth } from '../composables/useAuth';
import { useForm, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

interface LoginFormState {
  username: string;
  password: string;
}

const { login, loading, error } = useAuth();

const schema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

const { handleSubmit } = useForm<LoginFormState>({
  validationSchema: schema
});

const onSubmit = async (values: LoginFormState) => {
  await login(values.username, values.password);
};

const submitForm = handleSubmit(onSubmit);
</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-1">Username</label>
      <Field name="username" type="text" class="border rounded w-full px-2 py-1" />
      <ErrorMessage name="username" class="text-red-500 text-sm" />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1">Password</label>
      <Field name="password" type="password" class="border rounded w-full px-2 py-1" />
      <ErrorMessage name="password" class="text-red-500 text-sm" />
    </div>
    <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    <button type="submit" :disabled="loading" class="bg-blue-500 text-white px-4 py-2 rounded w-full">
      {{ loading ? 'Logging in...' : 'Login' }}
    </button>
  </form>
</template>
