"use strict"

const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat:true,
    start: function (numb){
        numb = +prompt("Сколько фильмов вы уже посмотрели ?", '');
        
        while( numb == '' || numb == null || isNaN(numb)){
            numb = +prompt("Сколько фильмов вы уже посмотрели ?", '');
        }
        personalMovieDB.count = numb;
    },
    rememberMyFilm: function (movies) {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function (count){
        if(count < 10){
            alert("Просмотрено довольно мало фильмов");
        } else if(count >=10 && count <=30){
            alert("Вы классический зритель");
        } else if(count > 30){
            alert("Вы киноман");
        
        } else alert("Произошла ошибка");
    },
    showMyDB: function (hidden, obj){
        if(!hidden){
            console.log(obj);
        }
    },
    writeYourGenres: function (genres){
        let a;
        for(let i = 1; i <= 3; i++){
            a = prompt(`Ваш любимый жанр фильмов под номером ${i}`)
            if(a != null && a != ''){
                genres[i-1] = a;
            }else{
                i--;
            }
            
        }
        genres.forEach(function(item, i){
            console.log(`Любмый жанр #${i + 1} - это ${item}`);
        })
        
    },
    toogleVisibleMyDb: function(hidden) {
        hidden = !hidden;
    }
};
personalMovieDB.start(personalMovieDB.count);
personalMovieDB.rememberMyFilm(personalMovieDB.movies);
personalMovieDB.detectPersonalLevel(personalMovieDB.count);
personalMovieDB.showMyDB(personalMovieDB.privat, personalMovieDB);
personalMovieDB.writeYourGenres(personalMovieDB.genres);
personalMovieDB.toogleVisibleMyDb(personalMovieDB.privat);