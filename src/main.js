import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet'
import { Icon } from 'leaflet'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'leaflet/dist/leaflet.css'
import App from './App.vue'

Vue.config.productionTip = false
// https://bootstrap-vue.org/docs#using-module-bundlers
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
// https://leafletjs.com/reference.html#popup
Vue.component('l-popup', LPopup)
// https://leafletjs.com/reference.html#tooltip
Vue.component('l-tooltip', LTooltip)

// https://vue2-leaflet.netlify.app/quickstart/#marker-icons-are-missing
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

new Vue({
  render: h => h(App),
}).$mount('#app')
