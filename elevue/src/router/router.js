import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import login from '@/page/login/login'
import forget from '@/page/forget/forget'
import search from '@/page/search/search'
import searchAddress from '@/page/confirmOrder/children/children/children/searchAddress'
import shop from '@/page/shop/shop'
import msite from '@/page/msite/msite'
import allshop from '@/page/shop/Allshop'
import foodDetail from '@/page/shop/children/foodDetail'
import shopDetail from '@/page/shop/children/shopDetail'
import shopSafe from '@/page/shop/children/children/shopSafe'

Vue.use(Router)
export default new Router({
  routes: [
    {path:"/",redirect:"shop"},
    {path:"/home",component:home},
    {path:"/login",component:login},
    {path:"/forget",component:forget},
    {path:"/search",component:search},
    {path:"/searchAddress",component:searchAddress},
    {path:"/msite",component:msite},
    {path:"/shop",component:shop},
    {path:"/allshop",component:allshop},
    {path:"/foodDetail",component:foodDetail},
    {path:"/shopSafe",component:shopSafe},
    {path:"/shopDetail",component:shopDetail},
  ]
})
