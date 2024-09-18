const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", '');
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};

const film = prompt('Один из последних просмотренных фильмов?');
const grade = prompt('На сколько оцените его? ');
const film1 = prompt('Один из последних просмотренных фильмов?');
const grade1 = prompt('На сколько оцените его? ');

personalMovieDB.movies[film] = grade;
personalMovieDB.movies[film1] = grade1;
console.log(personalMovieDB.movies);