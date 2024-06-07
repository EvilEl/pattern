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
      label: 'Decorator',
      name: 'Decorator',
      title: 'Декоратор'
    },
    {
      label: 'Facade',
      name: 'Facade',
      title: 'Фасад'
    },
    {
      label: 'Proxy',
      name: 'Proxy',
      title: 'Прокси'
    }
  ]

  return { paths, fullPath }
})
