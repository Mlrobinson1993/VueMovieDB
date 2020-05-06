<template>
  <div class="home">
    <HeroHome :movie="movies[0]" />
    <GenreNav v-on:filter-by-genre="searchByGenre" />
    <CardContainer :columns="4" :movies="movies" />
  </div>
</template>

<script>
import HeroHome from "../components/layout/HeroHome";
import CardContainer from "../components/layout/CardContainer";
import GenreNav from "../components/layout/navigation/GenreNav";
import Repository from "../repositories/RepositoryFactory.js";
const MovieRepository = Repository.get("movies");

export default {
  name: "Home",
  components: { CardContainer, HeroHome, GenreNav },
  data() {
    return {
      movies: []
    };
  },
  created() {
    try {
      this.searchByGenre();
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    searchByGenre: async function(id = "popular") {
      let data = {};

      switch (id) {
        case "popular":
          data = await MovieRepository.getPopular();
          break;
        case "upcoming":
          data = await MovieRepository.getUpcoming();
          break;
        case "top-rated":
          data = await MovieRepository.getTopRated();
          break;
        case "all":
          data = await MovieRepository.get();
          break;
        default:
          data = await MovieRepository.getByGenre(id);
      }

      this.movies = data.data.results;
    }
  },

  watch: {
    "$route.params.id": function() {
      this.searchByGenre(this.$route.params.id);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  line-height: 1.4;
}

body {
  background: rgb(28, 33, 46);
}
</style>
