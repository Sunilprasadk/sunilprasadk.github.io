const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const toggleBackdrop = ()=>{
    backdrop.classList.toggle('visible');
}; //Responsible for backdrop opening


const updateUI = ()=>{
    if(movies.length === 0){
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';
    }
}; //Responsible for updating initial UI if we add / cancel movies

const closeMovieDeletionModal = ()=>{
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
}; 


const deleteMovieHandler = (movieId)=>{
    let movieIndex = 0;
    for(const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUI();
}; //delete the movie, if receive confirmation and update the UI



const startDeleteMovieHandler = (movieId)=>{
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);
    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
}; //removing old listeners and send delete confirmation or not

const renderNewMovieElement = (id, title, imageUrl, rating) =>{
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
       <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
       <h2>${title}</h2>
       <p>${rating}/5 stars</p>
    </div>
    `;
    newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}; //display the movie details and send the id for deletion



const closeMovieModal = ()=>{
    addMovieModal.classList.remove('visible');
}; //close the moviemodal

const showMovieModal = ()=>{
    addMovieModal.classList.add('visible');
    toggleBackdrop();
}; //open the movie modal - where we can enter details


const clearMovieInput = ()=>{
    for(const usrInput of userInputs){
        usrInput.value  = '';
    }
}; //clear the input values

const cancelAddMovieHandler = ()=>{
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
}; //Button which close modal+backdrop and clear input field details


const addMovieHandler = ()=>{
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim() === "" || 
    imageUrlValue.trim() === "" || 
    ratingValue.trim() === ""  ||
    +ratingValue < 1 ||
    +ratingValue > 5){
        alert('Please enter valid values (rating between 1 and 5)');
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
}; //Fetch inputs and store in array

const backdropClickHandler = ()=>{
    closeMovieModal();
    clearMovieInput();
    closeMovieDeletionModal();
}; //close the movie modal, movie deletion modal and clear input fields

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);