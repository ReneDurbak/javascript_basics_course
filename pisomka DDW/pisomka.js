/*Vytvorte funkciu polynom. Nech táto funkia vracia hodnotu nasledujúceho 
polynómu p0*x^0 + p1*x^1 + ... + pn*x^n pričom x predstavuje jej prvý parameter, 
ktorý je povinný, a p0,p1,…,pn sú zvyšné parametre funkie. AK pri volaní funkcie 
zadám len jeden argument (ya parameter x) funkcia vráti 0.
Možné volania funkcie:
polyom(1) vráti 0
polyom(1,0) vráti hodnotu 0*1^0 teda 0
polynom(7,1,0,3) vráti hodnotu 1*7^0 + 0*7^1 + 3*7^2 teda 148
*/

/*
polynom(7,1,0,3)

function polynom(x = 0, ...rest){
    let result = 0
    let number = 0
    
    for(let item of rest){
        result +=  item*Math.pow(x,number)
        
        number += 1
      
        
        
    }
    console.log(result)
}
*/




/*Pristúpte k nasledujúcepmu api https://632812529a053ff9aaaf917a.mockapi.io/todo/todoList
a získajte len záznam s id 1. Pri spracovaní response postupujte tak aby ste využili metódu 
JSON.pare Do konzoly potom vypíšte jednak získané dáta a jednak výpis v tvare: <listTitle> 
má <X> úloh z toho <X1> vypracovaných a <X2> nevypracovaných, kde <X> nahradíme počtom 
táskou, <X1> počtom táskov so statusom 1 a <X2> počtom táskov so statusom 0. Tieto hodnoty 
získajte použitím metódy filter. 
*/

/*
baseUrl = "https://632812529a053ff9aaaf917a.mockapi.io/todo/todoList"

fetch(`${baseUrl}/1`)
.then((response) => response.text())
.then((json) => JSON.parse(json))
.then((data)=> {console.log(data); return data})
.then(processData)


function processData(data){
    let number = 0
    let numberX1 = 0
    let numberX2 = 0
    
    
    const {listTitle} = data
    const {tasks} = data
    
    tasks.forEach(()=>
        number = number + 1
        )

      

    let X1 = tasks.filter(item => item.status == 1)


    X1.forEach(()=>
    numberX1 = numberX1 + 1
    )
    
    let X2 = tasks.filter(item => item.status == 0)


    X2.forEach(()=>
    numberX2 = numberX2 + 1
    )

    console.log(`${listTitle} ma ${number} uloh a ma ${numberX1} vypracovanych uloh a tolko ${numberX2} nevypracovanych uloh`)
}*/