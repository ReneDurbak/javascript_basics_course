// =====1.Uloha==========


function mul(number_1 = 1, number_2 = 1){
  

    
   
      return number_1*number_2
    
    
   
    
    
}

console.log(mul())



// ======2.uloha=======

let ja = {
    name: "Rene",
    surname: "Durbak",
    age: 17,
    address:"Hlinkova 24",
    predstavenie: ()=>{
        console.log(`\n Volam sa ${this.name} ${this.surname} a mam ${this.age} rokov.\n\n`);
    }
}

ja.predstavenie()


// =======3.uloha==========

let obj = {

        prop1: 0,
        prop2: 0,
        prop3: [
            {
                prop1: 0,
                prop2: {
                    prop1: "write me out",
                    prop2: 0
                }
            },
            {
                prop1: [
                    [
                        {
                            prop1: "write me out",
                            prop2: 0
                        },
                        {
                            prop1: 0,
                            prop2: 0
                        }
                    ],
                    [
                        {
                            prop1: 0,
                            prop2: 0
                        },
                        {
                            prop1: "write me out",
                            prop2: 0
                        }
                    ]
                ],
                prop2: {
                    prop1: "write me out",
                    prop2: 0
                }
            },
        ],
        prop4: "write me out"
    }



console.log( obj.prop3[0].prop2.prop1)
console.log( obj.prop3[1].prop1[0][0].prop1)
console.log( obj.prop3[1].prop1[1][1].prop1)
console.log( obj.prop3[1].prop2.prop1)
console.log( obj.prop4)






//=========4.uloha==========


let persons= [
    // 1.osoba
    {
    name: "Jozef",
    surname: "Nagy",
    birthday: {
        year: 1999,
        month: 5,
        day: 13
    },
    
    address: {
        street: "Stredná",
        number: 23,
        city: "Víťaz",
        postalCode: "082 38"
    }
},


// 2.osoba
{
    name: "Jozef",
    surname: "Nebezpecny",
    birthday: {
        year: 1995,
        month: 5,
        day: 8
    }
    ,
    address: {
        street: "Stredná",
        number: 23,
        city: "Víťaz",
        postalCode: "082 38"
    }
},

// 3.osoba
{
    name: "Bonifac",
    surname: "Nepriestrelny",
    birthday: {
        year: 1975,
        month: 5,
        day: 3
    }
    ,
    address: {
        street: "Dobra",
        number: 23,
        city: "Kosice",
        postalCode: "082 38"
    }
},

// 4.osoba
{
    name: "Risko",
    surname: "Lesny",
    birthday: {
        year: 2001,
        month: 9,
        day: 26
    }
    ,
    address: {
        street: "Bojovna",
        number: 23,
        city: "Trebisov",
        postalCode: "082 38"
    }
},

// 5.osoba
{
    name: "Misko",
    surname: "Beats",
    birthday: {
        year: 1982,
        month: 5,
        day: 13
    }
    ,
    address: {
        street: "Ring",
        number: 23,
        city: "Stropkov",
        postalCode: "082 38"
    }
},

// 6.osoba
{
    name: "Marosko",
    surname: "Rosenberger",
    birthday: {
        year: 2002,
        month: 12,
        day: 7
    }
    ,
    address: {
        street: "Snina",
        number: 23,
        city: "Víťaz",
        postalCode: "082 38"
    }
},

// 7.osoba
{
    name: "Marek",
    surname: "Nijaky",
    birthday: {
        year: 1986,
        month: 2,
        day: 9
    }
    ,
    address: {
        street: "Stredná",
        number: 23,
        city: "Trebisov",
        postalCode: "082 38"
    }
},

// 8.osoba
{
    name: "Robino",
    surname: "Sekany",
    birthday: {
        year: 1998,
        month: 6,
        day: 13
    }
    ,
    address: {
        street: "Stredná",
        number: 23,
        city: "Kosice",
        postalCode: "082 38"
    }
},

// 9.osoba
{
    name: "Milan",
    surname: "Pery",
    birthday: {
        year: 1980,
        month: 5,
        day: 21
    }
    ,
    address: {
        street: "Vodna",
        number: 23,
        city: "Presov",
        postalCode: "082 38"
    }
},

// 10.osoba
{
    name: "Marek",
    surname: "Laky",
    birthday: {
        year: 1999,
        month: 5,
        day: 6,
    },
    
    address: {
        street: "Stredná",
        number: 23,
        city: "Kosice",
        postalCode: "082 38"
    }
},
]



//a,

console.table(persons.filter(item => item.address.city == "Kosice"))



//b,

console.table(persons.filter(item => item.birthday.month == 5))




//c,

console.table(persons.filter(item => item.name == "Marek"))


//d,

console.table(persons.filter(item => item.name == "Marek" && item.address.city == "Kosice"))


//e,

console.table(persons.filter(item => item.birthday.year <= 1987))


//g,

console.table(persons.filter(item => item.name.length >= 6 && item.birthday.year == 2002 ))

