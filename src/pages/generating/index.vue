<script setup lang="ts">
import { usePathsGeneratingPage } from '../../store/usePathsGeneratingPage'
import TabMenu from 'primevue/tabmenu'
import { useGenerating } from './composables'

const { paths } = usePathsGeneratingPage()
const { selectedTabIndex } = useGenerating()
</script>
<template>
  <TabMenu :active-index="selectedTabIndex" :model="paths">
    <template #item="{ item }">
      <router-link class="p-menuitem-link" :to="{ name: String(item.name) }">
        {{ item.title }}
      </router-link>
    </template>
  </TabMenu>

  <RouterView />
</template>
<style scoped></style>
