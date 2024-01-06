//====================================================================================
//Polia
//konštrukcia prázdneho poľa
let array = []

//konštrukcia poľa s počiatočnými prvkami
array = ["Noel","Marek","Radoval", "Petre"]

//pristupovanie k jednotlivým prvkom poľa pomocou indexu
console.log(array[0])

//iterovanie poľa

//základny for
console.log('==========FOR==========')
for (let i=0;i<array.length;i++){
    console.log(array[i])
}

//for of
console.log('==========FOR OF==========')
for (item of array){
    console.log(item)
}

//forEach
console.log('==========FOR EACH==========')
function iterator(item){
    console.log(item)
}
array.forEach(iterator)


//základné metódy poľa
//map - slúži na mapovanie prvkov poľa na prvky nového poľa
function addA(name){
    return `${name}A`
}
console.table(array.map(addA))

//filter - slúži na vytvorenie nového poľa, ktoré vzniklo filtrovaním poľa nad ktorým bola táto metóda volaná

function condition(name){
    return name!='Noel'
}
console.table(array.filter(condition))

//sort - slúži na vytvorenie nového poľa, ktoré vzniklo (vzostupnym) zoradením prvkov poľa, nad ktorým bola táto metóda volaná
console.table(array.sort())

//====================================================================================