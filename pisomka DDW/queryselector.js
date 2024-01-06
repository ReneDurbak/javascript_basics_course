console.log(document.querySelector(".first"))
console.log(document.querySelector("#my"))

console.log(document.querySelectorAll("div.first"))

console.log(document.querySelectorAll("div#ty > div.first"))

let element = document.querySelector("div#ty > div.first")

element.style.color = "yellow"

element.setAttribute("class","second ")

element.style.backgroundColor = "red"


baseUrl = "https://632812529a053ff9aaaf917a.mockapi.io/todo/todoList"

fetch(`${baseUrl}/1`)
.then((response) => response.text())
.then((json) => JSON.parse(json))
.then((data) =>{
    let element = document.querySelector("#main_content")
    let newElement = `<div><p>${data.listTitle}</p><div>${data.tasks.map((task)=>`<p>${task.title}</p>`).join(' ')}</div></div>`
    element.innerHTML = newElement
})
    
