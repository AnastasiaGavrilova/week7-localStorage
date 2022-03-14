const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieReleaseYear = document.querySelector('.userInputRelease');
const button = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const releaseYearToDisplay = document.querySelector('.MovieReleaseYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let releaseYearStorage = localStorage.getItem('releaseYear');

if(titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    releaseYearToDisplay.textContent = releaseYearStorage;
    container.style.backgroundImage = `linear-gradient(rgba(57, 57, 82, 0.534), rgba(78, 61, 61, 0.541)), url('${imageUrlInStorage}')`;
}

button.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let releaseYearInput = movieReleaseYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('releaseYear', releaseYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    releaseYearToDisplay.textContent = releaseYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(57, 57, 82, 0.534), rgba(78, 61, 61, 0.541)), 
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieReleaseYear.value = '';
});

