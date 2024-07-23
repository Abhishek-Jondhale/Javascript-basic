let salary;
let enpName;
let gender;
const PT=200;
enpName="Arhan";
gender="male";
salary=10000;

if(salary<10000 && gender=='male')
{       
    console.log(enpName+"will have to pay"+"rupees");

}
if(salary<7000 && gender=='female')
{
    console.log(enpName+"will not to pay"+PT+"rupees");
}
if(salary>7000 && gender=='male')
{
    console.log(enpName+"will have to pay"+PT+"rupees");
}
if(salary>10000)
{
    consoie.log(enpName+"will have to pay"+PT+"rupees");
}
if(salary<7000)
{
    console.log(enpName+"will not have to pay"+PT+"rupees");
}