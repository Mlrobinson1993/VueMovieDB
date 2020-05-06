<template>
  <div :class="[isActive ? 'nav active__nav' : 'nav']">
    <h2 class="nav__title">
      Categories
      <br />& Filters
    </h2>
    <ul class="nav__link--container">
      <router-link
        class-active="active"
        :to="'/' + genre.id"
        v-for="genre in genres"
        :key="genre.id"
      >
        <li @click="toggleIsActive">{{ genre.name }}</li>
      </router-link>
    </ul>
    <span
      :class="[
        isActive ? 'accordion__tab active__accordion' : 'accordion__tab'
      ]"
      @click="toggleIsActive"
    >
      <span class="accordion__tab--arrow1"></span>
      <span class="accordion__tab--arrow2"></span>
    </span>
  </div>
</template>

<script>
import Repository from "../../../repositories/GenreRepository";
const GenreRepository = Repository.get("genres");
export default {
  data() {
    return {
      genres: [],
      isActive: false,
      hasRun: false
    };
  },
  mounted() {
    if (this.hasRun && Object.keys(this.genres).length === 0) {
      this.getGenres();
    }
  },
  created() {
    try {
      this.getGenres();
      this.hasRun = true;
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    getGenres: async function() {
      const { data } = await GenreRepository;
      const genres = data.genres;
      const defaultGenres = [
        { id: "popular", name: "Popular" },
        { id: "top-rated", name: "Top Rated" },
        { id: "upcoming", name: "Upcoming" }
      ];

      for (let i = genres.length; i > 0; i--) {
        if (i > 11) {
          genres.pop();
        }
      }

      const genreArray = defaultGenres.concat(genres);
      genreArray.push({ id: "all", name: "All Movies" });

      this.genres = genreArray;
    },
    handleClick: function(id) {
      this.$emit("filter-by-genre", id);
    },
    toggleIsActive: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.accordion__tab {
  display: none;
}

.nav {
  width: 60vw;
  margin: 0 auto;
  height: 25vh;
  position: relative;
  top: -30px;
  background-color: white;
  padding: 1.5rem 0.5rem;
  display: flex;
  justify-content: flex-start;

  &__title {
    font-size: 3vw;
    margin: auto 5vw auto 0;
    font-weight: 300;
  }

  &__link--container {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-template-rows: repeat(auto-fit, minmax(20px, 1fr));

    & a {
      text-decoration: none;
      background: transparent;
      border: none;
      cursor: pointer;
      color: rgba(0, 0, 0, 1);
      text-align: left;
      list-style: none;
      font-size: 1vw;

      &:hover {
        color: steelblue;
        text-decoration: underline;
      }
    }
  }

  .active {
    color: steelblue;
    display: flex;

    &::after {
      content: ">";
      margin-left: 3px;
    }
  }
}

@media (max-width: 950px) {
  .nav__link--container {
    a {
      font-size: 1.25vw;
    }
  }
}

@media (max-width: 650px) {
  .nav {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1.5rem;
    height: 12vh;
    overflow: hidden;
    grid-gap: 5px;
    transition: 0.2s ease-in-out;
    &__title {
      font-size: 1.5em;
      margin: 0 0 1rem 0;
    }

    &__link--container {
      a {
        font-size: 1.75vw;
      }
    }
  }

  .active__nav {
    height: 37.5vh;
  }

  .accordion__tab {
    display: block;
    margin: 0 auto;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 75%;
    transform: rotate(0);
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &--arrow1,
    &--arrow2 {
      position: relative;
      background: black;
      width: 2px;
      height: 10px;
      border-radius: 3px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
      display: inline-block;
    }

    &--arrow1 {
      transform: rotate(-45deg);
      left: -2px;
    }

    &--arrow2 {
      transform: rotate(45deg);
      right: -2px;
    }
  }

  .active__accordion {
    top: 85%;
    transform: rotate(180deg);
  }
}
</style>
