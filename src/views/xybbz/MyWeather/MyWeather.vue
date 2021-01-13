<template>
    <div>
        <div id="weather-v2-plugin-standard">
        </div>
        <!--<a-cascader
                :field-names="{ label: 'zh', value: 'id', children: 'children' }"
                :options="weathreArea"
                placeholder="Please select"
                @change="onChange"
        />-->
    </div>
</template>

<script>
    import {area} from "@/utils/weatherArea";

    export default {
        name: "MyWeather",
        data() {
            return {
                weathreArea: area
            }
        },
        methods: {
            onChange(value) {
                console.log(value);
            },
        },
        mounted() {
            window.WIDGET = {
                CONFIG: {
                    "layout": 1,
                    "width": "450",
                    "height": "150",
                    "background": 5,
                    "dataColor": "4A4A4A",
                    "borderRadius": "8",
                    "key": "OQyLsL7MvC"
                }
            }
            var c = document.createElement('link')
            c.rel = 'stylesheet'
            c.href = 'https://apip.weatherdt.com/standard/static/css/weather-standard.css?v=2.0'
            var s = document.createElement('script')
            s.src = 'https://apip.weatherdt.com/standard/static/js/weather-standard.js?v=2.0'
            var sn = document.getElementsByTagName('script')[0]
            sn.parentNode.insertBefore(c, sn)
            sn.parentNode.insertBefore(s, sn)

            /*(function (d) {
                var c = d.createElement('link')
                c.rel = 'stylesheet'
                c.href = 'https://apip.weatherdt.com/standard/static/css/weather-standard.css?v=2.0'
                var s = d.createElement('script')
                s.src = 'https://apip.weatherdt.com/standard/static/js/weather-standard.js?v=2.0'
                var sn = d.getElementsByTagName('script')[0]
                sn.parentNode.insertBefore(c, sn)
                sn.parentNode.insertBefore(s, sn)
            })(document)*/
        }
    }
</script>
<style scoped>

    @import "https://apip.weatherdt.com/simple/static/css/weather-simple.css?v=2.0";

    #weather-v2-plugin-simple {
        z-index: 9999;
    }
</style>
