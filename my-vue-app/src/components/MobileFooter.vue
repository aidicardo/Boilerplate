<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 z-30 flex justify-around bg-white shadow pt-safe pb-safe">
    <RouterLink
      to="/"
      class="flex flex-1 flex-col items-center gap-1 py-2"
      :class="{ 'text-blue-600 font-semibold': route.name === 'home' }"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12L11.2045 3.04549c.4393-.43934 1.1517-.43934 1.591 0L21.75 12M4.5 9.75v10.125a.75.75 0 00.75.75H9.75v-4.875c0-.6213.5037-1.125 1.125-1.125h2.25c.6213 0 1.125.5037 1.125 1.125V20.625h4.125a.75.75 0 00.75-.75V9.75M8.25 21h8.25" />
      </svg>
      <span class="text-xs">Home</span>
    </RouterLink>
    <RouterLink
      to="/about"
      class="flex flex-1 flex-col items-center gap-1 py-2"
      :class="{ 'text-blue-600 font-semibold': route.name === 'about' }"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.0415-.0207c.5731-.2866 1.2184.231 1.063 0.8527l-.709 2.8359c-.1554.6217.4899 1.1393 1.063 0.8527L12.75 15.75M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9ZM12 8.25h.0075v.0075H12V8.25z" />
      </svg>
      <span class="text-xs">About</span>
    </RouterLink>
    <RouterLink
      to="/faq"
      class="flex flex-1 flex-col items-center gap-1 py-2"
      :class="{ 'text-blue-600 font-semibold': route.name === 'faq' }"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.172-1.025 3.071-1.025 4.243 0 1.172 1.025 1.172 2.687 0 3.712-.204.178-.43.325-.67.441-.746.361-1.451.999-1.451 1.828V14.25M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9ZM12 17.25h.0075v.0075H12V17.25z" />
      </svg>
      <span class="text-xs">FAQ</span>
    </RouterLink>
    <RouterLink
      to="/blog"
      class="flex flex-1 flex-col items-center gap-1 py-2"
      :class="{ 'text-blue-600 font-semibold': route.name === 'blog' }"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5M12 10.5h1.5M6 13.5h7.5M6 16.5h7.5M16.5 7.5H19.875C20.4963 7.5 21 8.0037 21 8.625V18c0 1.2426-.9926 2.25-2.25 2.25M16.5 7.5V18c0 1.2426-.9926 2.25-2.25 2.25M16.5 7.5V4.875c0-.6213-.5037-1.125-1.125-1.125H4.125C3.5037 3.75 3 4.2537 3 4.875V18c0 1.2426 1.0074 2.25 2.25 2.25H18.75M6 7.5h3v3H6V7.5z" />
      </svg>
      <span class="text-xs">Blog</span>
    </RouterLink>
    <RouterLink
      to="/profile"
      class="flex flex-1 flex-col items-center gap-1 py-2"
      :class="{ 'text-blue-600 font-semibold': route.name === 'profile' }"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118C4.571 16.037 7.902 12.75 12 12.75s7.429 3.287 7.499 7.368c-2.283 1.048-4.823 1.632-7.499 1.632-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
      <span class="text-xs">Profile</span>
    </RouterLink>
  </nav>
</template>

