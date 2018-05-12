import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from '@/pages/home'
import newPro from '@/pages/newPro'
import nowPro from '@/pages/nowPro'
import calendar from '@/pages/calendar'
import complete from '@/pages/complete'
import recover from '@/pages/recover'



export default new VueRouter({
    //路由匹配
    routes : [{
        path : "/",
        component : home
      },{
        path : "/newPro",
        component : newPro
      },{
        path : "/nowPro",
        component : nowPro
      },{
        path : "/calendar",
        component : calendar
      },{
        path : "/complete",
        component : complete
      },{
        path : "/recover",
        component : recover
      }],
      mode : "hash"

})