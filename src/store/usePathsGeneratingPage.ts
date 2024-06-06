import { createGlobalState } from '@vueuse/core'
import { useCreateBreadCrumbs } from '../composables'
import type { IPaths } from '@/types'

export const usePathsGeneratingPage = createGlobalState(() => {
  const { fullPath } = useCreateBreadCrumbs()

  const paths: IPaths[] = [
    {
      label: 'abstract-fabrica',
      name: 'abstract-fabrica',
      title: 'Абстрактная фабрика'
    },
    {
      label: 'fabrica',
      name: 'fabrica',
      title: 'Фабрика'
    },
    {
      label: 'builder',
      name: 'builder',
      title: 'Строитель'
    },
    {
      label: 'singleton',
      name: 'singleton',
      title: 'Одиночка'
    }
  ]

  return { paths, fullPath }
})
