"use strict"
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", '');
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};

const a = []
const b = []
let check = 0;
First: for(let i = 0; i < 2 ; i++){
    a[i] = prompt('Один из последних просмотренных фильмов?');
    if(a[i].length == 0 || a[i].length >= 50){
        i--;
        continue First;
    }
    b[i] = prompt('На сколько оцените его? ');
}
personalMovieDB.movies[a[0]] = b[0];
personalMovieDB.movies[a[1]] = b[1];
console.log(personalMovieDB.movies);