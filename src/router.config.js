import Home from './components/Home.vue'
import Column from './components/Column.vue'
import Follow from './components/Follow.vue'
import UserInfo from './components/UserInfo.vue'
import UserLogin from './components/UserLogin.vue'
import UserReg from './components/UserReg.vue'
import Article from './components/Article.vue'

export default [{
    path: '/home',
    component: Home
},{
    path:'/article',
    component:Article,
},{
    path: '/column',
    component: Column
},{
    path: '/follow',
    component: Follow
},{
    path:'/user-info',
    component:UserInfo
},{
    path:'/user-login',
    component:UserLogin
},{
    path:'/user-reg',
    component:UserReg
},{
    path:'/',
    redirect:'/home'
},{
    path:'*',
    redirect:'/home'
}]