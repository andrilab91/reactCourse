"use strict";
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


let watched = prompt('Один из последних просмотренных фильмов?', '');
let rating = prompt('На сколько оцените его?', '');
let movies = {};
movies.watched1 = watched;
movies.rating1 = rating;


