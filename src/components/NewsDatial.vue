<template>
    <transition name="move">
        <div class="new-detial"
             v-show="showFlag"
             ref="newDetial">
            <div class="nav">
                <ul>
                    <li class="l-btn"
                        onclick="window.history.go(-1)"></li>
                </ul>
            </div>
            <div class="content" ref="content">
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
    created() {
        console.log(this.item.html)
    },
    methods: {
        show() {
            this.showFlag = true;
            this.$nextTick(() => {
                if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.content, {
                        click: true
                    });
                    alert(1);
                } else {
                    this.scroll.refresh();
                }

            });
        },
        hide() {
            this.showFlag = false;
        }
    }
}
</script>
<style>
.new-detial {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 48px;
    z-index: 30;
    width: 100%;
    background: #fff;
}

.datial-title {
    width: 100%;
    height: 500px;
    background: #000;
}

.move-enter-active,
.move-leave-active {
    transition: all 0.2s linear
}

.move-enter,
.move-leave-active {
    transform: translate3d(100%, 0, 0)
}
</style>