"use strict"
let d=new Date();
let n=d.getDay();
n=6;
console.log(n);
switch(true){
case(n==0):
console.log("sunday");
break;
case(n==1):
console.log("monday");
break;
case(n==2):
console.log("tuseday");
break;
case(n==3):
console.log("wensday");
break;
case(n==4):
console.log("thursday");
break;
case(n==5):
console.log("friday");
break;
case(n==6):
console.log("saturday");
break;
default:
    console.log("error");
}
