<template>
    <div id="clock" :style="disPlayStyle"
         style="animation-delay: 10s; animation-duration:4s; display: none">
        <p class="time">{{ time }}</p>
    </div>
</template>

<script>
    export default {
        name: "Clock",
        data() {
            return {
                time: '',
                date: '',
                isDisplayClock: false,
                disPlayStyle: {
                    display: 'none'
                }
            }
        },
        created() {
            // window.document.getElementsByTagName("body")[0].style.background = '#0f3854'
            // window.document.getElementsByTagName("body")[0].style.background = '#radial-gradient'
            // window.document.getElementsByTagName("body")[0].style.backgroundSize = '100%'
            // window.document.getElementsByTagName("body")[0].style.height = '100%'
            setInterval(this.updateTime, 1000)
            this.updateTime();
            this.isAddClass()
        },
        methods: {
            //动态添加添加class
            isAddClass() {
                setTimeout(() => {
                    this.disPlayStyle.animationDelay = '0'
                }, 10)
                this.disPlayStyle.display = 'block'
            },
            zeroPadding(num, digit) {
                let zero = '';
                for (let i = 0; i < digit; i++) {
                    zero += '0';
                }
                return (zero + num).slice(-digit);
            },
            updateTime() {
                let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
                let cd = new Date();
                this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
                // console.log(this.time)
                this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
                // console.log(this.date)
            }
        }
    }
</script>

<style scoped lang="scss">
    /*@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";*/

    @import "../../static/css/ShareTechMono/index.css";

    /*p {
        margin: 10px;
        padding: 10px;
    }*/

    #clock {
        width: 100%;
        height: 20%;
        background: linear-gradient(to left, rgba(0, 0, 0, .0001) 0, rgba(124, 124, 124, 0.4) 100%);
        justify-content: center;
        display: flex;
        font-family: 'Share Tech Mono', monospace;
        color: #ffffff;
        text-align: center;

        /*position: fixed;*/
        /*left: 50%;*/
        /*top: 50%;     transform: translate(-50%, -50%);*/
        text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);

        .time {
            letter-spacing: 0.05em;
            font-size: 40px;
            padding: 5px 0;
        }

        .date {
            letter-spacing: 0.1em;
            font-size: 24px;
        }

        .text {
            letter-spacing: 0.1em;
            font-size: 12px;
            padding: 20px 0 0;
        }

    }

    p {
        /*margin-top: 10px;*/
        /*margin-bottom: 10px;*/
    }
</style>
<style>
    p {
        margin-top: 0;
        margin-bottom: 0;
    }
</style>
