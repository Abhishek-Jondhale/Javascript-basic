// let num=[1,2,3,456];
// let b=Math.min(...num);
// console.log(b);

let arr=[1,2,4,100];
let count=0;
arr.forEach(element => {
    count+=element/arr.length
});
console.log(count);