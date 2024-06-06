import { createGlobalState } from '@vueuse/core'
import { useCreateBreadCrumbs } from '../composables'
import type { IPaths } from '@/types'

export const usePathsMainPage = createGlobalState(() => {
  const { fullPath } = useCreateBreadCrumbs()

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

  return { paths, fullPath }
})
