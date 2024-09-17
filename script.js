const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели ?","1");
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};