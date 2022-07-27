const movies = require("./data");
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (moviesArray) => {
  const directorsNames = moviesArray.map((movie) => movie.director);
  const uniqueDirectors = directorsNames.filter((director, index) => directorsNames.indexOf(director) === index);
  return uniqueDirectors;}
  console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) => {
  const MoviesSpil = moviesArray.filter((moviesArray) => {
    moviesArray.director === "Steven Spielberg"
  });
  const MoviesDrama = MoviesSpil.filter ((moviesArray) => {
    moviesArray.genre.includes('Drama');
  });
  return MoviesDrama;
}
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

 const scoresAverage = (moviesArray) => {
    // const avgMovies = moviesArray.map((movie) => {
    //    return movie.score;
    // });
    const avgTotal = moviesArray.reduce((suma, movie) =>{
      return movie.score + suma
  },0); 
    return avgTotal / moviesArray.length
  }
  console.log(scoresAverage(movies))
  


// Iteration 4: Drama movies - Get the average of Drama Movies
const  dramaMoviesScore = (moviesArray) => {
 const avgMoviesDrama = moviesArray.filter((movie) => {
     movie.genre === "Drama";
  });
  const avgTotalDrama = avgMoviesDrama.reduce((suma, movie) =>{
    return movie.score + suma
},0); 
  return avgTotalDrama / avgMoviesDrama.length;
}
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
