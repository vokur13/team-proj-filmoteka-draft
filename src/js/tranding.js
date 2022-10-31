import * as API from './api';
import { markupGallery } from './markUp';
import { instance, container } from './pagination';

const refs = {
  trend: document.querySelector('.trend-list'),
};

async function getTrending(data) {
  try {
    const movies = await API.getMovie(data);
    const { results } = movies;
    console.log(results);
    refs.trend.innerHTML = '';
    return (refs.trend.innerHTML = await markupGallery(results));
  } catch (error) {
    console.log(error);
  }
}

getTrending(1);

container.addEventListener('click', handleTui);

function handleTui(e) {
  console.log(e.target.textContent);
  getTrending(e.target.textContent);
}
