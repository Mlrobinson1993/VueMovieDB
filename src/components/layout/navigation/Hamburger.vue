<template>
  <div class="hamburger" v-on:click="$emit('set-is-active')">
    <span :class="[isActive ? 'hamburger__topbun--active hamburger__topbun' : 'hamburger__topbun']"></span>
    <span
      :class="[isActive ? 'hamburger__filling--active hamburger__filling' : 'hamburger__filling']"
    ></span>
    <span
      :class="[isActive ? 'hamburger__bottombun--active hamburger__bottombun' : 'hamburger__bottombun']"
    ></span>
  </div>
</template>


<script>
export default {
  name: "Hamburger",
  props: {
    isActive: {
      type: Boolean
    }
  }
};
</script>


<style lang="scss" scoped>
.hamburger {
  height: 40px;
  width: 40px;
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 2;

  &__topbun,
  &__filling,
  &__bottombun {
    width: 30px;
    height: 3px;
    border-radius: 3px;
    position: relative;
    display: inline-block;
    background-color: white;
    transform: rotate(0);
    transition: 0.2s ease-in-out;
  }

  &__topbun {
    top: -10px;
    &--active {
      top: 0px;
      transform: rotate(45deg);
    }
  }

  &__filling {
    top: -25px;
    &--active {
      opacity: 0;
    }
  }

  &__bottombun {
    top: -40px;
    &--active {
      top: -45px;
      transform: rotate(-45deg);
    }
  }
}
</style>