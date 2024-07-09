import { useRoute } from 'vue-router'
import { computed } from 'vue'
import type { IPaths } from '@/types'

export function useHandlerTabMenu(paths: IPaths[]) {
  const route = useRoute()
  const routePaths = route.path.split('/').filter((path) => path)

  const selectedTabIndex = computed(() => getIndex())

  function getIndex() {
    return paths.findIndex((path) => routePaths.includes(path.label))
  }
  return {
    selectedTabIndex
  }
}
