<script setup lang="ts">
import { usePathsStructuralPage } from './composables'
import { useHandlerTabMenu } from '@/composables'
import TabMenuPaths from '@/components/TabMenuPaths.vue'

const { paths } = usePathsStructuralPage()

const { selectedTabIndex } = useHandlerTabMenu(paths)
</script>
<template>
  <TabMenuPaths :selected-tab-index="selectedTabIndex" :paths="paths" />
  <div class="strutural">
    <RouterView />
  </div>
</template>
<style scoped>
.strutural {
  margin-top: 10px;
}
</style>
