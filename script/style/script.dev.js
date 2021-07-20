/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
'use strict';

var numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
} // start();


var personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false
};

function rememberMyFilms() {
  for (var i = 0; i < 2; i++) {
    var a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
} // rememberMyFilms();


function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
} // detectPersonalLevel();


function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (var i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt("\u0412\u0430\u0448 \u043B\u044E\u0431\u0438\u043C\u044B\u0439 \u0436\u0430\u043D\u0440 \u043F\u043E\u0434 \u043D\u043E\u043C\u0435\u0440\u043E\u043C ".concat(i));
  }
}

writeYourGenres(); // aaaa
// Код возьмите из предыдущего домашнего задания