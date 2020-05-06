<template>
  <div class="castandcrew__container">
    <div class="cast__container">
      <h2>Cast</h2>
      <div class="card__container">
        <ProfileCard v-for="castMember in cast" :member="castMember" :key="castMember.id" />
      </div>
    </div>
    <div class="crew__container">
      <h2>Crew</h2>
      <div class="card__container">
        <ProfileCard v-for="crewMember in crew" :member="crewMember" :key="crewMember.id" />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from "../cards/ProfileCard";
import Repository from "../../repositories/RepositoryFactory";
const MovieRepository = Repository.get("movies");

export default {
  name: "CastAndCrew",
  props: ["movieID"],
  components: { ProfileCard },
  data() {
    return { cast: [], crew: [] };
  },
  created() {
    try {
      this.getCredits();
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    getCredits: async function() {
      const id = this.$route.params.movieID;
      const { data } = await MovieRepository.getCredits(id);
      this.cast = data.cast.splice(0, 4);
      this.crew = data.crew.splice(0, 4);
    }
  },
  watch: {
    "$route.params.movieID": function() {
      this.getCredits();
    }
  }
};
</script>

<style lang="scss" scoped>
.castandcrew__container {
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;
}

.cast__container,
.crew__container {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  & > h2 {
    text-align: left;
    color: white;
  }

  & > .card__container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
}
</style>
