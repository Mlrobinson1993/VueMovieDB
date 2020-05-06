<template>
  <div
    class="hero"
    :style="{
			'background-image':
				'url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')',
		}"
  >
    <div class="hero__text">
      <h1>{{ movie ? shortenText(movie.title.toUpperCase()) : 'No Title Available' }}</h1>
      <small>
        {{
        movie ? movie.release_date.split('-')[0] : 'No Release Date Available'
        }}
      </small>
      <div class="hero__bottom--container">
        <StarRating :rating="movie.vote_average" />
        <router-link :to="'/movies/' + movie.id">
          <GoToMovie />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import GoToMovie from "../buttons/GoToMovie";
import StarRating from "../helpers/StarRating";
export default {
  name: "HeroHome",
  props: { movie: { type: Object } },
  components: { GoToMovie, StarRating },
  methods: {
    shortenText: function(text) {
      let cutTitle = [];
      if (text.split(" ").length > 5) {
        cutTitle = text.split(" ").splice(0, 5);
        cutTitle[cutTitle.length - 1] = cutTitle[cutTitle.length - 1] + "...";
      } else {
        cutTitle = text.split(" ").splice(0, 5);
      }
      return cutTitle.join(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
.hero {
  min-height: 50vh;
  overflow: hidden;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-top: 7.5%;

  &__bottom--container {
    display: flex;
    grid-row: 3;
    grid-column: 1 / 3;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  &__text {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    min-width: 50vw;
    height: 20vh;
    margin: 0 auto;

    h1 {
      font-weight: 300;
      font-size: 4vw;
      color: white;
      grid-row: 1;
      grid-column: 1 / 3;

      text-align: center;
    }

    small {
      color: white;
      font-weight: 300;
      grid-row: 2;
      grid-column: 1 / 3;
    }
  }
}

@media (max-width: 1000px) {
  .hero {
    &__text {
      h1 {
        font-size: 5vw;
      }
    }
  }
}
@media (max-width: 650px) {
  .hero {
    padding-top: 15%;
    &__text {
      min-width: 90vw;

      h1 {
        font-size: 6vw;
      }
    }
    &__bottom--container {
      flex-direction: column;
      height: 11vh;
    }
  }
}
@media (max-width: 400px) {
  .hero {
    padding-top: 20%;

    &__text {
      h1 {
        font-size: 8vw;
      }
    }
  }
}
</style>
