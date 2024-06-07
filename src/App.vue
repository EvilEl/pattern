<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import { usePathsMainPage } from '@/store'
const { fullPath } = usePathsMainPage()
</script>

<template>
  <div>
    <Breadcrumb :home="{ name: 'main', icon: 'pi pi-home' }" :model="fullPath">
      <template #item="{ item }">
        <router-link v-slot="{ href, navigate }" :to="{ name: item.name }">
          <a :href="href" @click="navigate">
            <span :class="[item.icon, 'text-color']" />
            <span class="text-primary font-semibold">{{ item.title }}</span>
          </a>
        </router-link>
      </template>
    </Breadcrumb>

    <RouterView />
  </div>
</template>
