import { useHandlerTabMenu } from '@/composables'
import type { IPaths } from '@/types/IPathsMenuTab'

export function useHandlerHome() {
  const mainPaths: IPaths[] = [
    {
      label: 'pattern',
      name: 'pattern',
      title: 'Паттерны'
    },
    {
      label: 'solid',
      name: 'solid',
      title: 'Принципы SOLID'
    }
  ]

  const { selectedTabIndex } = useHandlerTabMenu(mainPaths)
  return { selectedTabIndex, mainPaths }
}
