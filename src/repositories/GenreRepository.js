import Client from './Clients/AxiosClient';
const resource = '/genre/movie/list';
const APIKey = '6f32003947e7229ee7d08ab221d59494';

export default {
	get() {
		return Client.get(`${resource}?api_key=${APIKey}`);
	},
};
