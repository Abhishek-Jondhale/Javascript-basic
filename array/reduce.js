let number=[10,20,30,40];
let a=number.some(function(el,index,arr){
    return el+30
})
console.log(a);