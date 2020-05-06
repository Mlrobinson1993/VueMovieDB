<template>
  <div class="profile__card" :style="cssProps">
    <div class="profile__card--text">
      <p>{{ member.name }}</p>
      <span v-if="member.character">{{ member.character }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  props: { member: { type: Object } },
  data() {
    return {
      bgImage: `https://image.tmdb.org/t/p/original${this.member.profile_path}`,
      placeholderImage:
        //gender 1 = female, gender 2 = male
        this.member.gender === 1
          ? require("../../images/female_avi.png")
          : require("../../images/male_avi.png")
    };
  },
  computed: {
    cssProps() {
      return {
        "--background-image": `url(${
          this.member.profile_path ? this.bgImage : this.placeholderImage
        })`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.profile__card {
  position: relative;
  height: 150px;
  width: 100px;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--background-image);
    filter: brightness(0.5) blur(0.5px);
    background-size: cover;
    background-position: center center;
  }

  &--text {
    margin: 0 auto;
    z-index: 1;
    text-align: center;
    padding: 0.5rem;
    line-height: 1;
    font-weight: 600;
    color: white;

    p {
      font-size: 0.7em;
      margin: 0;
      white-space: pre-wrap;
    }
    span {
      font-weight: 400;
      font-size: 0.6em;

      white-space: pre-wrap;
    }
  }
}
</style>
