<template>
  <div class="newPro_one" v-if="flag">
        <input class="proName" placeholder="起个名字吧~" v-model="newProName">
        <textarea class="desc" placeholder="加点备注吧~" v-model="newProDesc" ></textarea>
        <input class="tag" placeholder="贴个标签吧~" v-model="newProTag" >
        <button class="btn" @click="addNewPro">ojk</button>
  </div>
  <div class="newPro_tow" v-else-if="!flag">
        <div class="title">创建完成啦！ 还要继续嘛~</div>
        <div class="btn_YN">
            <button @click="isYes">yes</button>
            <button @click="isNo">no</button>
        </div>
  </div>
</template>
<script>
    import Store from "../store";

    export default {
        data () {
            return {
                proItems: Store.fetch(),
                newProName: '',
                newProDesc: '',
                newProTag: '',
                flag: true
                
            }
        },
        //监听localStorage
        watch : {
            proItems: {
                handler (proItems) {
                    Store.save(proItems)
                },
                deep: true
            }
        },
        methods : {
            //提交待办项目
            addNewPro() {
                if ( this.newProName && this.newProDesc && this.newProTag ) {
                    this.proItems.push({
                    proName: this.newProName,
                    proDesc: this.newProDesc,
                    proTag: this.newProTag,
                    proFinished: false,
                    proROP: '待办',
                    proDelete: false,
                    spreadFlag: false
                });
                this.newProName = '';
                this.newProDesc = '';
                this.newProTag = '';
                this.flag = !this.flag;
                console.log(this.proItems)
                }else {
                    alert("要填全哦~~")
                }
            },
            //点击Yes后执行
            isYes() {
                this.flag = true;
            },
            //点击No后执行
            isNo () {
                this.$router.push({path:'/'});
                this.flag = true;
            }
            
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .newPro_one, .newPro_tow {
        display: inline-block;
        position: relative;
        left: 20vw;
        width: 80vw;
        height: 86vh;
        background: azure;
    }
    .proName {
        width: 60vw;
        height: 5vh;
        padding: 0 10px;
        margin: 5vh 5vh 2.5vh;
    }
    .desc {
        width:60vw; 
        height: 30vh; 
        resize: none;
        padding: 10px;
        margin: 2.5vh 5vh;
    }
    .tag {
        width: 60vw;
        height: 5vh;
        padding: 0 10px;
        margin: 2.5vh 5vh 2.5vh;
    }
    .btn{
        background: #5fbddf;
        background-image: linear-gradient(to bottom, #5fbddf, #067ca7);
        border-radius: 10px;
        text-shadow: 0px 0px 0px #5b6178;
        box-shadow: 0px 1px 0px 0px #f0f7fa;
        font-family: 微软雅黑;
        color: #ffffff;
        font-size: 7px;
        padding: 10px 20px 10px 20px;
        border: solid #1d98ea 1px;
        text-decoration: none;        
    }
    .btn:hover {
        background: #7ba2b1;
        background-image: linear-gradient(to bottom, #7ba2b1, #2d97bd);
        color: #ffffff;
        text-decoration: none;
    }
    .title{
        font-size: 30px;
        text-align: center;
        margin-top: 15vh;
    }
    .btn_YN {
        text-align: center;
    }
    .btn_YN button{
        margin: 10vh 2vw;
        background: #5fbddf;
        background-image: linear-gradient(to bottom, #5fbddf, #067ca7);
        border-radius: 10px;
        text-shadow: 0px 0px 0px #5b6178;
        box-shadow: 0px 1px 0px 0px #f0f7fa;
        font-family: 微软雅黑;
        color: #ffffff;
        font-size: 7px;
        padding: 10px 20px 10px 20px;
        border: solid #1d98ea 1px;
        text-decoration: none;
    }
</style>