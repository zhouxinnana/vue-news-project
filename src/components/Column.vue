<template>
    <div class="content">
        <div class="swiper-container" >
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in arrList" :data-id="item.channelId" @click="choose">{{item.name}}</div>
            </div>
        </div> 
        <div class="newsList ">
            <ul> 
                <li v-for="(item,index) in contentList">
                    <h2>{{item.title}}</h2>
                    <p>{{item.desc}}</p>
                    <i>{{item.pubDate}}</i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>


export default{
    data(){
        return {
            arrList:[],
            dataid:'',
            dataname:'',
            contentList:[]
        }
    },
    mounted(){
        this.renderList();
        this.swiperFn();
    },
    methods:{
        swiperFn(){
            var swiper = new Swiper('.swiper-container', {
            //    slidesPerView:3,
            //     paginationClickable: true,
            //     spaceBetween: 5,
            //     freeMode: true
            });
        },
        renderList(){
            var that = this;
            this.$http.get('http://route.showapi.com/109-34?showapi_appid=32533&showapi_sign=487ea68dbcbb44dab6923884c9b9f426').then(function(res){
                that.arrList =res.data.showapi_res_body.channelList;
            }).catch(function(err){
                console.error(err);
            })
        },
        choose(ev){
            this.dataname = ev.target.innerHTML;
            this.dataid= ev.target.getAttribute("data-id");
            const that = this;
            this.$http.get(`http://route.showapi.com/109-35?showapi_appid=32533&showapi_sign=487ea68dbcbb44dab6923884c9b9f426&channelId=${this.dataid}&channelName=${this.dataname}`).then(function(res){
                that.contentList = res.data.showapi_res_body.pagebean.contentlist;
            }).catch(function(err){
                console.error(err);
            })
        }
    }
}
</script>


<style scoped>
    .mt{
        margin-top:40px; 
    }
    .swiper-container {
        width: 100%;
        height: 2.5rem;
        margin: 40px auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 14px;
        background: #fff;
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>