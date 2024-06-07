import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      title: 'Паттерны'
    }
  },
  {
    path: '/generating',
    name: 'generating',
    component: () => import('@/pages/generating/index.vue'),
    meta: {
      title: 'Порождающие'
    },
    children: [
      {
        path: 'builder',
        name: 'builder',
        component: () => import('@/components/generating/Builder.vue'),
        meta: {
          title: 'Строитель'
        }
      },
      {
        path: 'fabrica',
        name: 'fabrica',
        component: () => import('@/components/generating/Fabrica.vue'),
        meta: {
          title: 'Фабрика'
        }
      },
      {
        path: 'singleton',
        name: 'singleton',
        component: () => import('@/components/generating/Fabrica.vue'),
        meta: {
          title: 'Одиночка'
        }
      },
      {
        path: 'abstract-fabrica',
        name: 'abstract-fabrica',
        component: () => import('@/components/generating/AbstractFabrica.vue'),
        meta: {
          title: 'Абстрактная фабрика'
        }
      }
    ]
  },
  {
    path: '/structural',
    name: 'structural',
    component: () => import('@/pages/structural/index.vue'),
    meta: {
      title: 'Структурные'
    },
    children: [
      {
        path: 'adapter',
        name: 'adapter',
        component: () => import('@/components/structural/Adapter.vue'),
        meta: {
          title: 'Адаптер'
        }
      },
      {
        path: 'Decorator',
        name: 'Decorator',
        component: () => import('@/components/structural/Decorator.vue'),
        meta: {
          title: 'Декоратор'
        }
      },
      {
        path: 'Facade',
        name: 'Facade',
        component: () => import('@/components/structural/Facade.vue'),
        meta: {
          title: 'Фасад'
        }
      },
      {
        path: 'Proxy',
        name: 'Proxy',
        component: () => import('@/components/structural/Proxy.vue'),
        meta: {
          title: 'Прокси'
        }
      }
    ]
  },
  {
    path: '/behavioral',
    name: 'behavioral',
    component: () => import('@/pages/behavioral/index.vue'),
    meta: {
      title: 'Поведенческие'
    },
    children: []
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../pages/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
