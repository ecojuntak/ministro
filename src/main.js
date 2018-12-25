import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'


require ('@/admin-assets/vendors/bootstrap/dist/css/bootstrap.min.css')
require ('@/admin-assets/vendors/font-awesome/css/font-awesome.min.css')
require('@/admin-assets/vendors/font-awesome/css/font-awesome.min.css')
require('@/admin-assets/vendors/themify-icons/css/themify-icons.css')
require('@/admin-assets/vendors/flag-icon-css/css/flag-icon.min.css')
require('@/admin-assets/vendors/selectFX/css/cs-skin-elastic.css')
require('@/admin-assets/vendors/jqvmap/dist/jqvmap.min.css')
require('@/admin-assets/vendors/jqvmap/dist/jqvmap.min.css')
require('@/admin-assets/assets/css/style.css')

require ('@/admin-assets/vendors/jquery/dist/jquery.min.js')
// require ('@/admin-assets/vendors/popper.js/dist/umd/popper.min.js')
// require ('@/admin-assets/vendors/chart.js/dist/Chart.bundle.min.js')
require ('@/admin-assets/assets/js/main.js')
// require ('@/admin-assets/assets/js/dashboard.js')
// require ('@/admin-assets/assets/js/widgets.js')
require ('@/admin-assets/vendors/jqvmap/dist/jquery.vmap.min.js')
require ('@/admin-assets/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js')
require ('@/admin-assets/vendors/jqvmap/dist/maps/jquery.vmap.world.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

