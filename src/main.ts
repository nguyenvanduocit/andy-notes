import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import(/* webpackChunkName: "normalize" */ "modern-normalize/modern-normalize.css")
const pinia = createPinia()

createApp(App)
  .use(pinia)
  .mount('#app')
