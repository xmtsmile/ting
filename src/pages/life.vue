<template>
  <div class="life">
    <div class="has-header">
      <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
      <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
      <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Scroller from '../components/Scroller'

  export default {
    name: 'life',
    components: {Scroller},
    data(){
      return {
      }
    },
    computed: {
      // Getting Vuex State from store/modules/movie
      ...mapState({
        hotMovies: state => state.movie.hotMovies,
        topMovies: state => state.movie.topMovies,
        newMovies: state => state.movie.newMovies
      })
    },
    methods:{
      // Dispatching getMovie
    getMovie: function () {
        this.$store.dispatch('getMovie')
      }
    },
    created () {
      // Getting movies data on created
      this.getMovie()
      this.getPosition
    }
  }
</script>
<style lang="scss" scope>

</style>



