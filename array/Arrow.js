var array=[10,20,30]
var index=array.findIndex((el,index,array)=>{
   
   return el>10;
})
console.log('index',index);