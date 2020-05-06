<template>
  <div>
    <div v-if="isLoading">
      <h1 :style="{color: 'white'}">Loading...</h1>
    </div>
    <div v-else-if="Object.keys(movie).length !== 0">
      <div class="hero__container--img">
        <img
          v-if="movie.backdrop_path"
          :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path"
          :alt="movie.title + ' backdrop image'"
        />
      </div>
      <div class="hero__container">
        <div class="hero__container--content">
          <img
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
            :alt="movie.title + 'poster image'"
          />
          <div class="text__container">
            <h1>{{ movie.title }}</h1>

            <div class="rating">
              <span role="img">⭐️</span>
              <div class="text">
                <span>{{ movie && movie.vote_average }}</span>
                <span>{{ movie.vote_count }} votes</span>
              </div>
            </div>
            <div class="metadata">
              <span class="metadata__item">
                {{
                movie.release_date && movie.release_date.split('-')[0]
                }}
              </span>
              <span class="metadata__divider">|</span>
              <span class="metadata__item">
                {{
                convertTime(movie.runtime)
                }}
              </span>
              <span class="metadata__divider">|</span>
              <span class="metadata__item">{{ movie.original_language }}</span>
              <span class="metadata__divider">|</span>
              <div class="genres metadata__item">
                <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }},</span>
              </div>
            </div>
            <p>{{ movie.overview }}</p>
          </div>
        </div>
      </div>
      <CastAndCrew />
      <h2 class="section__title">Recommended Movies</h2>
      <Recommended :movieID="movie.id" />
    </div>
    <div v-else>
      <NotFound />
    </div>
  </div>
</template>

<script>
import Recommended from "../components/sections/Recommended";
import CastAndCrew from "../components/sections/CastAndCrew";
import NotFound from "../views/NotFound";
import Repository from "../repositories/RepositoryFactory.js";
const MovieRepository = Repository.get("movies");

export default {
  name: "Movie",
  data() {
    return { movie: {}, isLoading: false };
  },
  components: { Recommended, CastAndCrew, NotFound },
  created() {
    try {
      this.getMovie();
      this.isLoading = true;
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    getMovie: async function() {
      const id = this.$route.params.movieID;
      const { data } = await MovieRepository.getMovie(id);
      this.movie = data;
      this.isLoading = false;
    },

    convertTime: function(num) {
      var hours = Math.floor(num / 60);
      var minutes = num % 60;
      return `${hours}h ${minutes} mins`;
    }
  },

  watch: {
    "$route.params.movieID": function() {
      this.getMovie();
    }
  }
};
</script>

<style lang="scss" scoped>
.hero__container {
  width: 80vw;
  margin: 0 auto;

  &--img {
    height: 30vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
  }

  &--content {
    transform: translateY(-50px);
    position: relative;
    z-index: 1;
    display: flex;

    img {
      height: 40vh;
    }
  }
}

.text__container {
  width: 100%;
  grid-column: 2;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  margin-left: 2rem;
  & > h1 {
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  & > p {
    font-size: 0.8em;
  }

  & > em {
    font-size: 1em;
    font-weight: 600;
  }
}

.rating {
  display: flex;
  margin-bottom: 0.5rem;

  & > span {
    font-size: 2em;
    margin-right: 0.3rem;
  }

  & .text {
    display: flex;
    flex-direction: column;

    & > span {
      color: #f3b814;
    }

    & > span:first-child {
      font-size: 1.2em;
      font-weight: 500;
    }
    & > span:last-child {
      font-size: 0.8em;
      opacity: 0.6n;
    }
  }
}

.metadata {
  display: flex;
  width: 80%;
  justify-content: flex-start;
  font-size: 0.8em;
  margin-bottom: 0.5rem;

  &__item {
    margin: 0 0.25rem;
  }

  &__divider {
    opacity: 0.4;
  }
}

.section__title {
  width: 80vw;
  margin: 0 auto 0.5rem auto;
  text-align: left;
  color: white;
}

@media (max-width: 760px) {
  .hero__container--content {
    flex-direction: column;
    align-items: center;
  }

  .text__container {
    text-align: center;
    margin-left: 0;
  }

  .rating {
    margin: 0 auto 0.5rem auto;
  }

  .metadata {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin: 0 auto 0.5rem auto;
  }
}
</style>
