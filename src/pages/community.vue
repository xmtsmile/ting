<template>
  <div class="community">
    <scroller title="最受关注图书｜虚构类" type="hasCover" :items="novel"></scroller>
    <scroller title="最受关注图书｜非虚构类" type="hasCover" :items="reality"></scroller>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Scroller from '../components/Scroller'

  export default {
    name: 'community',
    components:{Scroller},
    data(){
      return {

      }
    },
    computed: {
      // Getting Vuex State from store/modules/book
      ...mapState({
        novel: state => state.book.novel,
        reality: state => state.book.reality,
        travel: state => state.book.travel,
        bookTags: state => state.book.bookTags
      })
    },
    methods:{
      // Dispatching getBook
      getBook: function () {
        this.$store.dispatch('getBook')
      }
    },
    created: function created(){
       this.getBook();
    }
  }
</script>
<style lang="scss" scope>
  .promItem {
    overflow: hidden;
    margin: 16px 18px 8px 16px;
  }

  .corver {
    float: left;
    width: 100px;
    margin-right: 15px;
  }

  .content {
    margin-right: 10px;
  }

  .name {
    font-size: 20px;
    color: #494949;
    margin: 10px;
    max-width: 100%;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .price {
    float: right;
    color: #E76648;
    font-size: 16px;
    line-height: 22px;
  }

  .info {
    font-size: 13px;
    font-weight: 300;
    line-height: 1.5;
    color: #9B9B9B;
  }
</style>



