import 'highlight.js/styles/stackoverflow-light.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
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
app.use(hljsVuePlugin)
app.use(PrimeVue)
app.use(router)
app.mount('#app')
