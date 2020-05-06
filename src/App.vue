<template>
  <div id="app">
    <Hamburger v-on:set-is-active="setIsNavActive" :isActive="isNavActive" />
    <Nav :isActive="isNavActive" v-on:set-is-active="setIsNavActive" />
    <router-view />
  </div>
</template>

<script>
import Hamburger from "./components/layout/navigation/Hamburger";
import Nav from "./components/layout/navigation/Nav";
export default {
  name: "App",
  components: { Hamburger, Nav },
  data() {
    return {
      isNavActive: false
    };
  },
  methods: {
    setIsNavActive: function() {
      this.isNavActive = !this.isNavActive;
    }
  }
};
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
