<template>
    <div>
        <div class="nav">
            <ul>
                <li class="l-btn" onclick="window.history.go(-1)"></li>
            </ul>
        </div>
        <div class="content">
            <div class="header clear">
                <p>{{articleData.article}}</p>
            </div>
            <div class="cont">
                <h2>{{articleData.title}}</h2>
                <div class="time">
                    <p><span><img src="../assets/img/zan.png" alt=""/></span></p>
                </div>
                <div class="detailcontent">
                    <div v-html="articleData.html"></div>
                </div>
            </div>
        </div>
    </div>
</template> 
<script>
    export default {
        data() {
            return {
                articleData: {},
                detailcontent:{

                }
            }
        },
        created(){
            console.log(this.$route.query.detailhtml.html);
            this.articleData = this.$route.query.detailhtml;
        }
    }
</script>
<style>
  
    /*html,
    body {
        overflow-x: hidden;
    }*/ 

   .content {
        max-width: 6.4rem;
        margin: 0 auto;
        margin-top: 0.6rem;
        background: #f2f4f5;
        padding-bottom: 0.85rem;
    }

    .content .header {
        padding: 0.39rem 0.28rem 0.15rem 0.28rem;
        height: auto;
        background: none
    }

    .header h2 {
        float: left;
        margin-right: 0.18rem;
    }

    .header p {
        float: left;
        margin-top: 0.18rem;
        font-size: 0.3rem;
    }

    .content .cont {
        padding: 0 0.38rem;
        color: #494d4d;
    }

    .cont h3 {
        font-size: 0.4rem;
        line-height: 0.6rem;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid #494d4d;
    }

    .cont .time {
        height: 0.24rem;
        line-height: 0.24rem;
        margin: 0.26rem 0;
    }

    .time p {
        float: left;
        position: relative;
    }

    .time span {
        width: 0.33rem;
        height: 0.32rem;
        position: absolute;
        top: -0.02rem;
        right: -0.35rem;
    }

    .time span img {
        width: 100%;
        height: 100%;
    }

    .detailcontent p {
        word-wrap: break-word;
        font-size: 17px;
        line-height: 28px;
        color: #333;
        padding: .2rem 0;
    }
    .detailcontent img{
        width: 100%;
    }
</style>