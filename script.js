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
    b[i] = prompt('На сколько оцените его? ');
    if(a[i].length == 0 || a[i].length >= 50 || a[i] == '' || b[i] == '' || b[i].length == 0 || b[i].length >= 50 ){
        i--;
    }else{
        personalMovieDB.movies[a[i]] = b[i];
    }
}
console.log(personalMovieDB.movies);
if(personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count >=10 && personalMovieDB.count <=30){
    alert("Вы классический зритель");
} else if(personalMovieDB.count > 30){
    alert("Вы киноман");

} else alert("Произошла ошибка");