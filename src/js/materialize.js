// DOM elements
const watchedMoviesList = document.querySelector('.watched_movies');
const queueMoviesList = document.querySelector('.queue_movies');

// setup watchedMovies
export const setupWatchedMovies = data => {
  let html = '';
  data.forEach(doc => {
    const watchedMovies = doc.data();
    const li = `
          <li>
            <div class="collapsible-header grey lighten-4"> ${watchedMovies.title} </div>
            <div class="collapsible-body white"> ${watchedMovies.content} </div>
          </li>
        `;
    html += li;
  });
  watchedMoviesList.innerHTML = html;
};

// setup queueMovies
export const setupQueueMovies = data => {
  let html = '';
  data.forEach(doc => {
    const queueMovies = doc.data();
    const li = `
          <li>
            <div class="collapsible-header grey lighten-4"> ${queueMovies.title} </div>
            <div class="collapsible-body white"> ${queueMovies.content} </div>
          </li>
        `;
    html += li;
  });
  queueMoviesList.innerHTML = html;
};

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {
  const modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  const items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});
