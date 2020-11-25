class Employee  
{  
//Initializing an object  
    constructor(id,name)  
    {  
        this.id=id;  
        this.name=name;  
    }  
//Declaring method  
    detail()  
    {  
        console.log(this.id+" "+this.name)  
    }  
}  

//passing object to a variable   
var e1=new Employee(101,"Martin Roy");  
var e2=new Employee(102,"Duke William");  
e1.detail(); //calling method  
e2.detail();  

/**
 *  Class Expression: the class expression allows us to re-declare the same class.
 */

console.log("\n****Class Expression****")

var emp=class   
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
//Declaring method      
detail()  
    {  
  console.log(this.id+" "+this.name)  
    }  
  }  
//passing object to a variable   
var e3=new emp(101,"Martin Roy");  
var e4=new emp(102,"Duke William");  
e3.detail(); //calling method  
e4.detail();  
console.log("----------------------")
  
//Re-declaring class  
var emp=class   
  {  
//Initializing an object  
    constructor(id,name,dpt)  
    {  
      this.id=id;  
      this.name=name;  
      this.dpt=dpt;  
    }  
    detail()  
    {  
  console.log(`${this.id} ${this.name} ${this.dpt}`)  
    }  
  }  
//passing object to a variable   
var e3=new emp(103,"James Bella","CSE");  
var e4=new emp(104,"Nick Johnson", "ISE");  
e3.detail(); //calling method  
e4.detail();  

/**
 * Object Constructor:
 *          'this' keyword refers to the current object.
 */
console.log("\n****Object Constructor****")

function empOC(id,name,salary){  
    this.id = id;  
    this.name = name;  
    this.salary = salary;  
    this.changeSalary = function changeSalary( otherSalary ) { this.salary=otherSalary };    
}  
e = new empOC(105,"Vimal Jaiswal",30000);  
e.changeSalary(50000);
console.log(e.id+" "+e.name+" "+e.salary);  

/**
 * Prototype Object:
 *            whenever a function is created the prototype property is added to that function automatically.
 *            In a prototype-based approach, all the objects share the same function
 *            thus, a new copy of the function is created on each object creation.
 */

console.log("\n****Prototype****")


function Student(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Student.prototype.fullName=function()  
{  
  return this.firstName+" "+this.lastName;  
}

Student.prototype.skill = 'JavaScript'
  
var stu1=new Student("Martin","Roy");  
var stu2=new Student("Duke", "William");
stu2.skill = 'Typescript'
  
console.log(`${stu1.fullName()} - ${stu1.skill}`);  
console.log(`${stu2.fullName()} - ${stu2.skill}`);






console.log("\r")
