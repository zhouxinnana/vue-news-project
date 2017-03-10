<template>
    <div class="content">
        <BannerView></BannerView>
        <div class="newsList">
            <ul>
                <li v-for="(item,index) in arrList">
                    <router-link :to="'/article/' + item.id">
                        <h2>{{index}}.{{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </router-link>
                </li>
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
                this.$http.get('src/data/index.data').then(function (res) {
                    that.arrList = res.data;
                }).catch(function (err) {
                    console.error(err);
                })
            }
        }
    }

</script>