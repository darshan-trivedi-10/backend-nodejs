let x = { a: "12", valueOf(){
    return 2;
} };

console.log(x + 12);
console.log(x - 12);

let obj = {
    a: "10",
    valueOf() {
        return {};
    },
    toString() {
        return {};
    }
}

console.log(obj + 10)