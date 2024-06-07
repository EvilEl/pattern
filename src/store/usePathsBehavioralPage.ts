import { createGlobalState } from '@vueuse/core'
import { useCreateBreadCrumbs } from '../composables'
import type { IPaths } from '@/types'

export const usePathsBehavioralPage = createGlobalState(() => {
  const { fullPath } = useCreateBreadCrumbs()

  const paths: IPaths[] = [
    {
      label: 'chainResponsibility',
      name: 'chainResponsibility',
      title: 'Цепочку ответственности'
    },
    {
      label: 'comand',
      name: 'comand',
      title: 'Команду'
    },
    {
      label: 'observer',
      name: 'observer',
      title: 'Наблюдателя'
    },
    {
      label: 'strategy',
      name: 'strategy',
      title: 'Стратегию'
    }
  ]

  return { paths, fullPath }
})
