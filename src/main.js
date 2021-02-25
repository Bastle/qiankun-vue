import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

let instance = null

function render(){
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app') // 挂载到自己的 html 基座会拿到挂载后的 html 将其插入进去
}

if(!window.__POWERED_BY_QIANKUN__){ // 默认独立运行
  render()
} else {
  // 动态添加 public path
  console.log('window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ : ', window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ );
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ 
  
}

// 子组件的协议完成

export async function bootstrap(props){

}

export async function mount(props){
  console.log('props----->',props)
  render(props)
}

export async function unmount(){
  instance.$destroy();
}