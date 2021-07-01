const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const userSection = document.getElementById('user-input');
const userInputs = userSection.querySelectorAll('input');


const movies = [];

const renderMovies = (filter = '')=>{
  const movieList = document.getElementById('movie-list');

  if(movies.length === 0){
    movieList.classList.remove('visible');
    return;
  }else{
    movieList.classList.add('visible');
  }

  movieList.innerHTML = ''; // Every time the old gets cleared and display from start

  const filteredMovies = !filter 
  ? movies 
  : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie=>{
    const movieEl = document.createElement('li');
    let text = movie.info.title + '-';
    for(const key in movie.info){
      if(key !== 'title'){
        text = text + `${key} : ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
}; // Display the array list items in UI 

const clearUserSection = ()=>{
  for(const userInp of userInputs){
    userInp.value='';
  }
}; // Clear the input values in UI once done

const addMovieHandler = ()=>{
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;


  if(title.trim()==='' || 
  extraName.trim()==='' ||
  extraValue.trim()===''
  ){
    return;
  }

  const newMovie = {
    info : {
      title,
      [extraName] : extraValue
    },
    id : Math.random()
  };

  movies.push(newMovie);
  renderMovies();
  clearUserSection();
}; //Get values from the user and send to further process


const searchMovieHandler = () =>{
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
}; // Get the filter value and send to further process


addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);