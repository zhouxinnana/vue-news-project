<template>
    <div ref="content">
        <div class="content">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <a class="swiper-slide"
                       v-for="(item,index) in titleList"
                       :data-id="item.channelId"
                       @click="choose">{{item.name}}</a>
                </div>
            </div>
    
        </div>
        <div class="newsList"
             ref="ulList">
            <div>
                <ul>
                    <li v-for="(item,index) in contentList"
                        @click="setDetail(item,$event)">
                        <h3>{{item.title}}</h3>
                        <p>{{item.desc}}</p>
                        <i>{{item.pubDate}}</i>
                    </li>
                </ul>
                <div class="more"
                     @click="pageCount">加载更多</div>
            </div>
        </div>
    
        <NewsDatial :item="item"
                    ref="NewsDatialEle"></NewsDatial>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import NewsDatial from './NewsDatial.vue'
export default {
    data() {
        return {
            titleList: [],
            contentList: [],
            dataid: '',
            dataname: '',
            page: 1,
            nomore: true,
            item: {},
            showFlag: false
        }
    },
    mounted() {
        this.renderList();
        this.choose();
    },
    updated() {
        this.swiperFn();
    },
    watch: {
        page(val) {
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
            if (ev) {
                that.dataname = ev.target.innerHTML || '';
                that.dataid = ev.target.getAttribute("data-id") || '';
                that.nomore = false;
                that.page = 1;
            }
            this.$http.get(
                `http://route.showapi.com/109-35?showapi_appid=32533&showapi_sign=487ea68dbcbb44dab6923884c9b9f426&channelId=${that.dataid}&channelName=${that.dataname}&page=${that.page}&needHtml=1`
            ).then(function (res) {
                that.nomore ? that.contentList = that.contentList.concat(res.data.showapi_res_body.pagebean.contentlist) : that.contentList = res.data.showapi_res_body.pagebean.contentlist;
                that.$nextTick(function () {
                    that._inscroll();
                });
            }).catch(function (err) {
                console.error(err);
            })
        },
        _inscroll() {
            this.$nextTick(() => {
                this.titleScroll = new BScroll(this.$refs.ulList, {
                    click: true
                });
            })
        },
        pageCount() {
            this.page++;
            this.nomore = true;
        },
        //设置详情页面的值
        setDetail(_item, event) {
            if (!event._constructed) {
                return;
            }
            this.item = _item;
            this.$refs.NewsDatialEle.show();
        }
    },
    components: {
        NewsDatial
    }
}
</script>


<style scoped>
.swiper-container {
    width: 100%;
    height: 0.5rem;
    margin: 0px auto;
    margin-top: 39px;
}

.swiper-wrapper {
    position: relative;
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

.newsList {
    position: fixed;
    top: 75px;
    bottom: 46px;
    width: 100%;
}


.newsList i {
    float: right;
}

.more {
    padding: .2rem;
    text-align: center;
}

.box {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 48px;
    z-index: 30;
    width: 100%;
    background: #fff;
}
</style>