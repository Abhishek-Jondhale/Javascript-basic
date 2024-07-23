

let r=[10,20,30,40,50]
let a=r.find(function(el,index,arr){
    return el>5
})
console.log(a);


let d=[10,20,30,40,50]
let b=r.some(function(el,index,arr){
    return el>5
})
console.log(b);