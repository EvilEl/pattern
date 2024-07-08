import { useRoute } from 'vue-router'
import { computed } from 'vue'
import type { IPaths } from '@/types'

export function useHandlerTabMenu(paths: IPaths[]) {
  const route = useRoute()

  function getTabIndex(): number {
    const pathsName = paths.map((item) => item.label)
    const routePaths = route.path.split('/').filter((path) => path)
    return pathsName.findIndex((name) => routePaths.includes(name))
  }

  const selectedTabIndex = computed(() => getTabIndex())
  return {
    selectedTabIndex
  }
}
