let a={
    fruit:"mango",
    color:"orange",
}
console.log(a);

//CREATE
//dot method
let b=a.fruit
console.log(b);

//bracket method
let c=a["color"]
console.log(c)

//POST
//dot method
a.type="hapus"
console.log(a);

//bracket method
a["shape"]="different"
console.log(a);

//UPDATE
//Dot method
a.place="everywhere"
console.log(a)

//bracket method
a["smell"]="flawless"

//DELETE
//dot method
delete a.color
console.log(a);

delete a.smell
console.log(a)