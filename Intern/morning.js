"use stict"
let d=new Date();
 a=d.getHours();
 b=d.getMinutes();
 c=d.getSeconds(); 
console.log(a,":",b,":",c);
switch(true){
case (a>=5&&a<12):
console.log("good morning");
break;
case (a>=12&&a<4):
console.log("good afternoon");
break;
case (a>=4&&a<8):
console.log("good evening");
break;
case (a>=8&&a<12):
console.log("good night");
break;
}