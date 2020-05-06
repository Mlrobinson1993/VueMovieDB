<template>
  <button>Go To Movie</button>
</template>


<script>
export default {
  name: "GoToMovie"
};
</script>

<style lang="scss" scoped>
button {
  color: #f3b814;
  border: 1px solid #f3b814;
  border-radius: 3px;
  background: transparent;
  padding: 0.25rem;
  font-size: 1em;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: #f3b814;
    color: black;
  }
}
</style>