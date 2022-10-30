import axios from 'axios';

const API_KEY = 'e1d2d59faab8416a91a95646b10aa32e';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovie = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data;
};

const api_image = 'http://image.tmdb.org/t/p/w780${item.poster_path}';
//   https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=e1d2d59faab8416a91a95646b10aa32e&language=en-US

const api_movie =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=e1d2d59faab8416a91a95646b10aa32e';

const api_genres =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=e1d2d59faab8416a91a95646b10aa32e&language=en-US';

const api_query =
  'https://api.themoviedb.org/3/search/movie?api_key=e1d2d59faab8416a91a95646b10aa32e&language=en-US&page=1&include_adult=false&query=moon';

const api_movieID =
  'https://api.themoviedb.org/3/movie/{movie_id}?api_key=e1d2d59faab8416a91a95646b10aa32e&language=en-US';

const api_movie_trailer =
  'https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=e1d2d59faab8416a91a95646b10aa32e&language=en-US';
