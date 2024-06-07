<script setup lang="ts">
import { usePathsGeneratingPage } from '../../store/usePathsGeneratingPage'
import TabMenu from 'primevue/tabmenu'
import { useHandlerTabMenu } from '@/composables'

const { paths } = usePathsGeneratingPage()
const { selectedTabIndex } = useHandlerTabMenu(paths)
</script>
<template>
  <TabMenu :active-index="selectedTabIndex" :model="paths">
    <template #item="{ item }">
      <router-link class="p-menuitem-link" :to="{ name: String(item.name) }">
        {{ item.title }}
      </router-link>
    </template>
  </TabMenu>
  <div class="generating">
    <RouterView />
  </div>
</template>
<style scoped>
.generating {
  margin-top: 10px;
}
</style>
