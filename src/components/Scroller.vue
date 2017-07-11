<template>
  <div class="scroller">
    <div class="header">
      <h4>{{title}}</h4>
      <a style="text-decoration: none" href="#">更多</a>
    </div>
    <div class="content">
      <slot name="promItem"></slot>
      <ul class="hasCover" v-if="type === 'hasCover'">
        <li v-for="item in items">
          <div @click="goDetail(item.id)">
            <img v-if="item.images" :src="item.images.large" alt="">
            <span class="title">{{item.title}}</span>
            <rating v-if="item.rating" :rating="item.rating"></rating>
          </div>
        </li>
      </ul>
      <ul class="onlyString" v-if="type === 'onlyString'">
        <li v-for="item in items" style="border-color: #FFAC2D;">
          <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Rating from './Rating'

export default {
  name: 'scroller',
  props: ['title', 'type', 'items'],
  components: { Rating },
  data () {
    return {
    }
  },
  methods:{
    goDetail:function(id){
      this.$router.push({ path: 'subjectView', query: { id: id }})
    }
  }
}
</script>

<style lang="scss" scoped>
  .scroller {
    padding-bottom:5px;
  }
  .header {
    height: 10px;
    margin-top:20px;
    line-height:10px;
    padding: 0 16px;
    a {
      float: right;
      font-size: 14px;
      &:last-child {
        color: #42bd56;
      }
    }
    h4 {
      display: inline-block;
      margin-top:-10px;
    }
  }
  .content {
    box-sizing: content-box;
    ul {
      padding: 8px 0;
    }
  }
  .hasCover {
    overflow-x: auto;
    white-space: nowrap;
    text-align: center;
    .title {
      display: block;
      max-width: 100%;
      margin-top: 10px;
      line-height: 16px;
      font-size: 16px;
      color: #111;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
    li {
      display: inline-block;
      width: 100px;
      margin-left: 10px;
    }
    li:first-child {
      padding-left: 8px;
    }
    img {
      height: 150px;
    }
  }
  .onlyString {
    overflow-x: auto;
    white-space: nowrap;
    li {
      display: inline-block;
      margin: 0 0 8px 16px;
      font-size: 16px;
      border: solid 1px;
      border-radius: 4px;
      vertical-align: middle;
    }
    a {
      height: 50px;
      line-height: 50px;
      padding: 0px 24px;
      letter-spacing: 1.6px;
      overflow: auto;
      display: block;
      text-align: center;
    }
    li:empty {
      width: 100%;
      display: block;
      height: 1px;
      border: 0;
      margin: 0;
    }
  }
</style>
