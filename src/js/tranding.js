import * as API from './api';
// import trendingMarkupTpl from '../templates/trendingMarkupTpl.hbs';
import genres from '../json/genres.json';
import { genreTitle } from './genresIntersect';

const refs = {
  trend: document.querySelector('.trend-list'),
};

async function getTrending() {
  try {
    const movies = await API.getMovie();
    const { results } = movies;

    refs.trend.innerHTML = '';
    const markupTrend = results
      .map(
        item =>
          `<li class="film-gallery__item card">
            <a href="http://" class="link">
              <img
                class="film-gallery__img"
                src="http://image.tmdb.org/t/p/w780${item.poster_path}"
                loading='lazy'
                alt="фото фільма"
              />
              <div class="film">
                <h2 class="film__title">${item.title}</h2>
              </div>
              <div class="film__wrapper">
                <p class="film__genre film__wrapper-reset">${genreTitle(
                  item.genre_ids,
                  genres
                )}</p>
                <p class="film__line film__wrapper-reset">|</p>
                <p class="film__relise film__wrapper-reset">${
                  item.release_date
                }</p>
                <p class="film__rating visually-hidden film__wrapper-reset">${
                  item.vote_average
                }</p>
              </div>
            </a>
          </li>`
      )
      .join('');
    return (refs.trend.innerHTML = markupTrend);
  } catch (error) {
    console.log(error);
  }
}

getTrending();
