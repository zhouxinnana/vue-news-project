<template>
    <div class="content">
        <div class="pos-city"
             @click="cityShowFn">{{cityTitle.cityName}}</div>
        <city v-show="cityTitle.cityShow"
              :data="cityTitle"></city>
        <div ref="content" class="content-list">
            <div>
                <BannerView></BannerView>
                <div class="newsList">
                    <ul>
                        <li v-for="(item,index) in arrList"
                            @click="setDetail(item,$event)">
                            <h2>{{item.title}}</h2>
                            <p>{{item.desc}}</p>
                           
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <NewsDatial :item="item" ref="homeDatialEle"></NewsDatial>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import BannerView from './Banner.vue';
import city from './City.vue';
import NewsDatial from './NewsDatial.vue';
export default {

    data() {
        return {
            arrList: [],
            cityTitle: {
                cityName: '北京',
                cityShow: false
            },
            item: {}
        }
    },
    mounted() {
        // 获取数据
        this.fatchData();
        this.renderHomeList();
    },
    methods: {
        fatchData() {
            var that = this;
            this.$http.get(' http://route.showapi.com/109-34?showapi_appid=32533&showapi_sign=487ea68dbcbb44dab6923884c9b9f426').then(function (res) {
                that.arrList = res.data.showapi_res_body.channelList;
            }).catch(function (err) {
                console.error(err);
            })
        },
        renderHomeList() {
            var that = this;
            this.$http.get('http://route.showapi.com/170-47?showapi_appid=32533&showapi_sign=487ea68dbcbb44dab6923884c9b9f426&areaName=' + this.cityTitle.cityName + '').then(function (res) {
                that.arrList = res.data.showapi_res_body.pagebean.contentlist;
                that.$nextTick(function () {
                    that._inscroll();
                });
            }).catch(function (err) {

            });
        },
        cityShowFn() {
            this.cityTitle.cityShow = true;
        },
        _inscroll() {
            this.$nextTick(() => {
                this.titleScroll = new BScroll(this.$refs.content, {
                    click: true
                });
            })
        },
        setDetail(_item, event) {
            if (!event._constructed) {
                return;
            }
            var that = this;
            this.$http.get('http://route.showapi.com/883-1?showapi_appid=32533&showapi_sign=487ea68dbcbb44dab6923884c9b9f426&url=' + _item.link + '').then(function (res) {
                that.item = res.data.showapi_res_body;
            }).catch(function (err) {

            });
            that.item = _item;
            that.$refs.homeDatialEle.show();
        }
    },
    watch: {
        'cityTitle.cityName': {
            handler: function (val, oldVal) {
                that.cityName = val.cityName;
                this.renderHomeList();
            },
            deep: true
        }
    },
    components: {
        BannerView,
        NewsDatial,
        city
    }
}
</script>

<style lang="">
.content {
    position: relative;
}
.content-list{
    position: fixed;
    top:0;
    bottom: 46px;
    width: 100%;
}

.newsList h2 {
    font-weight: 400;
}

.pos-city {
    position: fixed;
    top: 9px;
    right: 16px;
    font-size: 16px;
    z-index: 9999;
}

.pos-city::before {
    content: '\FE40';
    display: block;
    position: absolute;
    top: 7px;
    right: -12px;
    font-size: 12px;
}
</style>