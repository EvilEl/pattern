import { usePathsGeneratingPage } from '@/store'
import { useHandlerTabMenu } from '@/composables'

export function useHandlerHome() {
  const { paths } = usePathsGeneratingPage()
  const { selectedTabIndex } = useHandlerTabMenu(paths)
  return { selectedTabIndex }
}
