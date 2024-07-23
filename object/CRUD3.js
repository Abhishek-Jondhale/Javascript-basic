let a={
    car:"jaguar",
    color:"blue",
}
console.log(a);
//CREATE
//dot method
let b=a.car
console.log(b);

//bracket method
let c=a["color"]
console.log(c)

//POST
//dot method
a.type="varius types"
console.log(a);

//bracket method
a["shape"]="like panther "
console.log(a);

//UPDATE
//Dot method
a.place="at my house"
console.log(a)

//bracket method
a["facilty"]="comfort"
console.log(a)

//DELETE
//dot method
delete a.color
console.log(a);

delete a.facility
console.log(a)