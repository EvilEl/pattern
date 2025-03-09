<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'

import { useCreateBreadCrumbs } from '@/composables'

const { fullPaths } = useCreateBreadCrumbs()
</script>

<template>
  <div>
    <Breadcrumb :home="{ label: 'main', icon: 'pi pi-home' }" :model="fullPaths">
      <template #item="{ item }">
        <router-link v-slot="{ href, navigate }" :to="{ name: String(item.label) }">
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
