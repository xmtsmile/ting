<template>
  <div class="mine">
    <div class="top">
      <img class="leftImg" src="../assets/avater.jpg"/>
      <div class="nize">萤火微暖</div>
      <div class="clear"></div>
    </div>
    <div class="center">
      <div class="item" @click="message">
        <i slot="icon" class="fa fa-envelope-o iconPosition"></i>
        我的消息
      </div>
      <div class="item" @click="read">
        <i slot="icon" class="fa fa-hand-spock-o iconPosition"></i>
        订阅
      </div>
      <div class="item" @click="">
        <i slot="icon" class="fa fa-thumbs-o-up iconPosition"></i>
        点赞
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mine',
    data(){
      return {

      }
    },
    methods:{
      message () {
          this.$router.push({name:'community'})
      }
    }
  }
</script>
<style lang="scss" scope>
  .top{
    background-color: #eeeeee;
    margin-bottom:5px;

    .leftImg{
      width:80px;
      height:80px;
      border-radius: 50%;
      margin:3% 3%;
      float:left;
    }
    .nize{
      display: inline-block;
      margin:10% 2%;
    }
    .clear{
      clear: both;
    }
  }
  .center{
    .item{
      background-color: #fff;
      width:100%;
      height:30px;
      margin-bottom:5px;
      padding:8px 8px;

      .iconPosition{
        margin:10px 10px;
      }
    }
  }
</style>



