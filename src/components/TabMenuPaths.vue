<script setup lang="ts">
import type { IPaths } from '@/types'
import TabMenu from 'primevue/tabmenu'

interface IProps {
  selectedTabIndex: number
  paths: IPaths[]
}

defineProps<IProps>()
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

<style scoped></style>
