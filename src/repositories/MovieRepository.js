import Client from './Clients/AxiosClient';
const movie = '/movie';
const discover = '/discover/movie';
const APIKey = ''; // <<Would usually store this in a .env file

console.log(APIKey);

export default {
	get() {
		return Client.get(`${discover}?api_key=${APIKey}`);
	},
	getPopular() {
		return Client.get(`${discover}?sort_by=popularity.desc&api_key=${APIKey}`);
	},
	getUpcoming() {
		return Client.get(`${movie}/upcoming?api_key=${APIKey}`);
	},
	getTopRated() {
		return Client.get(
			`${discover}?sort_by=vote_average.desc&api_key=${APIKey}`
		);
	},
	getRecommended(id) {
		return Client.get(`${movie}/${id}/recommendations?api_key=${APIKey}`);
	},
	getMovie(id) {
		return Client.get(`${movie}/${id}?api_key=${APIKey}`);
	},
	getCredits(id) {
		return Client.get(`${movie}/${id}/credits?api_key=${APIKey}`);
	},
	getByGenre(id) {
		return Client.get(`${discover}?with_genres=${id}&api_key=${APIKey}`);
	},
};
