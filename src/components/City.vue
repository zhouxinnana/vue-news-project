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
            type: Object
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
                console.log(that.cityList);
            }).catch(function(erro){
                console.log(erro)
            });
        },
        setCityTitle(ev){
            this.data.title = ev.target.innerHTML;
            this.data.cityShow = false;
        }
    }
}
</script>
<style lang="" scoped>
.city-list {
    padding-top: 50px;
    width: 100%;
}

.city-list ul {
   font-size: 0;
   border-left: 1px solid rgba(204, 204, 204, 0.37);
   border-top: 1px solid rgba(204, 204, 204, 0.37);
   margin: 0 auto;
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
