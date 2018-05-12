<template>
  <div id="app">
    <!-- logo -->
    <img src="./assets/logo.png" class="logo" @click="backhome">
    <!-- 标题 -->
    <div class="bg-top" v-text="title">
    </div>
    <!-- 左侧导航栏 -->
    <div class="bg-left">
      <ul>
        <li v-for="option in options"
            v-bind:key="option.id"
            :class="option.clicked ? 'bg-active' : 'bg-unactive'"
            @click="bgClicked(option,options)">
          <router-link v-bind:to="option.to">{{option.title}}</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: 'todolist',
      //router
      options: [
        {
          id: 1,
          to: "/newPro",
          title: "新建",
          clicked: false
        },
        {
          id: 2,
          to: "/nowPro",
          title: "正在进行",
          clicked: false
        },
        {
          id: 3,
          to: "/calendar",
          title: "日历",
          clicked: false
        },
        {
          id: 4,
          to: "/complete",
          title: "已完成",
          clicked: false
        },
        {
          id: 5,
          to: "/recover",
          title: "回收站",
          clicked: false
        }
      ]
    }
  },
  methods: {
    backhome() {
      this.$router.push({path:'/'});
      for (var i = 0; i < this.options.length; i++) {
        this.options[i].clicked = false;
      }
    },
    bgClicked(option, options) {
      for (var i = 0; i < options.length; i++) {
        options[i].clicked = false;
      }
      option.clicked = true;
    }
  }
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  #app{
    height: 100vh;
    width: 100vw;
  }
  .bg-top {
    width: 100vw;
    height: 14vh;
    background: skyblue;
    text-align: center;
    line-height: 14vh;
    color: white;
    font-size: 5vh;
  }
  .logo {
    position: absolute;
    left: 4.5vw;
    width: 10vw;
    height: 14vh;
    
  }
  .bg-left {
    position: absolute;
    border-top: 0.1vh solid black;
    display: inline-block;
    height: 85.9vh;
    width: 20vw;
    background: skyblue;
  }
  .bg-left li {
    border-bottom:1px solid black;
  }
  a {
    display: inline-block;
    width: 20vw;
    height: 10vh;
    text-align: center;
    line-height: 10vh;
    letter-spacing:1vw;
    text-decoration: none;
    color : black;
  }
  .bg-active {
    background: azure;
  }
  .bg-unactive {
    background: skyblue;
  }
</style>
