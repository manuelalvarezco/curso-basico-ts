"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1, 'username]
var user;
user = [1, 'manuelalvarez'];
console.log('user', user);
console.log('username.length', user[1].length);
console.log('id', user[0]);
// Tuplas con varios valores
// id, username, isPro
var userInfo;
userInfo = [2, 'paparazi', true];
console.log('userInfo', userInfo);
// Arreglo de tuplas
var array = [];
array.push([1, 'manuel']);
array.push([2, 'luis']);
array.push([3, 'martin']);
console.log('array', array);
// Uso de funciones Array
// martin -> martin001
array[2][1] = array[2][1].concat('001'); //martin001
console.log('array', array);
