<script setup lang="ts">
import { usePathsMainPage } from '@/store'
import { useHandlerHome } from './composables/useHandlerHome'
import TabMenuPaths from '@/components/TabMenuPaths.vue'

const { paths } = usePathsMainPage()
const { selectedTabIndex } = useHandlerHome()
</script>
<template>
  <TabMenuPaths :selected-tab-index="selectedTabIndex" :paths="paths" />
</template>
