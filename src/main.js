import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import moment from 'moment'

// Vue.prototype.moment = moment

createApp(App).use(router).use(store).mount('#app')
