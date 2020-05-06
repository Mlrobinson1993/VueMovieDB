<template>
	<div>
		<CardContainer :columns="6" v-if="movies.length > 0" :movies="movies">
		</CardContainer>
		<h2 class="error__tag" v-else>No Movies Available...</h2>
	</div>
</template>

<script>
// import MovieCard from '../cards/MovieCard';
import CardContainer from '../layout/CardContainer';
import Repository from '../../repositories/RepositoryFactory';
const MovieRepository = Repository.get('movies');
export default {
	name: 'Recommended',
	components: { CardContainer },
	props: {
		movieID: {
			type: Number,
		},
	},
	data() {
		return {
			movies: [],
		};
	},
	created() {
		try {
			this.getMovies();
		} catch (err) {
			console.error(err);
		}
	},
	methods: {
		getMovies: async function() {
			const { data } = await MovieRepository.getRecommended(
				this.$route.params.movieID
			);
			this.movies = data.results;
		},
	},
	watch: {
		movieID: function() {
			this.getMovies();
		},
	},
};
</script>

<style lang="scss" scoped>
.error__tag {
	color: white;
}
</style>
