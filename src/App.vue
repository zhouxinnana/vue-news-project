
<style>
  @import './assets/css/index.css';
</style>
<template>
  <div id="app">
    <NavView></NavView>
    asasd
    <BannerView></BannerView>
    <HomeView></HomeView>
    <FooterView></FooterView>
  </div>
</template>

<script>
  import NavView from './components/Nav.vue'
  import HomeView from './components/Home.vue'
  import FooterView from './components/Footer.vue'
  import BannerView from './components/Banner.vue'
  export default {
    components:{
      NavView,
      BannerView,
      HomeView,
      FooterView
    }
  }
</script>
