<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <NavView v-show="headerShow"></NavView>
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script>
  import NavView from './components/Nav.vue'
  import HomeView from './components/Home.vue'
  import FooterView from './components/Footer.vue'
  import {mapGetters,matActions} from 'vuex'
  export default {
    computed:mapGetters([
      'headerShow',
      'loading'
    ]),
    watch:{
      $route(to,from){
        if(to.path == '/user-info'){
          this.$store.dispatch('hideHeader');
        }else{
          this.$store.dispatch('showHeader');
        }
      }
    },
    components: {
      NavView,
      FooterView
    }
  }
</script>

<style>
  @import './assets/css/index.css';
</style>