let person1 = {
    address:{
        city: 'Kosice',
        PostalCode: '040 01',
    },
    surname: 'Salas',
}

let person2={
    favFood: 'Kebab',
    age: 25,
    firstName:'Martin',
    surname:'Haluska',
}

const person3= {firstName:'Rene',...person2,...person1}

console.log(person3)

//------Dekonstruovanie vnoreneho objektu--------
const{address:{city}}=person1

console.log(city)