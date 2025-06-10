import { computed } from 'vue'
import type { Ref } from 'vue'

export function useLoadingManager(loading: Ref<boolean>) {
  const isLoading = computed(() => loading.value);

  function setLoading(status: boolean): void {
    loading.value = status;
  }

  return {
    isLoading,
    setLoading,
  };
}
