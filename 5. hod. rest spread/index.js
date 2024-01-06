let jso = {
    name:"mato",
    surname:"hal",
    age: 17,
    sayhello: () => `Ahoj`
}

const {name} = jso
console.log(name)




function fullname({name, surname}){
    console.log(`Volam sa ${name} ${surname}`)
}

fullname(jso)

function getBY({age}){
    rok = 2022- age

    console.log(rok)
}

getBY(jso)