import type { IPaths } from '@/types'

export const usePathsBehavioralPage = () => {
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

  return { paths }
}
