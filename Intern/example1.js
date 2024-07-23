"use stict";
let studName;
let english,maths,physics,chemistry,biology,marathi;

studName="Narendra";

english=38;
maths=100;
physics=88;
chemistry=90;
biology=67;
marathi=36;

let markObtained=english+maths+physics+chemistry+biology+marathi;
const totalMarks=600;

let percentage=(markObtained/totalMarks)*100;
console.log("percentage:"+percentage);

let roundOfPercentage=maths,roundedofpercentage;
//let roundOfPercentage=100;
if(
    english<35||
    maths<35||
    physics<35||
    marathi<35||
    biology<35||
    chemistry<35
    )
{
 console.log(studName + "is failed");   
}else{
    console.log(studName + "has got"+roundOfPercentage+"%marks");
}
switch(true){
    case roundOfPercentage>=35 && roundOfPercentage<45:
    console.log("pass class");
    break;
    case roundOfPercentage>=45 && roundOfPercentage<60:
    console.log("second class");
    break;
    case roundOfPercentage>=60 && roundOfPercentage<75:
    console.log("first class");
    break;
    case roundOfPercentage>=75 && roundOfPercentage<=100:
    console.log("distinction class");
    break;
    default:
        console.log("invalid calculation");
}