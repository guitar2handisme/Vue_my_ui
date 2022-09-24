1:启用parcel构建工具，完成vue的单文件组件功能（即可以吧html js css写到一个文件xxx.vue里）
  安装parcel构建工具
    1: npm i -D parcel-bundler (-D表示只给开发中使用，没有-D表示用户要使用的)
    2: 创建文件 src -> app.js (app.js为入口文件)
    3: 创建文件 src -> WpButton.vue
    4: app.js 就是我们的入口文件了,在该文件中，做如下操作
       import Vue from 'vue'
       import WpButton from './WpButton'
       Vue.component('wp-button', WpButton)
    5: 在控制台输入 ./node_modules/.bin/parcel index.html   运行 parcel
    6: 会报错 
      解决报错
      在package.json 最后加上
      "alias": {
        "vue" : "./node_modules/vue/dist/vue.common.js"
      }
    7：在控制台输入 ./node_modules/.bin/parcel index.html --no-cache 
