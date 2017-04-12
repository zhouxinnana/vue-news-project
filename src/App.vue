<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <NavView></NavView>
    <transition name="slide-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <!--<FooterView></FooterView>-->
  </div>
</template>

<script>
import NavView from './components/Nav.vue';
import { mapGetters, matActions} from 'vuex';
export default {
  computed: mapGetters([
    'headerShow',
    'loading'
  ]),
  components: {
    NavView
  }
}
</script>

<style>
@import './assets/css/index.css';
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all .4s ease;
  transform: translate3d(6em, 0, 0);
}

.slide-down-enter,
.slide-down-leave-active {
  transform: translate3d(6em, 0, 0);
}
</style>