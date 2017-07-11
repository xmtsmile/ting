<template>
  <div class="search">
    <mt-search v-model="keyValue" placeholder="Search" cancelText="取消"></mt-search>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data(){
      return {
        keyValue:''
      }
    },
    methods:{
    }
  }
</script>
<style lang="scss" scope>
  .mint-searchbar-cancel{
    color:#fff;
  }
</style>



