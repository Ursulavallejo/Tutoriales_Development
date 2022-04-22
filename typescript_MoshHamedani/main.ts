// Declaring variables

function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log('Finally:' + i)
}

doSomething()

//-----------------------
// Types:
let a:number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Red;

//-----------------------
// Type Assertions:
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

//-----------------------
// Arrow Functions: JavaScript vs TypeScript

let log = function (message) {
    console.log(message);
}

let doLog = (message) => console.log(message);
let doLog = () => console.log();

//-----------------------
// Customs point: ( interfaces uses Pascal convention, first with capital Letter)

interface Point {
    x: number,
    y: number
}

// example before we implemented interface:
// let drawPoint = (point {x: number, y:number}) => {
//     //...
// }

let drawPoint = (point : Point) => {
    //...
}

drawPoint({
    x:1,
    y:2
})

//-----------------------
// Cohesion : things are related should be part of one unit.
// Class > groups variables (properties ) and functions (methods) that are highly related.
// interfaces are only for declaration nor for implementation > replaced the interface with class to implement the cohesion.


//Origin example :
// interface Point {
//     x: number,
//     y: number,
//     draw: () => void
// }
//
// let drawPoint = (point : Point) => {
//     //...
// }
//
// let getDistance = (pointA : Point,pointB: Point) => {
//     //...
// }
//
// drawPoint({
//     x:1,
//     y:2
// })

// example after implementing class/cohesion
// when a function is part of a class we called it as a method
class Point2 {
    x: number;
    y: number;

    draw() {
        console.log('X:' + this.x + ', Y: ' + this.y);
    }
    getDistance(another:Point2){
        //...
    }
}

//Object
let point = new Point2();
point.x = 1;
point.y = 2;
point.draw();

//-----------------------
//Constructors:

class Point3 {
    x: number;
    y: number;

    constructor(x?:number, y?:number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X:' + this.x + ', Y: ' + this.y);
    }

}

// let point3 = new Point3(1,2);
let point3 = new Point3();
point3.draw();

//-----------------------
// Access Modifiers ( public , private, protected) to control access modifiers to a class

class Point4 {
    private x: number;
    private y: number;

    constructor(x?:number, y?:number) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('X:' + this.x + ', Y: ' + this.y);
    }
}

 let point4 = new Point4(1,2);
point4.draw();


//-----------------------
//  Access Modifiers in Constructor Parameters and set Properties:
class Point5 {
    constructor(private _x?:number, private _y?:number) {
    }
    draw() {
        console.log('X:' + this._x + ', Y: ' + this._y);
    }
    get x() {
        return this._x;
    }
    set x(value){
        if (value < 0)
            throw new Error('value cannot be less than 0.');

        this._x = value;
    }
}

let point5 = new Point5(1,2);
// let x = point5.getX();
// point5.setX(10);
let x = point5.x
point5.x = 10;
point5.draw();

//-----------------------
//Modules > create a new file point.ts

import { Point6 } from "./point";

let point6 = new Point5(1,2);
point6.draw();




