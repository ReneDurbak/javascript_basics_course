//====================================================================================
//Rest & spred oprátory (...)

//rest operátor - zhromažďuje zostávajúce argumenty do poľa

function sum(num1,num2){
    return num1 + num2
}
console.log(sum(1,2)) //3


function sumArray(array){
    let sum=0;
    array.forEach(item=>sum=sum+item)
    return sum
}
console.log(sumArray([1,2,3,4])) //10

console.log(Math.max(1,2,3,4)) //4

function sumN(...numbers){
    let sum=0;
    numbers.forEach(number=>sum=sum+number)
    return sum
}
sumN(1,2,3,4) //4

function functionN (parameter1, parameter2, ...rest){
    console.log('Toto je hodnota parametra parameter1:', parameter1)
    console.log('Toto je hodnota parametra parameter2:', parameter2)
    console.log('Toto je hodnota parametra rest:', rest)
}
functionN(1,2,3,4,5,6,7)


//spred operátor - "rozbíja" pole na jednotlivé prvky
let arguments=[1,2,3,4,5,6,7]
functionN(...arguments)

let array1 = [1,2,3]
let array2 = [7,8,9]

let newArray = [...array1,4,5,6,...array2]
console.log(newArray)

//====================================================================================
//JSON - JS Object Notation je všeobecný formát na reprezentáciu hodnôt a objektov, 
//ktorý sa používa na čítanie údajov z webového servera a následné zobrazenie týchto 
//údajov na webovej stránke. Ide v podstate o string s určitou štruktúrov.

let person = {
    name: "Samo",
    surname: "Novotný",
    age: 23,
    tasks: [
        {
            title: "Essay",
            description: "ENGLISH: My favourite teacher",
            deadline: "22/10/2022",
            isDone: true
        },
        {
            title: "Homework",
            description: "MATH: solve equation page 201",
            deadline: "22/10/2022",
            isDone: false
        }
    ],
    fullName: function (){
        return this.name + this.surname
    }
}


//JSON.stringigy() metóda sa používa pre konverziu JS objektu na JSON
let json = JSON.stringify(person)
console.log(json)
//JSON.parse() metóda sa používa pre konverziu JSON stringu späť na JS objekt
console.log(JSON.parse(json))

//====================================================================================