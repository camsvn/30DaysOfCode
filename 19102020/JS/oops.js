const { couldStartTrivia } = require("typescript");

console.log("\n****Class Constructor****")

class CompanyName  
{  
  constructor()  
  {  
    this.company="Google";  
  }  
}  

class Employee extends CompanyName {  
  constructor(id,name) {  
   super();  
    this.id=id;  
    this.name=name;  
  }   
}     
var emp = new Employee(1,"John");  
console.log(emp.id+" "+emp.name+" "+emp.company); 

/**
 * Static Method:
 *          static method can be used to create utility functions.
 *      we can call the static method either using the class name or as the property of the constructor.
 */
console.log("\n****Static Method****")

class Test  
{
    constructor() {  
        console.log('invoked within Constructor');   
        console.log('==========================');   
        console.log(Test.display());   
        console.log(this.constructor.display());   
    }  

    static display()  
    {  
        return "static method is invoked"  
    }  

    show() {  
        console.log('\ninvoked within non-static function');
        console.log('====================================');   
        console.log(Test.display());   
    } 
}
const t = new Test();
t.show();
console.log('\ninvoked outside class');
console.log('=======================');   
console.log(Test.display());  

/**
 * Encapsulation:
 *          Encapsulation is a process of binding the data
 * 
 *      Use var keyword to make data members private.
 *      Use setter methods to set the data and getter methods to get that data.
 */
console.log("\n****Encapsulation****")

class Student  
{  
    constructor()  
    {  
        var name;  
        var marks;
        this.age = 16;
    } 

    getName()  
    {  
        return this.name;  
    }

    setName(name)  
    {  
    this.name=name;  
    }  
    
    getMarks()  
    {  
    return this.marks;  
    }  

    setMarks(marks)  
    {  
        if(marks<0||marks>100)  
        {  
            console.log("//Invalid Marks//");  
        } else {  
            this.marks=marks;  
        }  
    }  
} 

var stud=new Student(); 
console.log(stud.name ,"- private property") 
console.log(stud.age ,"- public property") 
stud.setName("John");  
stud.setMarks(110);
console.log(stud.getName(),stud.getMarks(), stud.age);  

/**
 * Inheritance:
 *          inheritance is a mechanism that allows us to 
 *          create new classes on the basis of already existing classes.
 * 
 *      'extend' keyword is used to create a child class on the basis of a parent class. 
 */
console.log("\n****Inheritance****")
console.log("Extends Built-in Class:");

class Moment extends Date {  
    constructor(year) {  
        super(year);  
    }
}  
var m=new Moment("August 15, 1947 20:22:10");  
console.log("Year value:", m.getFullYear());

//Extends Custom Class
console.log('\n====================');
console.log("Extends custom Class:");

class Bike  
{  
  constructor()  
  {  
    this.company="Honda";  
  }  
}  
class Vehicle extends Bike {  
  constructor(name,price) {  
   super();  
    this.name=name;  
    this.price=price;  
  }   
}  
var v = new Vehicle("Shine",70000);  
console.log(v.company, v.name, v.price);

/**
 * Polymorphism:
 *      It provides an ability to call the same method on different JavaScript objects
 */
console.log("\n****Polymorphism****");

class A  
  {  
     display()  
    {  
      console.log("A is invoked");  
    }  
  }  
class B extends A  
  {  
    display()  
    {  
        console.log("B is invoked");  
    }  
  }  
  
var a=[new A(), new B()]  
a.forEach((msg) => { msg.display() });  




console.log('\r')

