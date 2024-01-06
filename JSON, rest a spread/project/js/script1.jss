//====================================================================================
//Základy
//deklarácia premenných pomocou kľučových slov var a let
//var - staršie, rozsah platnosti takto deklarovanej premennej - funkcia, nepoužívať
var variable1 = 1

//let - novšie,  rozsah platnosti takto deklarovanej premennej - blok, použítať
let variable2 = 'Hello world'

//deklarácia konštanty pomocou kľučového slova const - musí bzť hneď inicializovaná a jej hodnota sa nemení
const PI = 3.14

//výpis do konzoly
console.log(variable2)

//tabuľkový výpis do konzoly (hodí sa pre pole)
console.table()

//template string - zjednodušený spôsob ako budovať (spájať reťazce)
//celý reťazec uzatvorený do `` (backtick)
//premenné, konštanty do reťazca vkladáme ${name}
//nepoužívame meta znaky (\n, \t) ale napíšeme ich ako v normálno texte (stlačením klaves enter, tab)
console.log(`This is teplate string ${variable1}    
${variable2}`)

//====================================================================================
//Cykly a vetvenia rovnaká syntax ako v jayzku C

//====================================================================================
//Funkcie
//rozlišujeme pomenované (majú meno) a anonymné (nemajú meno)

//funkčná deklarácia (function declaration) - pomocou kľučoveho slova function, za ktorým nasleduje meno funkcie
function myFirstFunction(param1, param2){
    return param1 + param2
}

//funkčný výraz (function expresion) - pomocou priradenia do premennej resp. konštanty
const mySecondFunction = function (param1){
    console.log(`Parameter 1: ${param1}`)
    return param1
}
 
//defaultné hodnoty parametrov - prednastavené na undefined možno ich zmeniť tak, 
//že za názvom parametra uvedieme = defaultValue
const myThirdFunction = function (param1 = 'Samo', param2 = false){
    //telo funkcie
}

//arrow function - anonymná funkcia s nasledujúcimi syntaktickými pravidlami
//1,nepoužívame kľučove slovo function
//2,parametre uvedené v zátvorke oddelené čiarkami, ak je len jeden parameter zátvorky vynecháme
//3,parametre sú od tela funkcie oddelené =>
//4,telo funkcie uzatvorené do {} ak však telo funkcie obsahuje len kľúčové slovo return,
//  za ktorým nasleduje návratová hodnota vynecháme zátvorky aj kľučové slovo return a rovno uvedieme návratovú hodnotu

//myFirstFunction prepis na arrow notation 
const myFirstFunctionAN = (param1, param2) => param1 + param2

//mySecondFunction prepis na arrow notation 
const mySecondFunctionAN = param1 => {
    console.log(`Parameter 1: ${param1}`)
    return param1
}

//====================================================================================
//JS Objects
//používajú sa na ukladanie kolekcií dvojíc kľúč: hodnota (key: value pairs), 
//ktoré nazývame vlastnosti objektu (properties)
//typy hodnôt vlastnosti môžu byť primitívne alebo objekty (to povoľuje existenciu vnorených objektov)
//v prípade ak ide o typ function nazývame tieto vlastnosti metódy.

let person = {
    personName : "Samo",
    personSurname: "Novotný",
    personAge: 23,
    fullName: function(){
        return `${this.personName} ${this.personSurname}`
    }
}

//pristupovanie k vlastnostima JS objektov
//bodková notácia (dot notation)
console.log(person.personName)
console.log(person.fullName())

//zátvorková notácia (bracket notation)
console.log(person['personSurname'])
console.log(person['fullName']())

//dekonštrukcia objektu
//ide o vytvorenie premenných resp. konštánt a ich nasledovnú inicializáciu hodnotami
// im zodpovedajúcich vlastnosti objektu podľa nasledujúcej syntaxe:

//názov novej premennej resp. konštanty musí byť taký istý ako názov vlastnosti objektu, 
//ktorej hodnotou ju chcem inicializovať
const {personName, personSurname} = person

//v prípade ak chcem aby bol názov novej premennej resp. konštanty iný ako je názov vlastnosti 
//objektu, ktorej hodnotou ju chcem inicializovať použijem nasledujúcu notáciu
let {personName: nazov, personSurname: priezvisko} = person

//====================================================================================
