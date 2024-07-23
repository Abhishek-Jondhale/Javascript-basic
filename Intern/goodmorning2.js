let d=new Date();
let a=d.getHours();
let b=d.getMinutes();
let c=d.getSeconds();

console.log(a,":",b,":",c);
switch (true)
{
case a>6&&a<12:
console.log("good morning");
break;
case a>12&&a<5:
console.log("good afternoon");
break;
case a>=5&&a<=9:
console.log("good evening");
break;
case a>=9&&a<=12:
console.log("good night");
break;
}
