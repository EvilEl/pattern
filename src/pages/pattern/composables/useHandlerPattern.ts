import { useHandlerTabMenu } from '@/composables'
import type { IPaths } from '@/types/IPathsMenuTab'

export function useHandlerPattern() {
  const paths: IPaths[] = [
    {
      label: 'generating',
      name: 'generating',
      title: 'Порождающие'
    },
    {
      label: 'structural',
      name: 'structural',
      title: 'Структурные'
    },
    {
      label: 'behavioral',
      name: 'behavioral',
      title: 'Поведенческие'
    }
  ]
  const { selectedTabIndex } = useHandlerTabMenu(paths)

  return { selectedTabIndex, paths }
}
