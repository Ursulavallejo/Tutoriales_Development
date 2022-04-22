"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
// ids.push('helo') will give error
let arr = [1, true, 'Hello'];
console.log('ID:', id);
//-------------------------------
//Tuple  / you specify the type ( expect in the particular order we declare it)
let person = [1, 'Brad', true];
//Tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [2, 'Jill'],
];
//-------------------------------
//Union
let pid = 22;
pid = '22';
//-------------------------------
//Enum  ( enumerated type)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
//-------------------------------
//Objects:
