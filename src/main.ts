import './style.css'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import hljsVuePlugin from '@highlightjs/vue-plugin'
hljs.registerLanguage('javascript', javascript)

import PrimeVue from 'primevue/config'

import router from './router'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(hljsVuePlugin).use(PrimeVue).use(router)
app.mount('#app')
