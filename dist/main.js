//Конструкторы
//1
// function Car(mark, age) {
// 	this.mark = mark.charAt(0).toUpperCase()+mark.slice(1);
// 	this.age = age;
// 	this.getDate = function () {
// 		var nowDate = new Date();
// 		return this.age = nowDate.getFullYear() - age;
// 	}
// }
// var lexus = new Car('lexus', 2);
// console.log(lexus);

// console.log(lexus.mark);
// console.log(lexus.getDate());

//2
// function Scrambler(str) {
// 	this.originStr = function () {
// 		return str;
// 	};
// 	this.getScramblerStr = (function () {
// 		return str.split('').reverse().join('').toLowerCase();
// 	});
// 	this.getWipeOffStr = (function () {
// 		return str = "";
// 	});
// }
// var scrambler = new Scrambler('String');
// console.log(scrambler);
// console.log(scrambler.originStr());
// console.log(scrambler.getScramblerStr());
// console.log(scrambler.getWipeOffStr());

//3
// function ClassString(str) {
// 	this.str = str;
// 	this.getStr = function () {
// 		return this.str;
// 	}
// 	this.setStr = function (value) {
// 		return this.str = value;
// 	}
// 	this.getLengthStr = function () {
// 		return this.str.length;
// 	}
// 	this.toString = function () {
// 		return this.getStr();
// 	}
// 	this.valueOf = function () {
// 		return this.getLengthStr();
// 	}
// }
// var string = new ClassString('test');
// console.log(string);
// console.log(string.str);
// console.log(string.getStr());
// console.log(string.getLengthStr());

// console.log(string.setStr('newstring'));
// console.log(string.getLengthStr());
// console.log(string.toString());
// console.log(string.valueOf());
// console.log(Number(string));
// console.log(+string);

//Дата
//1
// function getDayWeek (year) {
// 	var date = new Date(year, 0);
//  	return date.toLocaleString('ru', {weekday:'long'});
// }
// var dayWeek = getDayWeek(2016);
// console.log(dayWeek);

//2
// function getDayWeek (string) {

// 	function formatDate (argument) {
// 		var argument = string;
// 		var arrDate = argument.split('.');
// 		return newDate = arrDate[2] + ", " + arrDate[1] + ", " + arrDate[0];
// 	}
// 	var newDate = formatDate();
// 	console.log(newDate);

// 	var date = new Date(newDate);
//  	return date.toLocaleString('ru', {weekday:'long'});
// }
// var dayWeek = getDayWeek('29.03.1985');

// console.log(dayWeek);

//3
// var firstDate = new Date(2017, 0, 1, 0, 0, 0, 0);
// var secondDate = new Date;

// function getFullWeek(){
// 	var milliseconds = secondDate - firstDate;
// 	return milliseconds/604800000;
// }
// var week = Math.floor(getFullWeek()) + ' полных недель';
// console.log(week);
"use strict";