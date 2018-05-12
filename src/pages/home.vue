<template>
  <div class="home">
    {{title}}
    <!-- 列出最近的项目 -->
    <div class="newPro">
        <ul>
            <li v-for="(proItem,index) in proItems" v-if="!proItem.proDelete && index < 5 " :key="proItem.id">
                <div>{{proItem.proName}}</div>
                <div>{{proItem.proDesc}}</div>
                <div>{{proItem.proTag}}</div>
                <div>{{proItem.proROP}}</div>
            </li>
        </ul>
    </div>
    <!-- 天气模块 -->
    <div class="weather" > 
        {{weather_title}}
        <input type="text" v-model="msg" @keyup.enter="addNew" v-show="flag">
        <div class="weather_today">
            <div v-show="!flag" v-for="proItem1 in weather_today" :key="proItem1.id">{{proItem1}}</div>
        </div>
        <div class="weather_tomorrow">
            <div v-show="!flag" v-for="proItem2 in weather_tomorrow" :key="proItem2.id">{{proItem2}}</div>
      </div>
    </div>
  </div>
</template>
<script>
    import axios from "axios";
    import Store from "../store";
  
    export default {
        data () {
            return {
                title: "今天也要继续加油哦",
                weather_title: '看看天气怎么样~',
                msg: '',
                flag: true,
                weather_today: {},
                weather_tomorrow: {},
                proItems: Store.fetch2()
            }
        },
        methods: {
            addNew () {
                //天气模块 通过value搜索天气
                axios.get('http://api.help.bj.cn/apis/weather2d/?id=' + this.msg)
                .then((response) => {
                    console.log(response.data);
                    // 对value进行匹配 判断是否有value对应的城市
                    // 若为true 显示天气信息
                    // 若为false 则显示重新输入
                    if ( response.data.city ) {
                        this.weather_today = {
                        city: response.data.city,
                        temp: '气温：' + response.data.temp,
                        weather: '天气：' + response.data.weather,
                        wind : '风力：' + response.data.wind
                        };
                        this.weather_tomorrow = {
                            title: '明日天气',
                            temp: '气温：' + response.data.tomorrow.temp,
                            weather: '天气：' + response.data.tomorrow.weather,
                            wind : '风力：' + response.data.tomorrow.wind
                        };
                        this.weather_title = '';
                        this.flag = false;
                    }else {
                        this.weather_title = '好像输入错了呀，再试试吧';
                        this.msg = ''
                    }
                    
                })
                // .catch((response) => {
                
                // });
        
            }
        }
    }
  
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .home {
        background: lightblue;
        display: inline-block;
        position: relative;
        left: 20vw;
        width: 80vw;
        height: 86vh;
        text-align: center;
        font-size: 24px;
    }
    .newPro {
        height: 46vh;
    }
    .newPro li {
        list-style: none;
        float: left;
        
    }
    .newPro li div {
        display: inline-block;
        width: 15vw;
        padding: 2vh 0vw 2vh 3vw;
        font-size: 20px;
        text-align:justify;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        
    }
    .weather {
        background: khaki;
        position: relative;
        text-align: center;
        height: 35vh;
        font-size: 18px;
    }
    .weather_today {
        position: absolute;
        left: 0;
        line-height: 8.5vh;
        width: 40vw;
        height: 31vh;
      
    }
    .weather_tomorrow {
        position: absolute;
        right: 0;
        line-height: 8.5vh;
        width: 40vw;
        height: 31vh;
    }
</style>