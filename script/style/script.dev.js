/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
'use strict';

var personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function start() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function rememberMyFilms() {
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
  },
  detectPersonalLevel: function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function showMyDB(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function toggleVisibleMyDB() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function writeYourGenres() {
    for (var i = 1; i < 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      // if (genre === '' || genre == null) {
      //     console.log('Вы ввели некорректные данные или не ввели их вообще');
      //     i--;
      // } else {
      //     personalMovieDB.genres[i - 1] = genre;
      // }
      var genres = prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u043B\u044E\u0431\u0438\u043C\u044B\u0435 \u0436\u0430\u043D\u0440\u044B \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E").toLowerCase();

      if (genres === '' || genres == null) {
        console.log('Вы ввели некорректные данные или не ввели их вообще');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach(function (item, i) {
      console.log("\u041B\u044E\u0431\u0438\u043C\u044B\u0439 \u0436\u0430\u043D\u0440 ".concat(i + 1, " - \u044D\u0442\u043E ").concat(item));
    });
  }
};