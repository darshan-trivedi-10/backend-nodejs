// If one of them in addition then and is string

console.log("Sanket" + "Singh");

/*
* Both of them are already a string
* So toprimitive conversion will also be a string
* and we concatenate them
*/
console.log(undefined + "node")
/*
* undefine -> undefine
* undefine + "node" ==> "undefinednode"
*/

console.log("5" + null);
/*
* One of them is already a string, then and id "5null"
*/
console.log([] + "apna")
console.log([1, 2, 3] + "apna")
console.log("darshan" + [undefined])
console.log("darshan" + [null])
console.log("darshan" + [undefined, null])
console.log("darshan" + [[], [], []])
