// "use strict"
// add(a,b)
//  a=12
// console.log(a);

// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
number=10;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

