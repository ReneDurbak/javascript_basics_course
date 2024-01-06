//====================================================================================
//Fetch & promises

let myData;
let baseUrl = "https://632812529a053ff9aaaf917a.mockapi.io/todo"

//Funkcia fetch 
//v tomto prípade ju využívame pre získavanie dát zo servra, bez druhého argumentu
//funkcia fetch vracia objekt promise
//argument posledného thenu može byť aj funkcia s jedným parametrom prestavujúcim data
//v ktorej sa bude nachádzať spracovanie týchto dát
fetch(`${baseUrl}/todoList`)
    .then((response)=>response.json())
    .then((data)=>console.log(data))

//async wait notácia
async function initialFetch(){
    let response = await fetch(`${baseUrl}/todoList`)
    let data = await response.json()

    console.log(data);
}

initialFetch();
//====================================================================================
