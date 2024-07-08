<script setup lang="ts">
import { useHandlerPattern } from './composables/useHandlerPattern'
import TabMenuPaths from '@/components/TabMenuPaths.vue'

const { selectedTabIndex, paths } = useHandlerPattern()
</script>
<template>
  <TabMenuPaths :selected-tab-index="selectedTabIndex" :paths="paths" />
  <router-view></router-view>
</template>
