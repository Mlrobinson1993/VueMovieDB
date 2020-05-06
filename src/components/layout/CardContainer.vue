<template>
	<div class="card__container">
		<ul
			class="list"
			:style="[
				columns === 6
					? {
							'grid-template-columns': 'repeat(auto-fit, minmax(175px, 1fr))',
							width: '80vw',
							margin: '0 auto',
							'min-height': '100vh',
					  }
					: {
							'grid-template-columns': 'repeat(auto-fit, minmax(190px, 1fr))',
							width: '60vw',
							margin: '0 auto',
							'min-height': '100vh',
					  },
			]"
		>
			<MovieCard
				:columns="columns"
				v-for="movie in movies"
				:movie="movie"
				:key="movie.id"
			/>
		</ul>
	</div>
</template>

<script>
import MovieCard from '../cards/MovieCard';

export default {
	name: 'CardContainer',
	components: { MovieCard },
	props: {
		movies: {
			type: Array,
		},
		columns: {
			type: Number,
			default: 6,
		},
	},
};
</script>

<style scoped>
.list {
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	padding-left: 0;
}
</style>
