import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//5: 设置请求的根路径 


//导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//0.1:引入Vuex
import Vuex from "vuex"
//0.2:注册Vuex组件
Vue.use(Vuex)
//0.3:创建Vuex实例对象
var store=new Vuex.Store({
   state:{
     cartCount:0  //购物车中商品数量
   },
   mutations:{   //修改共享数据方法
     increment(state,count){state.cartCount+=count},
     substract(state){state.cartCount--},
     clear(state){state.cartCount=0}
   },
   getters:{   //获取共享数据方法
     optCartCount:function(state){
       return state.cartCount;
     }
   }
})
//0.4:将Vuex对象注册Vue对象---见最后



//1:引入mint-ui Header Button组件
import {Header,Swipe,SwipeItem,Button} from "mint-ui"
//2.注册Header组件
Vue.component(Header.name,Header);
//3:注册Swipe/SwipeItem/Button组件
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);

//3.1:引入axios库(VueResource)
import axios from "axios"
//3.2:跨域保存session值
axios.defaults.withCredentials=true
//3.3:注册组件
Vue.prototype.axios=axios


//4:引入vue-resource 库
import VueResource from "vue-resource";
//5:注册vue-resource 库
Vue.use(VueResource);
//6:配置vue-resource常见属性
//6.1:设置请求服务器根目录
Vue.http.options.root = "http://127.0.0.1:3333/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//将提交数据进行转码操作 
Vue.http.options.emulateJSON = true;






new Vue({
  router,
  render: h => h(App),  //渲染     h->创建元素
  store   //0.4：将Vuex对象注册到Vue实例
}).$mount('#app')
