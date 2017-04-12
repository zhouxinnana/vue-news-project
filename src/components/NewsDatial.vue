<template>
    <transition name="move">
        <div class="new-detial"
             v-show="showFlag"
             ref="newDetial">
            <div class="nav">
                <ul>
                    <li class="l-btn"
                        nclick="window.history.go(-1)" @click="hide">
                        </li>
                </ul>
            </div>
            <div class="detail-content"
                 ref="detailContent">
                <div>
                    <div class="header clear">
                        <p>{{item.article}}</p>
                    </div>
                    <div class="cont">
                        <h2>{{item.title}}</h2>
                        <div class="time">
                            <p><span><img src="../assets/img/zan.png" alt=""/></span></p>
                        </div>
                        <div class="detailcontent">
                            <div v-html="item.html"></div>
                            <!--<div style="line-height:50px;">{{item.html}}</div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </transition>
</template>
 
<script>
import BScroll from 'better-scroll';

export default {
    data() {
        return {
            showFlag: false
        }
    },
    props: {
        item: {
            type: Object
        }
    },
    methods: {
        show() {
            this.showFlag = true;
            this.$nextTick(function () {
                // if (!this.contentScroll) {
                    /*this.contentScroll = */new BScroll(this.$refs.detailContent, {
                        click: true
                    });
                // } else {
                //     this.contentScroll.refresh();
                // }
            })
        },
        hide() {
            this.showFlag = false;
        }
    }
}
</script>
<style scoped>
.new-detial {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 10;
}

.detail-content {
    width: 6.4rem;
    margin: 0 auto;
    /*margin-top: 0.6rem;*/
    background: #f2f4f5;
    /*padding-bottom: 0.85rem;*/

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    background: #fff;
}

.detail-content .header {
    padding: 0.39rem 0.28rem 0.15rem 0.28rem;
    height: auto;
    background: none
}

.detail-content .header h2 {
    float: left;
    margin-right: 0.18rem;
}

.detail-content .header p {
    float: left;
    margin-top: 0.18rem;
    font-size: 0.3rem;
}

.detail-content .cont {
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

.detailcontent img {
    width: 100%;
}

.move-enter-active,
.move-leave-active {
    transition: all 0.2s linear
}

.move-enter,
.move-leave-active {
    transform: translate3d(100%, 0, 0)
}

.l-btn {
    background: url('../assets/img/history1.png')no-repeat;
    position: absolute;
    left: .5rem;
    top: .1rem;
    padding: 0.1rem;
}
</style>