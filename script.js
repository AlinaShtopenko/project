"use strict";

// console.log(1);

// let b = alert("something");

// console.log(4/0);
// const num = Number.MAX_SAFE_INTEGER;
// console.log(num);

// console.log(num + 4);
// const answer = +prompt("enter", "18");
// console.log(typeof(answer));
// const answers = [];

// answers[0] = prompt("Напишите имя");
// answers[1] = prompt("Напишите фамилию");
// answers[2] = prompt("Напишите город");

// console.log(typeof(answers));
// let a = 10;
// let b = 10;

// a++;
// b--;
// console.log(a);
// console.log(b);

let numberOfFilm = prompt("Какой фильм вамнравится", "");

// console.log(numberOfFilm);
const personalMovieDB = {
    count: numberOfFilm,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false
};



const askUserMovie = prompt("Один из последних просмотренных фильмов?", ""),
      askUserEstimate = prompt("На сколько оцените его?", "");

      personalMovieDB.movies[askUserMovie] = askUserEstimate;

console.log(personalMovieDB);