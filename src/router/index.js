import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/Error'
import Count from '@/components/count'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component:HelloWorld
      
    
    // },
    {
      path:'/hi',
      name:'Hi',
      component:Hi,
      children:[
          {path:'/',component:Hi},
          {path:'/hi1',name:'hi1',component:Hi1},
          {path:'/h1/hi2',component:Hi2},
      ],
      alias:'/jspang'
    },{
      path: '/',
      components:{
        default:HelloWorld,
        left:Hi1,
        right:Hi2
      }
    },{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
      }
    },{
      path:'/goback',
      redirect:'/'
    },{
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },{
      path:'*',
      component:Error
   },{
    path:'/count',
    component:Count
 }
  ]
})
