import Vue from 'vue'
import App from './App'
import Global from './api/global.js'
import api from "./api/http"
Vue.prototype.$api = api
// import Vue from 'vue'

Vue.prototype.Global = Global;

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
