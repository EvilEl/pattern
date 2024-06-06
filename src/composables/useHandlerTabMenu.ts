import { useRoute } from 'vue-router'
import { computed } from 'vue'
import type { IPaths } from '@/types'

export function useHandlerTabMenu(paths: IPaths[]) {
  const route = useRoute()
  const selectedTabIndex = computed(() => paths.findIndex((item) => item.label === route.name))
  return {
    selectedTabIndex
  }
}
