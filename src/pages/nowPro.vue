<template>
    <div class="nowPro">
        <div class="nowPro_title" v-text="title" ></div>
        <ul>
            <li v-for="proItem in proItems" v-if="!proItem.proFinished && !proItem.proDelete" :key="proItem.id" @click="spreadDesc(proItem,$event)">
                <div class="proName">{{proItem.proName}}</div>
                <div class="proTag">{{proItem.proTag}}</div>
                <button @click.stop="deletePro(proItem)">删除</button>
                <button @click.stop="completePro(proItem)">完成</button>
                <div class="overlay" v-if="proItem.spreadFlag">
                    <div class="descDiv"
                    >
                        <div>Name: {{proItem.proName}}</div>
                        <div>Tag: {{proItem.proTag}}</div>
                        <div>Desc: {{proItem.proDesc}}</div>
                    </div>
                </div>
            </li>
        </ul>
        
    </div>
</template>
<script>
    import Store from '../store'
    export default {
        
        data () {
            return {
                title: '哇，还有这么多未完成呐，要加油咯~',
                proItems: Store.fetch()
                
            }
        },
        watch : {
            proItems: {
                handler (proItems) {
                    Store.save(proItems)
                },
                deep: true
            }
        },
        methods: {
            deletePro (proItem) {
                var r = confirm("删除后将移到回收站哦");
                if (r) {
                    proItem.proDelete = true;
                }
            },
            completePro (proItem) {
                var r = confirm("点击完成，项目将会移到已完成哦");
                if (r) {
                    proItem.proFinished = true;
                    proItem.proROP = "已完成"
                }
            },
            spreadDesc (proItem,e) {
                if (proItem.spreadFlag) {
                    e.currentTarget.style = "background : pink"
                }else{
                    e.currentTarget.style = "background:khaki"
                }
                proItem.spreadFlag = !proItem.spreadFlag;

                
            }
        }
        
    }
</script>
<style scoped>
    .nowPro {
        display: inline-block;
        position: relative;
        left: 20vw;
        width: 80vw;
        height: 86vh;
        background: azure;
    }
    .nowPro_title {
        height: 3vh;
        text-indent: 1em;
        line-height: 5.5vh;
    }
    .nowPro ul {
        margin: 2vh 4vw;
        width: 72vw;
        
    }
    .nowPro li {
        margin-bottom: 1px;
        background:pink;
        list-style: none;
    }
    
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
    }
    .descDiv {
        position: relative;
        display: inline-block;
        top: 8vh;
        left: 6vw;
        background: cornsilk;
        width: 50vw;
        height: 50vh;
        border: 1px solid black;
    }
    .proName {
        display: inline-block;        
        padding: 1vh 1vw 1vh 2vw;
        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 10vw;
    }
    .proTag {
        display: inline-block;        
        padding: 1vh 1vw 1vh 2vw;
        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 20vw;
    }
    .nowPro li button {
        float: right;
        background: #7892c2;
        background-image: linear-gradient(to bottom, #7892c2, #476e9e);
        border-radius: 5px;
        text-shadow: 0px 1px 0px #283966;
        box-shadow: inset 0px -3px 7px 0px #9fb4f2;
        font-family: Arial;
        color: #ffffff;
        font-size: 14px;
        margin-top: 0.6vh;
        padding: 0.9vh 1.5vw;
        border: solid #4e6096 1px;
        text-decoration: none;
    }
    
    .nowPro li button:hover {
        color: #ffffff;
        background: #476e9e;
        text-decoration: none;
    }
    p {
        padding: 0vh 2vw 0.5vh 2vw;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>