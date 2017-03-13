<template>
    <div class="content">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div>
                <div class="swiper-slide">Slide 10</div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <div class="newsList ">
            <ul>
                <li>
                    <h2>栏目</h2>
                    <p>asdsad</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            this.renderFn();
        },
        methods: {
            renderFn() {
                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 4,
                    paginationClickable: true,
                    spaceBetween: 5,
                    freeMode: true
                });
                alert(123);
            }
        }
    }
</script>


<style scoped>
    .mt {
        margin-top: 40px;
    }

    .swiper-container {
        width: 100%;
        height:0.5rem;
        margin: 40px auto;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
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