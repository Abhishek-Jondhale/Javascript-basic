let a=[12,2,34,5,3];
let b=a.reduce((sum,ele)=>{
 return sum+=ele;
});
let avg=b/a.length;
console.log(avg);