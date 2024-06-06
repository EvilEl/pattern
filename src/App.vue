<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import { usePathsMainPage } from './store'
const { fullPath } = usePathsMainPage()
</script>

<template>
  <div>
    test
    <Breadcrumb :home="{ url: '/', icon: 'pi pi-home' }" :model="fullPath">
      <template #item="{ item }">
        <div v-if="item.url">
          <router-link v-slot="{ href, navigate }" :to="item.url" :name="item.name">
            <a :href="href" @click="navigate">
              <span :class="[item.icon, 'text-color']" />
              <span class="text-primary font-semibold">{{ item.title }}</span>
            </a>
          </router-link>
        </div>
      </template>
    </Breadcrumb>

    <RouterView />
  </div>
</template>
