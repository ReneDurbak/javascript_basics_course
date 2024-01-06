

let baseURL="https://632812529a053ff9aaaf917a.mockapi.io/todo/todoList";

fetch(`${baseURL}/1`)
.then((response)=>response.text())
.then((json)=>JSON.parse(json))
.then((data)=>{
    let element = document.querySelector("#main_content");
    let newElement =`
    <div>
    <p>${data.listTitle}</p>
    <div>${data.tasks.map((task)=>`<p>${task.title}</p>`).join(" ")}</div>
    </div>
    `
    element.innerHTML=newElement
})


element.style.backgroundColor="red"