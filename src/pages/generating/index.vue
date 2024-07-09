<script setup lang="ts">
import { usePathsGeneratingPage } from './composables'
import TabMenuPaths from '@/components/TabMenuPaths.vue'
import { useHandlerTabMenu } from '@/composables'

const { paths } = usePathsGeneratingPage()
const { selectedTabIndex } = useHandlerTabMenu(paths)
</script>
<template>
  <TabMenuPaths :selected-tab-index="selectedTabIndex" :paths="paths" />
  <div class="generating">
    <RouterView />
  </div>
</template>
<style scoped>
.generating {
  margin-top: 10px;
}
</style>
