let boxContainer = document.querySelector("#box-container")
let showButton = document.querySelector("#show-button")
let hideButton = document.querySelector("#hide-button")
let boxCount = document.querySelector("#box-count")
let countClicks = 0;
let countString = "Box Count: ";


const addBox=()=>{
    countClicks += 1;
    boxCount.innerText = countString+countClicks;
    let newBox = document.createElement("div");
    newBox.innerText = boxContainer.children.length + 1;
    newBox.setAttribute("class","box");
    newBox.setAttribute("onClick","deleteBox(event)");
    boxContainer.append(newBox);

}

const showBoxes = ()=>{
    showButton.style.display = "none";
    hideButton.style.display="block";
    boxContainer.style.display="flex";
}

const hideBoxes = ()=>{
    showButton.style.display = "block";
    hideButton.style.display="none";
    boxContainer.style.display="none";
}

const clearBoxes = ()=>{
    countClicks = 0;
    boxCount.innerText = countString+countClicks;
    document.querySelectorAll(".box").forEach(element => {
        boxContainer.removeChild(element)
    });
}
let deleteMode = false;
const setDeleteMode = (event)=>{

    deleteMode = !deleteMode
    console.log(deleteMode ? "Momentálne som v delete mode" : "Nie som v delete mode")
    event.target.innerText = deleteMode ? "Finish delete mode" : "Start delete mode" 
    event.target.style.backgroundColor = deleteMode ? "red" : "grey"

}
 
const deleteBox = (event)=>{
    if(deleteMode){
        countClicks -= 1;
        boxCount.innerText = countString+countClicks;
        boxContainer.removeChild(event.target)
    }
}


//-----Dark Mode----- 
// Umoznuje uzivatelovi vstupit do "temneho modu" pricom sa pozadie celeho dokumentu zmeni na cierne a tlacidlo dark mode naopak na biele.
let darkMode = false;

const setDarkMode= (event)=>{
    darkMode = !darkMode
    document.body.style.backgroundColor = darkMode ? "black" : "white";
    event.target.style.backgroundColor = darkMode ? "white" : "black";
    event.target.style.color = darkMode ? "black" : "white";
    event.target.innerText = darkMode ? "EXIT Dark Mode" : "ENTER Dark Mode";
}

