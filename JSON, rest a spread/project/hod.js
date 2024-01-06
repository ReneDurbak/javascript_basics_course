
//=========spread operator=============
/*let jso= {

    name: "Rene",
    surname: "Durbak",
    age: 17,
}

jso.age= 23


let jso2 = {
    ...jso,
    age: 54,
    address: "Hlinkova",
}

console.log(jso)
console.log(jso2)*/


//===========================dekonstrukcia objektu=====================


let obj={
    name: "Rene",
    surname: "Durbak",
    age: 17,
    sayHello: ()=>"Ahoj",
    isDone: false,
}

const {name:meno} = obj
console.log(meno)

/*const {name} = obj
console.log(name)*/


function fullName({name, surname}){
    console.log(`Volam sa ${name} ${surname} `)

}

fullName(obj)


function getYear({age}){

    const year = 2022 - age

    console.log(year)

}


getYear(obj)

//==================JSON===============

console.log(obj)
let json = JSON.stringify(obj)
console.log(json)
console.log(JSON.parse(json))

//========opak===========


