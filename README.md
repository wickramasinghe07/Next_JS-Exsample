Next.js
Getting Started, Building my Application, API Reference

    01.Routing
    02.API routes
    03.Rendering
    04.Data fetching
    05.Styling
    06.Optimization
    07.Dev and prod build System

Installing dependencies

    react
    react-dom
    next

Installing devDependencies

    - typescript
    - @types/node
    - @types/react
    - @types/react-dom
    - autoprefixer
    - postcss
    - tailwindcss
    - eslint
    - eslint-config-next

Automatic Installation

    01. npx create-next-app@latest
    02. What is your project named? ######
    
        Would you like to use TypeScript? No / Yes
        Would you like to use ESLint? No / Yes
        Would you like to use Tailwind CSS? No / Yes
        Would you like to use `src/` directory? No / Yes
        Would you like to use App Router? (recommended) No / Yes
        Would you like to customize the default import alias (@/*)? No / Yes
        What import alias would you like configured? @/*
        
    03.cd ####
    
Run the Development Server

    01.Run "npm run dev" to start the development server.
    02.Visit http://localhost:3000 to view application (alt + Click).
    03.Edit app/page.tsx (or pages/index.tsx) file and save it to see the updated result in  browser.

React Server Components contd

    Server Components
    Client Components

Routing 

    npx create-next-app@latest routing-demo

    -Nested Routes
    -Dynamic Routes
    -Nested and Dynamic Routes


Material UI, 

the world's most popular React UI framework.

    Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.

Install Material UI, the world's most popular React UI framework.

     npm install @mui/material @emotion/react @emotion/styled 


Exsample 

    01.Home Page
![WhatsApp Image 2024-04-29 at 11 45 30_9375721f](https://github.com/wickramasinghe07/Next_JS-Tute/assets/102098023/2843854d-ac6b-4497-b6e5-bf470b9459e7)

    02.HotelHomePage

![HotelHomePage](https://github.com/wickramasinghe07/Next_JS-Tute/assets/102098023/aebab165-40ec-4ed7-a69b-b27218563775)

        Background Image
![HotelHomePage2](https://github.com/wickramasinghe07/Next_JS-Tute/assets/102098023/f9d61163-9f75-4d6f-8475-61a7b0f340cd)



TypeScript Interview Questions and Answers

1.
Explain the data types available in TypeScript.
There are mainly two types of data types available in TypeScript:
Built-in data types: These data types already exist in typescript. They can be directly used to define the variables with different values.
•
String: It represents a text value like “GeeksforGeeks”, or “Computer Science”.
•
Number: It represents the numbered values i.e. 2, 28, 99, etc.
•
Boolean: It stores true or false values.
•
Null: An empty value deliberately assigned to a variable.
•
Undefined: Represents a variable that is declared but not initialized.
•
any: Represents any value of any data type and any number of values of different data types.
•
void: Used to represent that a particular function is not going to return any value of any data type.
User-defined data types: These are the data types that are defined by the user they may contain multiple values of multiple data types.
•
arrays: In typescript, arrays are used to store the multiple values of any kind of data type.
•
enums: A special class that specifies the constant variables.
•
classes: Used to store different data type values in the form of key-value pairs.
•
Interface: These represent the basic syntax and blueprint that an entity must adhere to.
2.
Explain the behavior of arrays in TypeScript.
The arrays defined in typescript are different from JavaScript and they also behave differently from JavaScript arrays. In typescript, the arrays are defined by specifying the static data types and can only store the multiple values of a single kind of data type.
Example:
const typedArray1:number[] = [1, 23, 28, 56]; console.log(typedArray1); // 1, 23, 28, 56
const typedArray2:number[] = [1, 23, 28, 56, "GeeksforGeeks"]; console.log(typedArray2);
// Throws an error: Type 'string' is not assignable to type 'number'.
3.
In how many ways we can declare variables in TypeScript?
In TypeScript, there are three ways in which we can declare variables:
•
Using the var keyword: It is the oldest way of declaring varibles.
var name: string = "GeeksforGeeks";
•
Using the let keyword: It was introduced in ES6 or ECMAScript 2015. It is a secure way of declaring variables than using var, as it has block scope.
let name: string = "GeeksforGeeks";
•
Using the const keyword: It was also introduced in ES6. It is used to declare the constant variable whose values will not change throughout the code execution.
const name: string = "GeeksforGeeks"
4.
How you can declare a explicit variables in Typescript?
In typeScript, you can declare static variables using the colons (:) followed by the data type of the explicit type. You can not assign a value of some other data type to a static variable. The values of the same data type can be assigned. Syntax:
let variable_name: data-type = value; Example:
let company_name: string = "GeeksforGeeks"; company_name = "Cricket";
console.log(company_name); // Prints Cricket
company_name = 28; console.log(company_name);
// Throws an error: Type '28' is not assignable to type 'string'.
5. How to declare a function with typed annotation in TypeScript?
In TypeScript, you can declare the functions by defining the type of parameters the take and the type of parameter it will return after the execution.
Example:
function annotedFunc(myName: string, age: number): string{ return `My name is ${myName} and my age is ${age}.`;
}
console.log(annotedFunc("Emrit", 22));
// Prints: My name is Emrit and my age is 22. console.log(annotedFunc("Neha", "18"));
// Above statement throws an error:
// Argument of type '"18"' is not assignable to parameter of type 'number'.
6. Describe the any type in TypeScript.
The any data type will allow you to assign the value of any data type to a variable. Sometimes, when the data is coming from other resouces like API call or user entered data. In that case, you may not aware of the type of the data so you can use the any data type to assign the value of any kind to a variable. Example:
let studentData: string = `{ "studentName": "Aakash",
"studentID": 12345,
"studentCourse": "B. Tech"
}`;
let student: any = JSON.parse(studentData);
console.log(student.studentName, student.studentID, student.studentCourse); // Prints: Aakash 12345 B. Tech
7.
What are the advantages of using TypeScript?
There are a lot of advantages of using TypeScript, some of them are listed below:
•
The TypeScript code can compile down to the JavaScript code that is runnable on every browser.
•
It allow us to declare strongly or statically typed variables.
•
It consist of advanced features like code completion, intelliSense etc.
•
It supports namespace concept with the help of modules.
•
TypeScript throw errors at the compilation time during development unlike of JavaScript that shows errors at the runtime.
8.
List some disadvantages of using TypeScript.
There also exist some disadvantages of using TypeScript as listed below:
•
The concept of abstract classes is not supported by TypeScript.
•
Code Compilation is a time taking process in TypeScript.
•
A extra step of converting the TypeScript code into JavaScript code requires while running TypeScript.
•
A definition file needs to be added for using any external or third party library. All the external libraries not have the definition file.
•
The quality of all the definition files need to be correct.
9.
Explain the void type in TypeScript.
It is just opposite of any type. The void type represents the unavailability of the data type for any variable. It is mainly used with the functions that returns nothing. The variables defined using the void keyword can only be assigned with the null and undefined values.
Example:
function favGame(): void{
console.log("My Favourite game is Cricket.");
}
favGame();
// Prints: My Favourite game is Cricket.
10.
What is type null and its use in TypeScript?
The null keyword is considered as a data type in TypeScript as well as in JavaScript. The null keyword basically indicates the unavailability of a value. It can be used to check whether a value is provided to a particular variable or not.
Example:
function getData(orgName: string | null, orgDesc: string | null): void { if (orgName === null || orgDesc === null) {
console.log("Not enough values provided to print.");
}
else {
console.log(`Organization Name: ${orgName},
\nOrganization Description: ${orgDesc}`);
}
}
getData(null, null); getData("GeeksforGeeks", "A Computer Science Portal."); Output:
Not enough values provided to print.
Organization Name: GeeksforGeeks,
Organization Description: A Computer Science Portal.
11. Describe the syntax for creating objects in TypeScript.
A object is basically a collection of key-value pairs, where each key needs to be unique. In TypeScript, the objects can be created by declaring the property name and the type it is going to store.
Example:
const myObj: { name: string, desc: string } = { name: "GeeksforGeeks",
desc: "A Computer Science Portal"
};
console.log(myObj);
// Prints: { name: 'GeeksforGeeks', desc: 'A Computer Science Portal' }
12. Can we specify the optional properties to TypeScript Object, if Yes, explain How?
Yes, we can declare the TypeScript Objects by specifying the optional properties that may or may not be defined inside the object. We can declare these peoperties by using a ? symbol just after the property name while creeating the object.
Example:
const myObj: { name: string, desc: string, est?: number } = { name: "GeeksforGeeks",
desc: "A Computer Science Portal",
};
console.log(myObj);
// Prints: { name: 'GeeksforGeeks', desc: 'A Computer Science Portal' } myObj.est = 2008; console.log(myObj);
// Prints: { name: 'GeeksforGeeks', desc: 'A Computer Science Portal' , est: 2008}
13.
Explain the undefined type in TypeScript.
The concept undefined in TypeScript is similar to the concept of undefined in JavaScript. The undefined is used to indicate a variable which is declared but not assigned a value and it’s either hoisted or in temporal dead zone. The memory to these kind of variables is allocated in the memory allocation phase and a undefined value assigned to them untill a value is assigned by the developer or programmer.
14.
What is never type and its uses in TypeScript?
A never type in typescript is indicate the values that may never be occured. It is mainly used with the function that return nothing and always thrown an exception or error. A never type is different from void type. Because, a function that returns nothing implicitly returns undefined and these functions are inferred using the void keyword. But a function that declared using the never keyword will never return a undefined it only returns never type. The never type can be used with following cases:
•
With an infinite loop.
•
In a function that throws exceptions or errors.
Example:
function neverFunc(): never{
// Function Statements
}
15. Explain the working of enums in TypeScript?
An enum in typescript is used to create a collection of constants. It is basically a class that allow us to create multiple constants of numeric as well as string type. By default, the value of numeric constant starts from 0 and increases accordingly for every constant by a margin of 1. You can also change the initialisation value from 0 to any other value of your choice. It is declared using the enum keyword followed by the name of enum and constants.
Example:
enum demoEnum{
milk = 1, curd,
butter, cheese
}
let btr: demoEnum = demoEnum.butter;
console.log(btr) // Prints: 3
16.
Is TypeScript strictly statically typed language?
No, TypeScript is not a strictly statically typed language it is an optional statically typed language that means it is in our hands that a particular variable has to be statically typed or not. We can use the any type and allow a variable to accept the value of any kind of data type. We can also define a variabe with a particular data type that a variable can accept and throws error if a value of some other data type is assigned to it.
17.
Is template literal supported by TypeScript?
Yes, template literal is supported by TypeScript. We can interpolate a string using the template literals syntax (“) in TypeScript. The values of different variables can be shown inside a string using ${variable_name} syntax while interpolating strig using template literals.
18.
Differentiate between the .ts and .tsx file extensions given to the TyppeScript file.
The .ts file extension is used to create a file that contains the pure TypeScript code inside it. These files are mainly created to implement the classes, functions, reducers and other pure typescript code. These files does not contain any JSX code. On the other hand, the .tsx file extensions are used to create the files that contains the JSX code inside it. These files are mainly used to build a react component that returns the JSX code at the end. 19. Explain typeof operator in TypeScript and where to use it.
The typeof operator is used to check or get the type of a particular variable. It can also be used to set the similar explicit type to another variables.
Example:
const strVar: string = "GeeksforGeeks"; const numVar: number = 28;
console.log(typeof strVar, typeof numVar); //Prints: string number
const numVar2: typeof numVar = 25; const strVar2: typeof strVar = "Cricket"; console.log(typeof strVar2, typeof numVar2); //Prints: string number
20.
Explain the parameter destructuring in TypeScript.
The parameter destructuring is nothing more than the unpacking of the provided or passed object properties individually into the one or more parameters when the object is passed to an function. It can be done as shown below:
function getOrganisation({ org_name, org_desc }: { org_name: string, org_desc: string }) { console.log(`Organization Name: ${org_name}, \nOrganization Description: ${org_desc}`);
}
getOrganisation({ org_name: "GeeksforGeeks", org_desc: "A Computer Science Portal." });
// Prints:
// Organization Name: GeeksforGeeks,
// Organization Description: A Computer Science Portal.
21.
What are interfaces in TypeScript?
A interface in TypeScript is used to define a syntax that must be followed by the entity of that interface. An Interface defines the properties, methods and the events and considered as the members of the interface. The interfaces only contain the declarations of the members. The initialisation or the assignment will be done by the class that is deriving the interface. Interfaces are defined using the interface keyword.
Example:
interface interface_name{
// Define the members like methods properties and events etc.
}
22.
In what situation you should use a class and a interface?
We can use the classes and interfaces to define our own custom data types. There are different use cases and situations where we can use the interfaces and classes.
An interface can be used in a situation where the shape, structure and the contact will be defined for indicating how a object or class will look like without their implementation. It can also be used to enforce some properties and methods to a class and object.
On the other hand, a class can be used where we need to enclose the data to hide it from outer code and prevent the direct acces of this data. It can be used to implement the Object Oriented Programmin concepts.
23.
What are the differences between the classes and the interfaces in TypeScript?
A class is defined using the class keyword. The classes can contain the methods, properties and variables. Methods of a class are defined when the class is implemented. A class instance will allow us to access the properties and methods defined inside the class.
Interfaces are defined using the interface keyword. It contains only the declarations of the properties and methods which are implemented by the derived class.
24.
How you can compile a TypeScript file?
The TypeScript code is not executed directly. It requires to convert the TypeScript code into JavaScript. You can use tsc <file_name> command to execute the TypeScript code and convert it into JavaScript. tsc script.ts
25.
How to combine multiple TypeScript files and convert them into single JavaScript file?
There is a command named –outfile that is follwed by the JavaScript filename and the multiple TypeScript files. If the JavaScript file name is not provided then all the TypeScript files are combined in the first TypeScript file specified in the format.
tsc --outfile combined.js script1.ts script2.ts script3.ts
26.
How to compile a TypeScript file at real time while updating the file?
The command –watch can be used to compile a typescript file which is continuosly updating. This file can be compiled at the real time.
tsc --watch realTime.ts
27.
Is it possible to call the constructor function of the base class using the child class?
Yes, the base class constructor can be called using the super() method inside the constructor function of the child class with the required parmeters if the base class constructor function takes parameters.
28.
How to declare a class in TypeScript?
The syntax for declaring the classes in TypeScript is almost same as in JavaScript. In TypeScript, you can also use the typed declarations for the variables and methods of the class.
Example:
class Cricketer{ name: string;
runs: number;
constructor(name: string, runs: number){
this.name = name; this.runs = runs;
}
thisMatchRund(): number{ this.runs += 139;
return this.runs;
} }
29.
How to declare a arrow function in TypeScript?
In TypeScript, we can declare the arrow functions in the same format as we declare in vanilla JavaScript. TypeScript allow us to use the typed declaration with by specifying the type of parameters and the type of return value as well.
Example:
const typedArrowFunc = (org_name: string, desc: string): string => { let company: string = `Organization: ${org_name}, Description: ${desc}`; return company;
}
console.log(typedArrowFunc("GeeksforGeeks", "A Computer Science Portal")); // Prints: Organization: GeeksforGeeks, Description: A Computer Science Portal
30.
How to define a function which accepts the optional parameters?
You can define a function with optinal parameters by using a ? symbol in the declaration of the function for the parameter which you want to make the optional as shown below:
Example:
function cricketer(c_name: string, runs?: number): void{ if(!runs){
console.log(`Cricketer Name: ${c_name}, Runs Scored: Not Available`);
}
else{
console.log(`Cricketer Name: ${c_name}, Runs Scored: ${runs}`);
}
}
cricketer("Virat Kohli", 26000); cricketer("Yuzvender Chahal");
// Prints:
// Cricketer Name: Virat Kohli, Runs Scored: 26000
// Cricketer Name: Yuzvender Chahal, Runs Scored: Not Available
31.
How the inheritance can be used in TypeScript?
Inheritance is one of the main four pillars of Object Oriented Programming. It allows a class to inherit or acquire the properties and methods of other class and implement them with the instance created using the inherited class. The inheritance can be implemented using the extends keyword after the child class name followed by the parent class name.
class Child extends Parent{
// Properties of child class
}
32.
What are modules in TypeScript?
Modules are used to create a collection of multiple data types that may include the classes, functions, interfaces and variables. The modules have their own scope. The members defined inside modules can not be accessed directly by the other code. Modules are imported using the import statement and defined using the export keyword to export it.
Example:
module multiply{
export function product(a: number, b: number): number{ return a*b
} }
33.
In how many ways you can classify Modules?
There are two types of Modules available in TypeScript:
•
Internal Modules: These modules are used to specify the collection of classes, interfaces, functions and variables that can be exported to other modules as a single unit.
•
External Modules: These are the separate TypeScript files that include more code and consist of at least one export or import statement in it.
34.
What is the use of tsconfig.json file in TypeScript?
This file helps to compile the project by providing the compiler options. It also makes the working directory as the root directory of the project.
35.
What are Decorators in TypeScript?
In TypeScript, decorator is a syntax that can be used to define the function, classes, properties etc. to modify their behaviour and add some metadata to them. These are basically the higher order function that takes target element as argument and returns the modified version of it with the help of some function.
36.
What are the different ways for controlling the visibility of member data?
TypeScript provide us with the three ways to control the visibility of members like methods and properties in classes.
•
Private: The private members can be accessed only inside the class. They can not be accessed by the outer code.
•
Public: It is the default visibilty of the members. These members can be access from any where in the code by defining the class instance.
•
Protected: These members can only be accessed by the classes that are inherited using the members class. No other code that does not inherit the class can access these members.
37.
How to debug a TypeScript file?
A TypeScript file can be debugged using the –sourcemap command that is followed by the file name. It will create a new file with the fileName.ts.map name.
tsc --sourcemap script.ts
38.
How to convert a .ts file into TypeScript Definition file?
You can change a .ts file into the definition file with the help of TypeScript compiler by using the – declaration command followed by the name od the .ts file. The definition file will make the TypeScript file reuseable. tsc --declaration script.ts
39.
Is it possible to create the static classes in TypeScript?
No, TypeScript does not supports the static classes. Because, in typescript does not require the static classes as you can simply create any function or data as a object without creating a containing class.
40.
Describe anonymous functions and their uses in TypeScript?
The anonymous functions are the functions that are declared without a name. These functions are mainly used to pass to another function as a call back function like while attaching an event and calling the setTimeout() method etc.
Example:
myBtn.addEventListener('click', function () {
// Add click functionality
});
41.
Explain the union types in TypeScript?
The union types in TypeScript represents that the value of a variable can be one of the specified types. The union type uses a straight vertical bar(|) to show the options for the variable types.
Example:
let unionVar: number | boolean = true; console.log(unionVar); // true
unionVar = 56; console.log(unionVar); // 56
42.
Explain type alias in TypeScript?
A type alias in TypeScript is used to give a new and the meaning fule name for a combined or new type. The type alias will not create a new type instead it create new names for the type it refers to.
type combinedType = number | boolean
43.
Is it possible to create the immutable Object properties in TypeScript?
Yes, you can use the readonly property before the properties names while defining the objects. It makes the properties of object to be initialized at the time of declaring the object. If you try to update the value of any immutable property it will not allow you to do it as it is a readonly property.
44.
What is “in” operator and why it is used in TypeScript?
The in opertaor is used to check whether a property is present in the testing object or not. It will return true, if it finds the property in the object. Otherwise, it will return false.
45.
Expalin conditional typing in TypeScript?
In TypeScript, we can use the ternary operator(condition? true:false) to assign the dynamic types to an property. It will assign a type dynamically based on the condition defined in the ternary operator.
46.
Explain noImplicitAny in TypeScript.
The noImplicitAny is a compiler option that we can add to the tsconfig.json file and make the TypeScript compiler to throw an error if a function or method for a particular type is invoked on a parameter of any type. Generally, TypeScript expect a explicit type to be associated with the parameters, but somethimes we don’t need to specify the explicit type. In that case, TypeScript assigns a explicit type as any type to that parameter and allows to perform operations. But we can force the compiler to throw an error if a explicit type is not defined for a parameter.
47.
Explain type inference in TypeScript.
The type inference refers to the automatically assigning the explicit types to the variable which does not declared using the expicit type. Generally, it is done at the time when the variables are declared and initialized at the same time with a value of some data type.
48.
Which principles of Object Oriented Programming are supported by TypeScript?
TypeScript supports all the four principles of Object Oriented Programming as:
•
Abstraction
•
Encapsulation • Inheritance
•
Polymorphism
49.
In how many ways you can use the for loop in TypeScript?
There are mainly three ways in which you can use the for loop in TypeScript as listed below:
•
Using the simple for loop: It is the simple for loop used to iterate through any number of variables by defining and using a variable.
for(let i=0; i<n; i++){ // code statement}
•
Using the for-of loop: It can be used to iterate through the array elements without defining the iterator variable.
for(let item of myArr){ // code statement}
•
Using the forEach() method: It is a method that takes a callback function and operate the functionality to each item of the array.
myArr.forEach(() => { // code statement})
50.
Explain Mixins in TypeScript
The mixins are used to create the classes from the reuseable components. They can be built using the different partial classes. In simple language, we can say that instead of a class extends another class, a function can take a class and then return the class as a result. The function that takes the class and returns a class is known as mixin.
Frequently Asked Questions (FAQs) on TypeScript Interview Questions (2024)
1.
Is TypeScript similar to JavaScript?
Yes, TypeScript is a superset of JavaScript, which means any valid JavaScript code is also valid TypeScript code. However, TypeScript adds optional static typing and additional features on top of JavaScript.
2.
Do I need to learn TypeScript if I already know JavaScript?
While you can certainly continue developing with just JavaScript, learning TypeScript offers several benefits, especially for larger projects or teams. It helps catch errors early, improves code maintainability, and enhances developer productivity.
3.
Are TypeScript’s types mandatory?
No, TypeScript’s type annotations are optional. You can choose to gradually add types to your codebase as needed. However, leveraging TypeScript’s type system can significantly enhance code quality and developer experience.
4.
Can I use existing JavaScript libraries with TypeScript?
Yes, you can use existing JavaScript libraries and frameworks seamlessly with TypeScript. TypeScript provides type definitions (.d.ts files) for many popular libraries, and you can also write your own type definitions if needed.
5.
Is TypeScript suitable for all types of projects?
TypeScript is particularly beneficial for large-scale projects where code maintenance, scalability, and collaboration are crucial. However, it can be used effectively in projects of all sizes, from small personal projects to enterprise-level applications


    
        
      



