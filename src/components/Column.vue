<template>
    <div class="content">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <a class="swiper-slide" v-for="(item,index) in titleList" :data-id="item.channelId" @click="choose">{{item.name}}</a>
            </div>
        </div>
        <div class="newsList ">
            <ul>
                <li v-for="(item,index) in contentList">
                    <router-link :to="{path:'/article',query:{detailhtml:item}}">
                        <h3>{{item.title}}</h3>
                        <p>{{item.desc}}</p>
                        <i>{{item.pubDate}}</i>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="more" @click="pageCount">加载更多</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                titleList: [],
                contentList: [],
                dataid: '',
                dataname: '',
                page:1,
                nomore:true
            }
        },
        mounted() {
            this.renderList();
            this.choose();
        },
        updated() {
            this.swiperFn();
        },
        watch:{
            page (val) {
                 this.choose();
            }
        },
        methods: {
            swiperFn() {
                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 4,
                    paginationClickable: true,
                    freeMode: true
                });
            },
            renderList() {
                var that = this;
                this.$http.get(
                    'http://route.showapi.com/109-34?showapi_appid=32533&showapi_sign=487ea68dbcbb44dab6923884c9b9f426'
                ).then(function (res) {
                    that.titleList = res.data.showapi_res_body.channelList;
                }).catch(function (err) {
                    console.error(err);
                })
            },
            choose(ev) {
                const that = this;
                if(ev){
                    that.dataname = ev.target.innerHTML || '';
                    that.dataid = ev.target.getAttribute("data-id") || '';
                    that.nomore = false;
                    that.page = 1;
                }
                this.$http.get(
                    `http://route.showapi.com/109-35?showapi_appid=32533&showapi_sign=487ea68dbcbb44dab6923884c9b9f426&channelId=${that.dataid}&channelName=${that.dataname}&page=${that.page}&needHtml=1`
                ).then(function (res) {
                    console.log(that.nomore );
                    that.nomore ? that.contentList = that.contentList.concat(res.data.showapi_res_body.pagebean.contentlist) : that.contentList = res.data.showapi_res_body.pagebean.contentlist
                    
                }).catch(function (err) {
                    console.error(err);
                })
            },
            pageCount(){
                this.page++;
                this.nomore = true;
            }
        }
    }
</script>


<style scoped>
    .swiper-container {
        width: 100%;
        height: 0.5rem;
        margin: 0px auto;
        margin-top: 40px;
    }

    .swiper-slide {
        text-align: center;
        font-size: 16px;
        background: #fff;
        /*width: 1.5rem;*/
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
        color: #505050;
    }

    .swiper-slide:active,
    .swiper-slide:hover {
        color: #f85959;
    }
    .newsList i {
        float: right;
    }

    .more{
        padding:.2rem;
        text-align:center;
    }
</style>