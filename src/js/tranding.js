import * as API from './api';
import trendingMarkupTpl from '../templates/trendingMarkupTpl.hbs';
import genres from '../json/genres.json';

const refs = {
  trend: document.querySelector('.trend-list'),
};

console.log(refs.trend);

async function getTrending() {
  try {
    const movies = await API.getMovie();
    const { results } = movies;
    console.log(results[0].poster_path);
    const markUp = ` <li>
                                    <div>
                                            <a href=${results[0].poster_path}>
                                                    <img src=${results[0].poster_path} alt="name">
                                            </a>
                                    </div>
                                    <div>
                                            <div>
                                                    <p>title</p>
                                            </div>
                                            <div>
                                                    <ul>
                                                            <li>genre</li>
                                                            <li>genre</li>
                                                    </ul>
                                            </div>
                                            <div>
                                                    <p>year</p>
                                            </div>
                                    </div>
                            </li>`;
    //   .map(
    //     item => ` <li>
    //                             <div>
    //                                     <a href=${item.poster_path}>
    //                                             <img src=${item.poster_path} alt="name">
    //                                     </a>
    //                             </div>
    //                             <div>
    //                                     <div>
    //                                             <p>title</p>
    //                                     </div>
    //                                     <div>
    //                                             <ul>
    //                                                     <li>genre</li>
    //                                                     <li>genre</li>
    //                                             </ul>
    //                                     </div>
    //                                     <div>
    //                                             <p>year</p>
    //                                     </div>
    //                             </div>
    //                     </li>`
    //   )
    //   .join('');
    refs.trend.insertAdjacentHTML('beforeend', markUp);
    //     const genre = results.forEach(element => {
    //       element.genre_ids;
    //     });
  } catch (error) {
    console.log(error);
  }
}

getTrending();

// refs.trend.insertAdjacentHTML('beforeend', trendingMarkupTpl(results));
