<template>
  <li>
    <div class="overlay"></div>
    <img
      :src="[movie.poster_path ? 'https://image.tmdb.org/t/p/original' + movie.poster_path : placeholderIMG]"
      :alt="movie.title + 'poster image'"
    />
    <div class="text__container">
      <h3 class="text__container--date">{{ movie.release_date.split('-')[0] }}</h3>
      <h3 class="text__container--title">{{ movie.title }}</h3>

      <router-link :to="'/movies/' + movie.id">
        <GoToMovie />
      </router-link>
    </div>
  </li>
</template>

<script>
import GoToMovie from "../buttons/GoToMovie";

export default {
  name: "MovieCard",
  props: { movie: { type: Object } },
  components: { GoToMovie },
  data() {
    return {
      placeholderIMG: require("../../images/movie-placeholder.png")
    };
  }
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  max-width: 200px;
  max-height: 275px;
  margin: 0 auto;
  overflow: hidden;
  transform: scale(1);
  transition: 0.2s ease-in-out;
  box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.25);

  & > img {
    max-width: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover .overlay {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:hover .text__container {
    opacity: 1;
  }
}

.text__container {
  position: relative;
  z-index: 1;
  top: -50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: 0.1s ease-in-out;
  color: white;
  padding: 1rem;
  font-size: 1em;
  text-decoration: none;

  &--date {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  &--title {
    font-weight: 400;
    margin-bottom: 1rem;
  }
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  transition: 0.1s ease-in-out;
}
</style>
