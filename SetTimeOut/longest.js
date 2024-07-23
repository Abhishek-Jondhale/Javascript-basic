let long = "My name is Abhishek. I am from Nilwande";
let sp = long.split(' ');
let s = sp.sort((a,b)=>
{
    return b.length - a.length;
})
console.log(s[0]);



// let num = [23232,54,6,7,897989,989,5433];
// console.log(num.sort((a,b)=>
// {
//     return a -b;
// }));