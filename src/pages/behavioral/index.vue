<script setup lang="ts">
import { usePathsBehavioralPage } from './composables'
import { useHandlerTabMenu } from '@/composables'
import TabMenuPaths from '@/components/TabMenuPaths.vue'

const { paths } = usePathsBehavioralPage()
const { selectedTabIndex } = useHandlerTabMenu(paths)
</script>
<template>
  <TabMenuPaths :selected-tab-index="selectedTabIndex" :paths="paths" />
  <div class="strutural">
    <RouterView />
  </div>
</template>
<style scoped>
.behavioral {
  margin-top: 10px;
}
</style>
