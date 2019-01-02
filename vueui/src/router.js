import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"

//引入自定义组件
import Index from "./components/tabber/Index.vue"
import Find from "./components/tabber/Find.vue"
import Cart from "./components/tabber/Cart.vue"
import Myself from "./components/tabber/Myself"
import Around from "./components/travel/Around"
import Hotaround from "./components/travel/Hotaround"
import Cheaparound from "./components/travel/Cheaparound"
import Freearound from "./components/travel/Freearound"
import Msaround from "./components/travel/Msaround"
import Hraround from "./components/travel/Hraround"
import Goods from "./components/good/GoodsInfo"


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/Index"},
    {path:'/Index',component:Index},
    {path:'/Find',component:Find},
    {path:'/Cart',component:Cart},
    {path:'/Myself',component:Myself},
    {path:'/Around',component:Around},
    {path:'/Hotaround',component:Hotaround},
    {path:'/Cheaparound',component:Cheaparound},
    {path:'/Freearound',component:Freearound},
    {path:'/Msaround',component:Msaround},
    {path:'/Hraround',component:Hraround},
    {path:'/Goods/:id',component:Goods}
  ]
})
