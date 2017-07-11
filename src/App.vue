<template>
  <div id="app">
    <mt-header title="片刻">
      <router-link to="/" slot="left" v-if="hasBack">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button class="mintui mintui-search" slot="right" @click.native="search">
      </mt-button>
    </mt-header>
    <router-view class="router-content" @tabChange="tabChange"></router-view>
    <mt-tabbar v-model="path" fixed>
      <mt-tab-item id="home">
        <i slot="icon" class="fa fa-home"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="life">
        <i slot="icon" class="fa fa-shopping-bag"></i>
        电影
      </mt-tab-item>

      <mt-palette-button content="+">
        <div class="my-icon-button"></div>
      </mt-palette-button>

      <mt-tab-item id="community">
        <i slot="icon" class="fa fa-window-restore"></i>
        图书
      </mt-tab-item>
      <mt-tab-item id="mine">
        <i slot="icon" class="fa fa-user"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Actionsheet } from 'mint-ui';
export default {
  name: 'app',
  components:{Actionsheet},
  data () {
    return {
      hasBack:'',
      path:'home'
    }
  },
  created(){
    if(location.pathname == '/'){
      this.path = 'home';
    }
    if(location.pathname == '/life'){
      this.path = 'life';
    }
    if(location.pathname == '/community'){
      this.path = 'community';
    }
    if(location.pathname == '/mine'){
      this.path = 'mine';
    }
  },
  watch:{ //监听data中path值的变化
    path:function(){
      this.$router.push({name: this.path});
    }
  },
  methods: {
    search () {
      this.$router.push({ path: 'searchBefore'})
    },
    tabChange:function(path){
      this.path = path;
    }
  }
}
</script>

<style lang="scss" scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
.mint-main-button{
  background-color: #3c3c3c;
  color:#fff;
}
.mint-header{
  background-color: #3c3c3c;
}
.mint-tabbar > .mint-tab-item.is-selected{
  color: #3c3c3c;
}
</style>
