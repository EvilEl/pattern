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
        component: () => import('../components/generating/Builder.vue'),
        meta: {
          title: 'Строитель'
        }
      },
      {
        path: 'fabrica',
        name: 'fabrica',
        component: () => import('../components/generating/Fabrica.vue'),
        meta: {
          title: 'Фабрика'
        }
      },
      {
        path: 'singleton',
        name: 'singleton',
        component: () => import('../components/generating/Singleton.vue'),
        meta: {
          title: 'Одиночка'
        }
      },
      {
        path: 'abstract-fabrica',
        name: 'abstract-fabrica',
        component: () => import('../components/generating/AbstractFabrica.vue'),
        meta: {
          title: 'Абстрактная фабрика'
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
