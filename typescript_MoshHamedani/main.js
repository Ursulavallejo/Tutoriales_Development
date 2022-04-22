// Declaring variables
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally:' + i);
}
doSomething();
//-----------------------
// Types:
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
//-----------------------
// Type Assertions:
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var alternativeWay = message.endsWith('c');
//-----------------------
// Arrow Functions: JavaScript vs TypeScript
var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var doLog = function () { return console.log(); };
// example before we implemented interface:
// let drawPoint = (point {x: number, y:number}) => {
//     //...
// }
var drawPoint = function (point) {
    //...
};
drawPoint({
    x: 1,
    y: 2
});
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
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.prototype.draw = function () {
        console.log('X:' + this.x + ', Y: ' + this.y);
    };
    Point2.prototype.getDistance = function (another) {
        //...
    };
    return Point2;
}());
//Object
var point = new Point2();
point.x = 1;
point.y = 2;
point.draw();
//-----------------------
//Constructors:
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        console.log('X:' + this.x + ', Y: ' + this.y);
    };
    return Point3;
}());
// let point3 = new Point3(1,2);
var point3 = new Point3();
point3.draw();
//-----------------------
// Access Modifiers ( public , private, protected) to control access modifiers to a class
var Point4 = /** @class */ (function () {
    function Point4(x, y) {
        this.x = x;
        this.y = y;
    }
    Point4.prototype.draw = function () {
        console.log('X:' + this.x + ', Y: ' + this.y);
    };
    return Point4;
}());
var point4 = new Point4(1, 2);
point4.draw();
//-----------------------
//  Access Modifiers in Constructor Parameters
var Point5 = /** @class */ (function () {
    function Point5(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point5.prototype.draw = function () {
        console.log('X:' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point5.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point5;
}());
var point5 = new Point5(1, 2);
// let x = point5.getX();
// point5.setX(10);
var x = point5.x;
point5.x = 10;
point5.draw();
//-----------------------
// 41:04 Properties
// 46:22 Modules
