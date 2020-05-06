<template>
  <ul :class="[isActive ? 'nav__list nav__list--active' : 'nav__list']">
    <router-link class-active="active" :to="'/' + genre.id" v-for="genre in genres" :key="genre.id">
      <li class="nav__list--item" v-on:click="$emit('set-is-active')">{{ genre.name }}</li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Nav",
  props: {
    isActive: {
      type: Boolean
    }
  },
  data() {
    return {
      genres: [
        { id: "popular", name: "Popular" },
        { id: "top-rated", name: "Top Rated" },
        { id: "upcoming", name: "Upcoming" }
      ]
    };
  },
  watch: {
    isActive: function() {
      console.log(this.isActive);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav__list {
  position: fixed;
  top: -40px;
  right: -40px;
  overflow: hidden;
  height: 0px;
  width: 0px;
  display: block;
  border-radius: 50%;
  background: yellow;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
  transition: 0.2s ease-in-out;
  background-color: rgba(40, 74, 114, 0.8);
  z-index: 1;

  a {
    text-decoration: none;
    color: white;
    opacity: 0;
    transition: 0.3s ease-in-out;
    margin-top: 0.3rem;

    &:hover {
      text-decoration: underline;
    }
  }
  &--item {
    list-style: none;
  }

  &--active {
    height: 250px;
    width: 250px;
    padding: 4rem;

    a {
      opacity: 1;
    }
  }
}
</style>