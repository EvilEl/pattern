<script setup lang="ts">
import { usePathsBehavioralPage } from '@/store'
import TabMenu from 'primevue/tabmenu'
import { useHandlerTabMenu } from '@/composables'

const { paths } = usePathsBehavioralPage()
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
  <div class="strutural">
    <RouterView />
  </div>
</template>
<style scoped>
.behavioral {
  margin-top: 10px;
}
</style>
