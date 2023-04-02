import { createApp } from 'vue'
import './style.css'
import router from './router'
import VueApp from './App.vue'
import * as Popper from "@popperjs/core"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
const app = createApp(VueApp)
app.use(router)
app.mount('#app')
