import {createApp, defineAsyncComponent} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import(/* webpackChunkName: "normalize" */ "modern-normalize/modern-normalize.css")
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.component('PageStackContent', defineAsyncComponent(() => import('./components/PageStackContent.vue')))
app.component('WikiLink', defineAsyncComponent(() => import('./components/WikiLink.vue')))
app.mount('#app')
