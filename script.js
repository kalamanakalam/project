const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели ?");
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};
const film = prompt('Один из последних просмотренных фильмов?');
const grade = prompt('На сколько оцените его?');
