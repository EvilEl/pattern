<script setup lang="ts">
import TabMenu from 'primevue/tabmenu'
import { usePathsMainPage } from '@/store'
import { useHandlerHome } from './composables/useHandlerHome'
const { paths } = usePathsMainPage()
const { selectedTabIndex } = useHandlerHome()
</script>
<template>
  <TabMenu :active-index="selectedTabIndex" :model="paths">
    <template #item="{ item }">
      <router-link class="p-menuitem-link" :to="{ name: String(item.name) }">
        {{ item.title }}
      </router-link>
    </template>
  </TabMenu>
</template>
