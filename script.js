"use strict"

let numberOfFilms;
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", '');

    while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};

function rememberMyFilm(){
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
}

rememberMyFilm();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >=10 && personalMovieDB.count <=30){
        alert("Вы классический зритель");
    } else if(personalMovieDB.count > 30){
        alert("Вы киноман");
    
    } else alert("Произошла ошибка");
    
    function showMyDB(privat){
        if(privat === false){
            console.log(personalMovieDB);
        }
    }
}

detectPersonalLevel();

function writeYourGenres(){
    let genres = [];
    let a;
    for(let i = 0; i < 3; i++){
        a = prompt(`Ваш любимый жанр фильмов под номером ${i}`)
        genres[i]= a;
    }
    return genres;
}