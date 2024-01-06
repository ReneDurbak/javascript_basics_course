let boxContainer = document.querySelector("#box-container")
let showButton = document.querySelector("#show-button")
let hideButton = document.querySelector("#hide-button")

const addBox=()=>{
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
    document.querySelectorAll(".box").forEach(element => {
        boxContainer.removeChild(element)
    });
}
let deleteMode = false;
const setDeleteMode = (event)=>{
    deleteMode = !deleteMode
    console.log(deleteMode ? "Momentálne som v delete mode" : "Nie som v delete mode")
    event.target.innerText = deleteMode ? "Finish delete mode" : "Start delete mode"
}

const deleteBox = (event)=>{
    if(deleteMode){
        boxContainer.removeChild(event.target)
    }
}

