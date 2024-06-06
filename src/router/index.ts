import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../pages/home/index.vue'),
    meta: {
      title: 'Паттерны'
    }
  },
  {
    path: '/generating',
    name: 'generating',
    component: () => import('../pages/generating/index.vue'),
    meta: {
      title: 'Порождающие'
    },
    children: [
      {
        path: 'builder',
        name: 'builder',
        component: () => import('../components/generating/GenBuilder.vue'),
        meta: {
          title: 'Строитель'
        }
      },
      {
        path: 'fabrica',
        name: 'fabrica',
        component: () => import('../components/generating/GenFabrica.vue'),
        meta: {
          title: 'Фабрика'
        }
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../pages/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
