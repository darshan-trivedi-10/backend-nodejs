console.log('Hello Java-Script');

/*
Type of values in JS :-
--> null, undefined, boolean, string, number, symbol and object
*/

console.log(10, 10.525, -655, 0, -0); // number
console.log('i am string') // string
console.log(false) // boolean
console.log(undefined) // undefined
console.log(null) // null
console.log({ name: "darshan" }) // object --> key value pair
console.log(Symbol('hello'))  // symbole

// type of
console.log(typeof 'dbt', typeof undefined, typeof null)
console.log(typeof NaN)
console.log(typeof (typeof 12)) // String

process.stdout.write("Hello");
process.stdout.write("Darshan \n");

let x = 10;
var y = 20;
const z = 'abcd';
console.log(x, y, z)

/*
Operators :- 
--> Arithmetic operators :- (+, -, *, /, %, ++, --)
--> Comparison operators :- (==, ===, !=, >, <, >=, <=) 
--> Logical operators :- (&&, ||, !) 
--> Assignment operators :- (=, +=, -=, *=, /=, %=) 
--> Ternary operator 
--> Bitwise Operatot :- (~(not), &(and), |(or), ^(xor), >>(right-sift), <<
(left-sight))

*/

console.log(5 / 2) // 2.5
// Note if we want to have floor divisions.
// 1 way -> parseInt(5/2)
// 2 way -> Math.floor(5/2)
console.log(0 && 4)
console.log(4 && 0)
console.log(4 || 0)
console.log(0 || 4)
// 4 --> 100
// 5 --> 101

// bitwise
console.log(5 & 3);
console.log(8 | 1);
console.log(3 ^ 3);
console.log(5 << 2);
console.log(5 >> 1);
console.log("Darshan" + "Trivedi");
console.log("darshan" && 2 > 1);   // if first value is true it return second value

// if - else

// loop and switch and continue.

let exp = '*';
let a = 10, b = 3;
switch (exp) {
    case '+':
        console.log(a + b)
        break;
    case '-':
        console.log(a - b)
        break;
    case '*':
        console.log(a * b)
        break;
    case '/':
        console.log(a / b)
        break;

    default:
        console.log("Invalid Input")
        break;
}