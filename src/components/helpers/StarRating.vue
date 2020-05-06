<template>
  <div class="star__ratings">
    <div class="star__ratings--top" :style="{
				width: getRatingsPercentage(rating) + '%',
			}">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
    <div class="star__ratings--bottom">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
    <span class="star__ratings--text">Ratings</span>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    rating: {
      type: Number,
      default: 10
    }
  },

  methods: {
    getRatingsPercentage(num) {
      return num * 10;
    }
  }
};
</script>

<style lang="scss" scoped>
.star__ratings {
  unicode-bidi: bidi-override;
  color: #474b57;
  font-size: 15px;
  height: 25px;
  width: 75px;

  position: relative;
  padding: 0;
  text-shadow: 0px 1px 0 #a2a2a2;

  &--top {
    color: #f3b814;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  &--bottom {
    padding: 0;
    display: block;
    z-index: 0;
  }

  &--text {
    color: white;
    text-transform: uppercase;
    font-size: 0.8em;
  }
}
</style>
