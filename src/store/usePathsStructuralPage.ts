import { createGlobalState } from '@vueuse/core'
import { useCreateBreadCrumbs } from '../composables'
import type { IPaths } from '@/types'

export const usePathsStructuralPage = createGlobalState(() => {
  const { fullPath } = useCreateBreadCrumbs()

  const paths: IPaths[] = [
    {
      label: 'adapter',
      name: 'adapter',
      title: 'Адаптер'
    },
    {
      label: 'decorator',
      name: 'decorator',
      title: 'Декоратор'
    },
    {
      label: 'facade',
      name: 'facade',
      title: 'Фасад'
    },
    {
      label: 'proxy',
      name: 'proxy',
      title: 'Прокси'
    }
  ]

  return { paths, fullPath }
})
