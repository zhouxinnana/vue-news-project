<template>
  <div class="nav">
    <ul>
      <router-link tag="li"
                   to="/home"
                   active-class="active">
        <a href="javascript:;">首页</a>
      </router-link>
      <router-link tag="li"
                   to="/column"
                   active-class="active">
        <a href="javascript:;">关注</a>
      </router-link>
      <router-link tag="li"
                   to="/follow"
                   active-class="active">
        <a href="javascript:;">栏目</a>
      </router-link>
      <a href="javascript:;"
         class="city"
         @click="cityShowFn">{{cityTitle.cityName}}</a>
      <City v-show="cityTitle.cityShow"
            :data="cityTitle"></City>
    </ul>
  </div>
</template>
<script>
import City from './City.vue'
export default {
  data() {
    return {
      cityTitle: {
        cityName: '河北',
        cityId: '',
        cityShow: false
      },
      bb: {
        aa: ''
      }
    }
  },
  watch: {
    'cityTitle': {
      handler: (val, oldVal) => {
        var cityStatus = {};
        cityStatus.cityName = val.cityName;
        cityStatus.cityId = val.cityId;
        this.$emit('cityStatus', cityStatus);
      },
      deep: true
    }
  },
  methods: {
    cityShowFn() {
      this.cityTitle.cityShow = true;
    }
  },
  components: {
    City: City
  }
}
</script>



<style lang="">
.city {
  position: absolute;
  top: 7px;
  right: 10px;
  font-size: 16px;
}

.city::before {
  content: '\FE40';
  display: block;
  position: absolute;
  top: 7px;
  right: -12px;
  font-size: 12px;
}
</style>
