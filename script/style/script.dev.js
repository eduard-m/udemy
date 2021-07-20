"use strict";

var str = "some";
var strObj = new String(str); // console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);
var soldier = {
  health: 400,
  armor: 100,
  sayHello: function sayHello() {
    console.log('Hello');
  }
};
var john = Object.create(soldier); // const john = {
//     health: 100
// };
// john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);
// console.log(john.armor);

john.sayHello();