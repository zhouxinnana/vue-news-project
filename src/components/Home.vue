<template>
    <div class="content">
        <BannerView></BannerView>
        <div class="newsList">
            <ul>
                <!--<li v-for="(item,index) in arrList">
                    <router-link :to="'/article/' + item.id">
                        <h2>{{index}}.{{item.channelId}}</h2>
                        <p>{{item.name}}</p>
                    </router-link>
                </li>-->
            </ul>
        </div>
    </div>
</template>

<script>
    import BannerView from './Banner.vue'
    export default {
        components: {
            BannerView,
        },
        data() {
            return {
                arrList: ''
            }
        },
        mounted() {
            // 获取数据
            this.fatchData();
        },
        methods: {
            fatchData() {
                var that = this;
                this.$http.get(' http://route.showapi.com/109-34?showapi_appid=32533&showapi_sign=487ea68dbcbb44dab6923884c9b9f426').then(function (res) {
                    that.arrList = res.data.showapi_res_body.channelList;
                }).catch(function (err) {
                    console.error(err);
                })
            }
        }
    }

</script>