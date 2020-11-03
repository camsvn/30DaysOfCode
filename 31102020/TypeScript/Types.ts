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
console.log("\x1b[47m\x1b[30m%s\x1b[0m","-----------STATIC types-----------"); //ANSI Escape Code Color 
let first: number = 12.2; //number
let second: number = 0xFFF; //hex
let third: number = 0o373; //octal
let fourth: number = 0b1101; //binary
console.log("\n\n---------\x1b[103m\x1b[30m--Number--\x1b[0m---------")
console.log(first)
console.log(second)
console.log(third)
console.log(fourth)
console.log("\x1b[91m-----------eof Number-----------\x1b[0m")

// STRING
console.log("\n---------\x1b[103m\x1b[30m--String--\x1b[0m---------")
let empName: string = "Rohan";   
let empDept: string = "IT"; 
let strOutput: string = `${empName} works in ${empDept} department`
console.log(strOutput);
console.log("\x1b[91m-----------eof String-----------\x1b[0m")

//BOOLEAN
console.log("\n---------\x1b[103m\x1b[30m--Boolean--\x1b[0m---------")
let isDone: boolean = false;
console.log(isDone);  
console.log("\x1b[91m-----------eof Boolean-----------\x1b[0m")

//VOID : can ony assign undefied or null to void type
console.log("\n---------\x1b[103m\x1b[30m--Void--\x1b[0m---------")
function helloUser(): void {
    console.log("Greetings User!")
}
helloUser();
console.log("\x1b[91m-----------eof Void-----------\x1b[0m")

//ANY type : t allows us to opt-in and opt-out of type-checking during compilation
console.log("\n---------\x1b[103m\x1b[30m--Any type--\x1b[0m---------")
function ProcessData(x: any, y: any):any {  
    return x + y;  
}  
let result: any;  
result = ProcessData("Hello ", "Any!"); 
console.log(result,"of type",typeof result)
result = ProcessData(2, 3); 
console.log(result,"of type",typeof result)
console.log("\x1b[91m-----------eof Any type-----------\x1b[0m\n\n")


/*
    Userdefined Types:
        - Array
        - Touple
        - Enum
        - Functions
        - Class
        - Interface
*/
console.log("\x1b[47m\x1b[30m%s\x1b[0m","-----------USERDEFINED types-----------"); //ANSI Escape Code Color | '%s string substitutin and formatting

/*
    Array : Collection of elements of same type
    Syntax:
        var list : number[] = [1, 3, 5];  
        var list : Array<number> = [1, 3, 5];
*/
console.log("\n\n---------\x1b[103m\x1b[30m--ARRAY--\x1b[0m---------")
var list : Array<number> = [1, 3, 5];
var fruits : string[] = ["Apple", "Orange", "Banana"];

console.log(list, fruits);

console.log('---------')
//Union Array
var mixed : Array<(string|number)> = ['Apple',1,'Orange',3,'Banana',5]
console.log(mixed);

console.log("\x1b[91m-----------eof ARRAY-----------\x1b[0m")


/*
    TOUPLES :  includes two sets of values of different data types
    Syntax:
        let a: [string, number];
*/
console.log("\n---------\x1b[103m\x1b[30m--TOUPLE--\x1b[0m---------")
let tuple : [string,number];
tuple = ["One",1];

console.log(tuple)
console.log("\x1b[91m-----------eof TOUPLE-----------\x1b[0m")

/*
    INTERFACES: It defines the syntax for classes to follow.  It cannot be instantiated but can be referenced by the class which implements it.
    aka: "duck typing" or "structural subtyping."
    PS: interface does not have any implementation inside it.
*/
console.log("\n---------\x1b[103m\x1b[30m--INTERFACE--\x1b[0m---------")
interface ops {
    subtract(a:number, b :number) : number;
    add(a:any, b :any) : any;
}

let CalculatorOperation : ops =  {
    subtract(a,b) {
        return a-b
    },
    add(a,b){
        return a+b
    }
}

console.log(CalculatorOperation.add("Amal","Salvin"))
console.log(CalculatorOperation.subtract(13,5))
console.log("\x1b[91m-----------eof INTERFACE-----------\x1b[0m")

/*
    CLASS: used to create reusable components and acts as a template for creating objects. It store variables and functions to perform operations.
*/
console.log("\n---------\x1b[103m\x1b[30m--CLASS--\x1b[0m---------")
class Student{
    rollNo : number;
    Name : string;
    constructor(_rollNo: number, _name: string){
        this.rollNo = _rollNo;
        this.Name = _name;
    }

    showDetails() {
        console.log(this.rollNo);
        console.log(this.Name);        
    }
}

let Amal: Student
Amal = new Student(12,"Amal Salvin")
Amal.showDetails();

console.log("\x1b[91m-----------eof CLASS-----------\x1b[0m")

/*
    ENUMS: define a set of named constant.
    PS:  By default, enums begin numbering their elements starting from 0
         but we can also change this by manually setting the value to one of its elements
*/
console.log("\n---------\x1b[103m\x1b[30m--ENUMS--\x1b[0m---------")
enum Color {
    Red, Green, Blue
}

let c : Color;
c = Color.Red;
console.log(c)
console.log("\x1b[91m-----------eof ENUMS-----------\x1b[0m")


/*
    FUNCTION
*/
console.log("\n---------\x1b[103m\x1b[30m--FUNCTIONS--\x1b[0m---------")
//Named Function
function add(a: number, b: number): number {  
    return a + b;  
}  

//Anonymous Function  
let sum = function (a: number, b: number): number {  
    return a + b;  
};  

//Arrow Function
let sumArrow : (a: number, b:number) => number ;
sumArrow = (a,b) => {
    return a + b
}

console.log("Named Function:",add(3,5));
console.log("Anonymous Functions:",sum(2,3));
console.log("Arrow Functions:",sumArrow(8,3));

console.log("\x1b[91m-----------eof FUNCTIONS-----------\x1b[0m")

/*
    GENERICS: create a component which can work with a variety of data type rather than a single one.
    PS :
        <T> that denotes types
        Type Assertion <> Ankle Brackets
        allows a way to create reusable components.
*/
console.log("\n---------\x1b[103m\x1b[30m--GENERICS--\x1b[0m---------")
//Generics in annonymous fuctions
const addUID = function<T extends {name: string}>(obj: T) {   
    let uid = Math.floor(Math.random()*100);
    function format () {
        return uid;
    }
    return  {...obj, uid, format}
}

let docOne = addUID({name:'Amal',age:23})

console.log(docOne.format(),'\n---------')
//Generics in named fuctions
function identity<T>(arg: T): T {  
    return arg;  
}  
let output1 = identity<string>("myString");  
let output2 = identity<number>( 100 );

console.log(output1, output2)

console.log('---------')
//Generics in interfaces
interface Resource<T>{
    uid : number;
    resourseName : string;
    data : T;
}

let docTwo : Resource <object> = {
    uid: 1,
    resourseName : 'person',
    data : {name: 'Amal'}
};

let docThree : Resource <string[]> = {
    uid: 2,
    resourseName : 'shoppingList',
    data : ['bread','butter','Milk']
};

// console.log(docTwo,'\n', docThree);
console.table(docTwo)
console.table(docThree)
console.log("\x1b[91m-----------eof GENERICS-----------\x1b[0m")





