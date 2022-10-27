import * as API from './api';
import trendingMarkupTpl from '../templates/trendingMarkupTpl.hbs';
import genres from '../json/genres.json';

const refs = {
  trend: document.querySelector('.trend-list'),
};

async function getTrending() {
  try {
    const movies = await API.getMovie();
    const { results } = movies;
    console.log(results);
    console.log(results[0].original_title);
    console.log(results[0].poster_path);
    refs.trend.insertAdjacentHTML('beforeend', trendingMarkupTpl(results));
    const genre = results.forEach(element => {
      element.genre_ids;
    });
  } catch (error) {
    console.log(error);
  }
}

getTrending();
