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
    }
  ]

  return { paths, fullPath }
})
