import { setupWatchedMovies, setupQueueMovies, setupUI } from './materialize';

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    // get data
    db.collection('watched_movies')
      .get()
      .then(snapshot => {
        setupWatchedMovies(snapshot.docs);
        setupUI(user);
      });

    db.collection('queue_movies')
      .get()
      .then(snapshot => {
        setupQueueMovies(snapshot.docs);
        setupUI(user);
      });
  } else {
    console.log('user logged out');
    setupUI(user);
    setupWatchedMovies([]);
    setupQueueMovies([]);
  }
});

// create new guide (add to watched)
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', handleAddToWatched);

function handleAddToWatched(e) {
  e.preventDefault();
  db.collection('watched_movies')
    .add({
      title: createForm.title.value,
      content: createForm.content.value,
    })
    .then(() => {
      // close the create modal & reset form
      const modal = document.querySelector('#modal-create');
      M.Modal.getInstance(modal).close();
      createForm.reset();
    })
    .catch(err => {
      console.log(err.message);
    });
}

// create new guide (add to queue)
// const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', handleAddToQueue);

function handleAddToQueue(e) {
  e.preventDefault();
  db.collection('queue_movies')
    .add({
      title: createForm.title.value,
      content: createForm.content.value,
    })
    .then(() => {
      // close the create modal & reset form
      const modal = document.querySelector('#modal-create');
      M.Modal.getInstance(modal).close();
      createForm.reset();
    })
    .catch(err => {
      console.log(err.message);
    });
}

// signup
const signupForm = document.querySelector('#signup-form');
// console.log(signupForm);

signupForm.addEventListener('submit', signUp);

function signUp(e) {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  console.log(email, password);

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
}

// logout
const logout = document.querySelector('#logout');

logout.addEventListener('click', handleLogout);

function handleLogout(e) {
  e.preventDefault();
  auth.signOut().then(() => {
    //     console.log('user signed out');
  });
}

// login
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', handleLogin);

function handleLogin(e) {
  e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
}

// ========================================================

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyDGQ2jBOS4EyJvqXyhSM9D4atz_WFZvVFo',
//   authDomain: 'filmoteka-cotton.firebaseapp.com',
//   projectId: 'filmoteka-cotton',
//   storageBucket: 'filmoteka-cotton.appspot.com',
//   messagingSenderId: '560408443484',
//   appId: '1:560408443484:web:aa5f545504ece1d0d18499',
//   measurementId: 'G-70V3NB3BG9',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
