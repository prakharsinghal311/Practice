// let multiply = function (x, y) {
//     console.log(x * y);
// }

let multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

// let multiplyByTwo = multiply.bind(this, 2)
// multiplyByTwo(3);

// let multiplyByThree = multiply.bind(this, 3)
// multiplyByThree(5);

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(10);
multiplyByThree(3);