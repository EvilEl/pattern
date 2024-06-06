import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationMatched } from 'vue-router'

interface IBreadCrumbs {
  url: string
  label: string
  title: string
}

export function useCreateBreadCrumbs() {
  const route = useRoute()

  function getBreadCrumbs(items: RouteLocationMatched[]): IBreadCrumbs[] {
    return items.map((item) => ({
      url: item.path,
      label: String(item.name ?? ''),
      title: String(item.meta.title ?? '')
    }))
  }

  const fullPath = computed<IBreadCrumbs[]>(() => {
    return getBreadCrumbs(route.matched)
  })

  return {
    fullPath
  }
}
