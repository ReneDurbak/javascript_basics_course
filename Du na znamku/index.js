
// ====================== 1.uloha =====================


function mergeArrays(...arguments) { 

    let i,mergedArray = [];
/*
    for(let i = 0; i < arguments.length; i++) {
        mergedArray = [...mergedArray, ...arguments[i]]; 

        } 
         return mergedArray;
        }*/
    
    for(item of arguments){
        mergedArray = [...mergedArray, ...item]; 
    }
}



console.table(mergeArrays([5,4,3],[9,7,8],[8],[6,6,6]))


//============ 2.uloha =================



/*function filterByFirstCharacter(Array, letter){ 
    let newArr = Array.filter(item => item.charAt(0) == letter);

    return newArr
}
    



console.log(filterByFirstCharacter(["Samo","Miso","Adam","Sofia","Patrik"], 'S'))*/




//============== 3.uloha ====================




ArrofNames = [
    // 1.osoba
    {
    name: "Jozef",
    surname: "Nagy",
    age: 24,
},


// 2.osoba
{
    name: "Jozef",
    surname: "Nebezpecny",
    age: 22,
},

// 3.osoba
{
    name: "Bonifac",
    surname: "Nepriestrelny",
    age: 65,
},

// 4.osoba
{
    name: "Risko",
    surname: "Lesny",
    age: 77,
},

// 5.osoba
{
    name: "Misko",
    surname: "Beats",
    age: 17,
},

// 6.osoba
{
    name: "Marosko",
    surname: "Rosenberger",
    age: 9,
},

// 7.osoba
{
    name: "Marek",
    surname: "Nijaky",
    age: 55,
},

// 8.osoba
{
    name: "Robino",
    surname: "Sekany",
    age: 48,
},

// 9.osoba
{
    name: "Milan",
    surname: "Pery",
    age: 35,
},

// 10.osoba
{
    name: "Marek",
    surname: "Laky",
    age: 25,
},
]



function averageAge(arr){

    let sum=0, sum2=0, average=0;
 

    arr.forEach(({age}) => {

        

        sum += age;
        sum2 += 1;
    }
    );

    average = sum/sum2;

    console.log(`Vekovy priemer tychto ludi je: ${average} rokov`)

}


averageAge(ArrofNames)

