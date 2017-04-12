<template>
    <div class="banner">
        <ul class="clearfix">
            <li><img src="../assets/images/img_1.jpg" alt="" />
                <div class="text-box">
                    <h2>还可以降低首付款健身房11111</h2>
                    <p>刘德华11 / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_2.jpg" alt="" />
                <div class="text-box">
                    <h2>还可以降低首付款健身房2222</h2>
                    <p>刘德华22 / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_3.jpg" alt="" />
                <div class="text-box">
                    <h2>还可以降低首付款健身房333</h2>
                    <p>刘德华33 / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_1.jpg" alt="" />
                <div class="text-box">
                    <h2>还可以降低首付款健身房11111</h2>
                    <p>刘德华11 / 文</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.fnSlider();
        },
        methods: {
            fnSlider() {
                $(function () {
                    var mySwipe = new Swipe(document.querySelector('.banner'), {
                        auto: 2000,
                        continuous: true,
                        stopPropation: true,
                        callback: function (index, element) {
                         
                        }
                    });
                });
            }
        }
    }
</script>