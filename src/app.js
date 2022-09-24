
import Vue from 'vue'

// 注册全局组件
import WpButton from './WpButton'
import WpIcon from './WpIcon'
import WpGroupButton from './WpGroupButton'

Vue.component('wp-button', WpButton)
Vue.component('wp-icon', WpIcon)
Vue.component('wp-group-button', WpGroupButton)

new Vue({
  el: '#app',
  data: {
    message: 'HI',
    loading_1: false,
    loading_2: false,
    loading_3: false,
    loading_4: false,
  },
})