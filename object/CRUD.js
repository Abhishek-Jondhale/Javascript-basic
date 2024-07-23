
let stud={
    firstname:"vishal",
    lastname:"sanap",
    age:"18",
}
console.log(stud);

//CREATE

//dot method
let a=stud.firstname
console.log(a);

//bracket method
let b=stud["lastname"]
console.log(b);

//RETRIEVE

//Dot method
stud.city="sangamner"
console.log(stud);

//bracket method
stud ["phoneno"]="9322983472"
console.log(stud);

//UPDATE

//dot method
stud.country="india"
console.log(stud);

//bracket method
stud["vilage"]="sonoshi"
console.log(stud);

//DELETE

//dot Method
delete stud.country
console.log(stud)

//bracket Method
delete stud["city"]
console.log(stud)

