<template>
    <div>
        <div id="weather-v2-plugin-standard">
        </div>
        <!--<a-cascader
                :default-value="['0','1','101010100']"
                :field-names="{ label: 'zh', value: 'id', children: 'children' }"
                :options="weathreArea"
                placeholder="请下拉选择"
                @change="onChange"
        />-->

    </div>
</template>

<script>
    import {area} from "@/utils/weatherNew";

    export default {
        name: "MyWeather",
        data() {
            return {
                weathreArea: area
            }
        },
        methods: {
            onChange(value) {
                this.$http.get("https://apip.weatherdt.com/v2/plugin/data/web",
                    {
                        params: {
                            key: 'OQyLsL7MvC',
                            lang: 'zh',
                            location: value[2]
                        }
                    })
                    .then(res => {

                    }).catch(error => {
                    console.log(error)
                })
            }
        },
        created() {
            window.WIDGET = {
                CONFIG: {
                    "layout": 1,
                    "width": "245",
                    "height": "130",
                    "background": 5,
                    "dataColor": "4A4A4A",
                    "borderRadius": 5,
                    "modules": "10",
                    "key": "USFc5Pry4V"
                }
            }
            var c = document.createElement('link')
            c.rel = 'stylesheet'
            c.href = '../../../static/weatherdt.css'
            var s = document.createElement('script')
            s.src = 'https://apip.weatherdt.com/standard/static/js/weather-standard.js?v=2.0'
            var sn = document.getElementsByTagName('script')[0]
            sn.parentNode.insertBefore(c, sn)
            sn.parentNode.insertBefore(s, sn)
        }
    }
</script>
<style scoped>

    @import "../../../static/weatherdt.css";


</style>

<style>
    #weather-v2-plugin-simple {
        height: 100% !important;
    }
</style>
