/*console.log("hello world")

let y;
var x;

for(var i=0; i<5; i++){
    console.log("cislo iteracie")

}

console.log(i)

console.log("ahoj"+ " cau " + i)
console.log(`ahoj cau ${i}`) //na sk klavesnici altgr+7 spatny apostrof a na en klavesnici dvakrat bodkociarku jak na sk
*/

/*do{
    console.log("cislo iteracie")
    i--;
}
while(i<5);
console.log(i)*/


let person = {
    name: "Rene",
    surname: "Durbak",
    age: 17,
    
}


let{name:meno,surname:priezvisko,age:vek}=person;




console.log(person)

/*console.log(`Volam sa ${person.name} ${person.surname} a mam ${person.age} rokov`)*/

function predstavenie(){
    console.log(`Volam sa ${person.name} ${person.surname} a mam ${person.age} rokov`)
}
predstavenie()


function iterator(number){
    for(let i=0; i<number; i++){
        console.log(i);
    }
    return number
}

let result = iterator(5);
console.log(result)


function mocnina(number){
    let cislo = number*number
    return cislo
}

let vysledok = mocnina(5);
console.log(vysledok)



function obsah_stvorca(strana1,strana2){
    let vypocet = strana1 * strana2
    return vypocet

}

let vypocet = obsah_stvorca(2,4);
console.log(vypocet)




function O(r,pi=3.14){
    return pi*r*r

}

let vysledok_O = O(5);
let vysledok_O2 = O(5,3.14159);

console.log(vysledok_O)
console.log(vysledok_O2)