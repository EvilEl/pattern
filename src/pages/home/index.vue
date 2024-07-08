<script setup lang="ts">
import { useHandlerHome } from './composables/useHandlerHome'
import TabMenuPaths from '@/components/TabMenuPaths.vue'

const { selectedTabIndex, mainPaths } = useHandlerHome()
</script>
<template>
  <TabMenuPaths :selected-tab-index="selectedTabIndex" :paths="mainPaths" />
</template>
