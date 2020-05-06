<template>
  <div class="container">
    <h1>Resource Not Found</h1>
    <a href="javascript:history.go(-1)">Go Back</a>
    <img :src="image" alt="404 image" />
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      image: require("../images/404.png")
    };
  }
};
</script>


<style lang="scss" scoped>
.container {
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;

  h1 {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f3b814;
    font-weight: 400;
  }

  a {
    position: absolute;
    top: 33%;
    cursor: pointer;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f3b814;
    font-weight: 400;
    z-index: 2;
    font-size: 1.5em;

    &:hover {
      color: white;
    }
  }
  img {
    filter: invert(100%);
    width: 100%;
  }
}

@media (max-width: 600px) {
  .container {
    a {
      top: 60%;
    }
    h1 {
      top: 50%;
    }
  }
}
</style>
