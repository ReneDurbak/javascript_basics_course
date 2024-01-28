
let addButton = document.querySelector("#add-button")
let showButton = document.querySelector("#show-button")
let hideButton = document.querySelector("#hide-button")
let boxContainer = document.querySelector("#box-container")
let clearButton = document.querySelector("#clear-button")
let deleteButton = document.querySelector("#delete-button")
//showButton.style.display = "none";


const addBox = () => {
    let newBox = document.createElement("div");
    newBox.setAttribute("class","box");
    newBox.setAttribute("onclick","deleteBox(event)");
    newBox.innerText = boxContainer.children.length+1;
    boxContainer.append(newBox);

}

const showBoxes = () =>{

    boxContainer.style.display = "flex"
    showButton.style.display = "none"
    hideButton.style.display = "block"



}


const hideBoxes = () => {

    hideButton.style.display = "none"
    showButton.style.display = "block"
    boxContainer.style.display = "none"

}

const clearBoxes = () => {
 
    document.querySelectorAll(".box").forEach(element => {
        boxContainer.removeChild(element)
        /*
        boxContainer.innerText = ""
    boxContainer.style.display = "flex"*/

    });
    

}

let deleteMode = false;
const setDeleteMode = (event) => {

    deleteMode = !deleteMode;
    console.log(deleteMode ? "Momentalne som v delete mode" : "niesom v Delete mode")
    //deleteMode ? deleteButton.innerText = "si v delete mode" : deleteButton.innerText = "nie si v delete mode"
    event.target.innerText = deleteMode ? "EXIT delete mode" : "ENTER delete mode"
}


const deleteBox = (event) => {
    
    if (deleteMode == true){
    boxContainer.removeChild(event.target)
    }

}