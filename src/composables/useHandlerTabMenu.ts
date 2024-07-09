import { useRoute } from 'vue-router'
import { computed } from 'vue'
import type { IPaths } from '@/types'

export function useHandlerTabMenu(paths: IPaths[]) {
  const route = useRoute()
  const pathsName = paths.map((item) => item.label)

  function getTabIndex(): number {
    const routePaths = route.path.split('/').filter((path) => path)
    return pathsName.findIndex((name) => routePaths.includes(name))
  }

  const selectedTabIndex = computed(() => getTabIndex())
  return {
    selectedTabIndex
  }
}
