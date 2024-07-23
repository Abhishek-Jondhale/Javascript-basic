"use strict"
let a=10,b=10;
 let result ="*";
switch("*"){
case("+"):
result=(a+b);
console.log("addition="+result);
break;
case("-"):
result=(a-b);
console.log("subtraction="+result);
break;
case("*"):
result=(a*b);
console.log("multiplication="+result);
break;
case("/"):
result=(a/b);
console.log("division="+result);
break;
case("%"):
result=(a%b);
console.log("moduls="+result);
break;
default:
    console.log("error");
}
