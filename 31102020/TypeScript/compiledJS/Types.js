"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*
  All the numbers in TypeScript are stored as floating-point values.
  The numeric data type can be used to represents both integers and fractions.
  TypeScript also supports:
    - Binary(Base 2)
    - Octal(Base 8)
    - Decimal(Base 10)
    - Hexadecimal(Base 16) literals.
  Syntax:
    let identifier: number = value;
*/
console.log("\x1b[47m\x1b[30m%s\x1b[0m", "-----------STATIC types-----------"); //ANSI Escape Code Color 
var first = 12.2; //number
var second = 0xFFF; //hex
var third = 251; //octal
var fourth = 13; //binary
console.log("\n\n---------\x1b[103m\x1b[30m--Number--\x1b[0m---------");
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log("\x1b[91m-----------eof Number-----------\x1b[0m");
// STRING
console.log("\n---------\x1b[103m\x1b[30m--String--\x1b[0m---------");
var empName = "Rohan";
var empDept = "IT";
var strOutput = empName + " works in " + empDept + " department";
console.log(strOutput);
console.log("\x1b[91m-----------eof String-----------\x1b[0m");
//BOOLEAN
console.log("\n---------\x1b[103m\x1b[30m--Boolean--\x1b[0m---------");
var isDone = false;
console.log(isDone);
console.log("\x1b[91m-----------eof Boolean-----------\x1b[0m");
//VOID : can ony assign undefied or null to void type
console.log("\n---------\x1b[103m\x1b[30m--Void--\x1b[0m---------");
function helloUser() {
    console.log("Greetings User!");
}
helloUser();
console.log("\x1b[91m-----------eof Void-----------\x1b[0m");
//ANY type : t allows us to opt-in and opt-out of type-checking during compilation
console.log("\n---------\x1b[103m\x1b[30m--Any type--\x1b[0m---------");
function ProcessData(x, y) {
    return x + y;
}
var result;
result = ProcessData("Hello ", "Any!");
console.log(result, "of type", typeof result);
result = ProcessData(2, 3);
console.log(result, "of type", typeof result);
console.log("\x1b[91m-----------eof Any type-----------\x1b[0m\n\n");
/*
    Userdefined Types:
        - Array
        - Touple
        - Enum
        - Functions
        - Class
        - Interface
*/
console.log("\x1b[47m\x1b[30m%s\x1b[0m", "-----------USERDEFINED types-----------"); //ANSI Escape Code Color | '%s string substitutin and formatting
/*
    Array : Collection of elements of same type
    Syntax:
        var list : number[] = [1, 3, 5];
        var list : Array<number> = [1, 3, 5];
*/
console.log("\n\n---------\x1b[103m\x1b[30m--ARRAY--\x1b[0m---------");
var list = [1, 3, 5];
var fruits = ["Apple", "Orange", "Banana"];
console.log(list, fruits);
console.log('---------');
//Union Array
var mixed = ['Apple', 1, 'Orange', 3, 'Banana', 5];
console.log(mixed);
console.log("\x1b[91m-----------eof ARRAY-----------\x1b[0m");
/*
    TOUPLES :  includes two sets of values of different data types
    Syntax:
        let a: [string, number];
*/
console.log("\n---------\x1b[103m\x1b[30m--TOUPLE--\x1b[0m---------");
var tuple;
tuple = ["One", 1];
console.log(tuple);
console.log("\x1b[91m-----------eof TOUPLE-----------\x1b[0m");
/*
    INTERFACES: It defines the syntax for classes to follow.  It cannot be instantiated but can be referenced by the class which implements it.
    aka: "duck typing" or "structural subtyping."
    PS: interface does not have any implementation inside it.
*/
console.log("\n---------\x1b[103m\x1b[30m--INTERFACE--\x1b[0m---------");
var CalculatorOperation = {
    subtract: function (a, b) {
        return a - b;
    },
    add: function (a, b) {
        return a + b;
    }
};
console.log(CalculatorOperation.add("Amal", "Salvin"));
console.log(CalculatorOperation.subtract(13, 5));
console.log("\x1b[91m-----------eof INTERFACE-----------\x1b[0m");
/*
    CLASS: used to create reusable components and acts as a template for creating objects. It store variables and functions to perform operations.
*/
console.log("\n---------\x1b[103m\x1b[30m--CLASS--\x1b[0m---------");
var Student = /** @class */ (function () {
    function Student(_rollNo, _name) {
        this.rollNo = _rollNo;
        this.Name = _name;
    }
    Student.prototype.showDetails = function () {
        console.log(this.rollNo);
        console.log(this.Name);
    };
    return Student;
}());
var Amal;
Amal = new Student(12, "Amal Salvin");
Amal.showDetails();
console.log("\x1b[91m-----------eof CLASS-----------\x1b[0m");
/*
    ENUMS: define a set of named constant.
    PS:  By default, enums begin numbering their elements starting from 0
         but we can also change this by manually setting the value to one of its elements
*/
console.log("\n---------\x1b[103m\x1b[30m--ENUMS--\x1b[0m---------");
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c;
c = Color.Red;
console.log(c);
console.log("\x1b[91m-----------eof ENUMS-----------\x1b[0m");
/*
    FUNCTION
*/
console.log("\n---------\x1b[103m\x1b[30m--FUNCTIONS--\x1b[0m---------");
//Named Function
function add(a, b) {
    return a + b;
}
//Anonymous Function  
var sum = function (a, b) {
    return a + b;
};
//Arrow Function
var sumArrow;
sumArrow = function (a, b) {
    return a + b;
};
console.log("Named Function:", add(3, 5));
console.log("Anonymous Functions:", sum(2, 3));
console.log("Arrow Functions:", sumArrow(8, 3));
console.log("\x1b[91m-----------eof FUNCTIONS-----------\x1b[0m");
/*
    GENERICS: create a component which can work with a variety of data type rather than a single one.
    PS :
        <T> that denotes types
        Type Assertion <> Ankle Brackets
        allows a way to create reusable components.
*/
console.log("\n---------\x1b[103m\x1b[30m--GENERICS--\x1b[0m---------");
//Generics in annonymous fuctions
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    function format() {
        return uid;
    }
    return __assign(__assign({}, obj), { uid: uid, format: format });
};
var docOne = addUID({ name: 'Amal', age: 23 });
console.log(docOne.format(), '\n---------');
//Generics in named fuctions
function identity(arg) {
    return arg;
}
var output1 = identity("myString");
var output2 = identity(100);
console.log(output1, output2);
console.log('---------');
var docTwo = {
    uid: 1,
    resourseName: 'person',
    data: { name: 'Amal' }
};
var docThree = {
    uid: 2,
    resourseName: 'shoppingList',
    data: ['bread', 'butter', 'Milk']
};
// console.log(docTwo,'\n', docThree);
console.table(docTwo);
console.table(docThree);
console.log("\x1b[91m-----------eof GENERICS-----------\x1b[0m");
