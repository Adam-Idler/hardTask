let num = 266219, multiply = 1;

for (let i = 0; i < num.toString().length; i++) {
    multiply *= num.toString()[i];
}

console.log(multiply);

multiply = multiply ** 3;

alert(multiply.toString()[0] + multiply.toString()[1] );
