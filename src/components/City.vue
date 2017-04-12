<template>
    <div class="city-list">
        <ul>
            <li v-for="(item,index) in cityList" :data-id="item.areaId" @click="setCityTitle">
                {{item.areaName}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        'data':{
            type: Object,
            default:function(){
                return {
                    cityName:'北京'
                }
            }
            
        }
    },
    data(){
        return {
            cityList:[]
        }
    },
    mounted(){
        this.getCity();
    },
    
    methods: {
        getCity() {
            var that = this;
            this.$http.get('http://route.showapi.com/170-48?showapi_appid=32533&showapi_sign=487ea68dbcbb44dab6923884c9b9f426').then(function (res) {
                that.cityList = res.data.showapi_res_body.cityList;
            }).catch(function(erro){
                console.log(erro)
            });
        },
        setCityTitle(ev){
            this.data.cityName = ev.target.innerHTML;
            this.data.cityShow = false;
        }
    }
}
</script>
<style lang="" scoped>
.city-list {
    top: 38px;
    width: 100%;
    position: relative;
    z-index: 3;
    height: 100%;
    overflow: hidden;
}

.city-list ul {
   font-size: 0;
   border-left: 1px solid rgba(204, 204, 204, 0.37);
   border-top: 1px solid rgba(204, 204, 204, 0.37);
   margin: 0 auto;
   min-height: 100vh;
   background: #f2f4f5;
}

.city-list li {
    padding: 10px 0;
    border-bottom: 1px solid rgba(204, 204, 204, 0.37);
    border-right: 1px solid rgba(204, 204, 204, 0.37);
    display: inline-block;
    width: 25%;
    font-size: 14px;text-align: center;
    box-sizing: border-box;
cursor: pointer;

}
.city-list li:hover{
    background: #ed4040;
    color: #fff
}
</style>
