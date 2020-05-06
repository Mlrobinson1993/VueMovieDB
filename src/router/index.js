import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/movies/:movieID',
		name: 'Movie',
		component: () =>
			import(/* webpackChunkName: "Movie" */ '../views/Movie.vue'),
	},
	{
		path: '/:id',
		name: 'HomeWithFilter',
		component: () =>
			import(/* webpackChunkName: "GenreMovieList */ '../views/Home.vue'),
	},
];

const router = new VueRouter({
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});

export default router;
