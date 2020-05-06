import MovieRepository from './MovieRepository';
import GenreRepository from './GenreRepository';

const repositories = {
	movies: MovieRepository,
	genres: GenreRepository,
};

export default {
	get: (name) => repositories[name],
};
