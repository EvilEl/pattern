import { usePathsGeneratingPage } from '@/store'
import { useHandlerTabMenu } from '@/composables'

export function useGenerating() {
  const { paths } = usePathsGeneratingPage()
  const { selectedTabIndex } = useHandlerTabMenu(paths)
  return {
    selectedTabIndex
  }
}
