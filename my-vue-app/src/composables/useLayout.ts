import { ref, computed, onMounted, onUnmounted } from 'vue'

// Global drawer state shared across layout components
const drawerOpen = ref(false)

function handleKey(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    drawerOpen.value = false
  }
}

/** Composable managing layout behaviour */
export function useLayout() {
  const isDrawerOpen = computed(() => drawerOpen.value)

  function openDrawer(): void {
    drawerOpen.value = true
  }

  function closeDrawer(): void {
    drawerOpen.value = false
  }

  function toggleDrawer(): void {
    drawerOpen.value = !drawerOpen.value
  }

  // Close drawer when ESC key pressed
  onMounted(() => {
    window.addEventListener('keydown', handleKey)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKey)
  })

  return {
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  }
}
