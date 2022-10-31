import { genreTitle } from './genresIntersect';
import genres from '../json/genres.json';

export const markupGallery = async results => {
  return results
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
};
