import { createGlobalState } from '@vueuse/core'
import { useCreateBreadCrumbs } from '../composables'
import type { IPaths } from '@/types'

export const usePathsGeneratingPage = createGlobalState(() => {
  const { fullPath } = useCreateBreadCrumbs()

  const paths: IPaths[] = [
    {
      label: 'builder',
      name: 'builder',
      title: 'Строитель'
    },
    {
      label: 'fabrica',
      name: 'fabrica',
      title: 'Фабрика'
    }
  ]

  return { paths, fullPath }
})
