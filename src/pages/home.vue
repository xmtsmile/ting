<template>
  <div class="home">
    <mt-swipe ref="swipe" class="swipe" :auto="4000">
      <mt-swipe-item v-for="img in images" :key="img.id">
        <img class="imgSize" :src="img.url"/>
      </mt-swipe-item>
    </mt-swipe>
    <div class="items">
      <div class="item">
        <img class="itemImg" src="../../static/home2.jpg"/>
          <h4 style="display:inline-block;margin-left:10px;">公路上的孩子</h4>
          <p>傻瓜为什么不会疲惫，傻瓜不会疲惫</p>
      </div>
      <div class="item">
        <!--<img class="itemImg" src="../../static/home2.jpg"/>-->
          <h4 style="margin-left:10px;">展翅飞翔的雄鹰</h4>
          <p style="width:40%;display: inline-block">雄鹰展翅飞翔，蓝天是它的舞台</p>
          <img class="itemImgRight" src="../../static/home3.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  export default {
    name: 'home',
    data(){
      return {
        activeIndex: '',
        images:[
            {url:'../../static/1.png'},
            {url:'../../static/2.png'},
            {url:'../../static/3.png'},
            {url:'../../static/4.png'},
            {url:'../../static/5.png'}
        ]
      }
    },
    watch: {
//      activeIndex: function (val, oldVal) {
//        console.log('newIndex: %s, oldIndex: %s', val, oldVal)
//        // TODO
//      }
    },
    methods:{
//      beforeUpdate () {
//        this.activeIndex = this.$refs.swipe.index
//      },
    }
  }
</script>
<style lang="scss" scope>
  .mint-swipe{
    height:180px;
  }
  .imgSize{
    width:100%;
    height:180px;
  }
  .items{
    width:100%;
    margin-top:2px;
    .item{
      background-color: #ededed;
      height:150px;
      width:100%;
      padding:5px 5px;
      margin-bottom:5px;
      .itemImg{
        width:60%;
        height:150px;
        float:left;
        border-radius:5px;
      }
      .itemImgRight{
        float:right;
        width:60%;
        height:150px;
        margin-top:-65px;
        border-radius:10px;
      }
    }
  }
</style>



