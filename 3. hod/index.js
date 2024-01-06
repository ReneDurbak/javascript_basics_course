/*
let arr = ["Noel", "Marek","Radovan","Peter"]

//zakladny FOR
for (let i=0;i<arr.length;i++){
    console.log(arr[i])
}


//FOR OF
for (item of arr){
    console.log(item)
}

//FOREACH
function iterator(item){
    console.log(item)
}

arr.forEach(iterator)
*/



/*
let person={
    name:"Samo",
    surname:"Novotny",
    age:"23",
    tasks:[
        {
            title:"homework",
            descripion:"",
            deadline:"26.09.2022",
            subject:"MAS"
        },
        {
            title:"homework",
            descripion:"",
            deadline:"26.09.2022",
            subject:"MAS"
            },
    ]
}
//console.log(person.tasks[1].deadline)
*/




/*
let obj1 = {
    prop1: 1
    prop2: [
        {
            prop3:3,
            prop4:3
            prop5:{
                prop6:{0,4,5},
                prop7:1
                }
        },
        {
            prop3:3,
            prop4:3
            prop5:{
                prop6:{0,4,5},
                prop7:1
                }
        }
    ]
}

//console.log(obj1.prop2[1].prop5.prop6[1])
//cez taketo postupy sa vieme dostat na rozne miesta (hodnty) v obj1
*/



/*
let person={
    name:"Samo",
    surname:"Novotny",
    age:"23",
    tasks:[
        {
            title:"homework",
            descripion:"",
            deadline:"26.09.2022",
            subject:"MAS"
        },
        {
            title:"homework",
            descripion:"",
            deadline:"26.09.2022",
            subject:"MAS"
            },
    ]

/*let fil = function(item){
    if(item.title == "homework"){
        return true
    }
    else{
        return false
    }
}*/


/*let fil = item => {
    return item.title=="homework"
}*/

////toto nemusime pisat ked je len jeden 


//}


//console.log(persons[0].tasks.filter(fil))
//console.log(persons[0].task.filter(item => item.title=="homework"))



/*
let numbers=[1,6,7,3,9,0]

console.log(numbers.map(item => 2*item))
*/





let persons=[
    
    {
    name:"Samo",
    surname:"Novotny",
    age:"23",
    tasks:[
        {
            title:"homework",
            descripion:"",
            deadline:"26.09.2022",
            subject:"MAS"
        },
        {
            title:"domaca",
            descripion:"",
            deadline:"05.06.2022",
            subject:"NEMAS"
            },
    ]
},
{
    name:"Pista",
    surname:"Lakatosh",
    age:"69",
    tasks:[
        {
            title:"clovek",
            descripion:"",
            deadline:"nikdy",
            subject:"chudobny"
        },
        {
            title:"neclovek",
            descripion:"",
            deadline:"zomrel",
            subject:"nema love"
            },
    ]
}

]



console.log(persons[0].tasks.filter(item => item.title=="homework"))

console.log(persons.map(item=>item.age))

let ages = persons.map(item=>item.age)
let sum=0
let agesInt = ages.map(item => {
    return Number(item);
  });


for(const value of agesInt){
    
    sum += value;
   
}

console.log(sum/ages.length)

console.log(persons.filter(person=>person.tasks[0].title.length > 0))




