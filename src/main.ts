import '@/assets/tailwind.css'
import './style.css'
import 'primevue/resources/primevue.min.css' // Основные стили

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import hljsVuePlugin from '@highlightjs/vue-plugin'
hljs.registerLanguage('javascript', javascript)

import PrimeVue from 'primevue/config'
// import 'primevue/resources/themes/saga-blue/theme.css' // Выберите одну из тем
// import 'primeicons/primeicons.css' // Иконки

// Импортируем базовые стили для всех компонентов (не обязательно, но полезно)

import router from './router'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(hljsVuePlugin).use(PrimeVue).use(router)
app.mount('#app')
