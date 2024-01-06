const sendPost = () => {
    let nameInput = document.querySelector("#name");
    let msgInput = document.querySelector("#msg");
    
    let name = nameInput.value;
    let body = msgInput.value;
    let dateTime = getCurrentDateTime();
    let settings ={
        method:'POST',
        headers: {'Content-type':'application/json;charset=utf8',},
        body: JSON.stringify({name,body,dateTime})
    }
    fetch("https://632812529a053ff9aaaf917a.mockapi.io/todo/messages", settings)
        .then((response)=>{
            if(response.ok){
                return response.json()
            }
            else{
                alert("Error...");
            }
        })
        .then((post)=>renderPost(post))

    renderPost({name,body,dateTime});

    nameInput.value="";
    msgInput.value="";
}

const getCurrentDateTime = () => {
    let currentDate = new Date();

    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    return{
        day,
        month,
        year,
        hours,
        minutes,
        seconds
    }
}

const renderPost = ({name,body,dateTime}) =>{ 
    let post = document.createElement("article");
    let content = `
        <header>
            <div class="author">${name}</div>
            <div class="datetime">${dateTime.day}.${dateTime.month+1}.${dateTime.year} ${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds}</div>
        </header>
        <div class="body">${body}</div>
    `;
    post.innerHTML=content;
    post.setAttribute("class", "post");
    let main = document.querySelector("#posts");
    main.prepend(post);
}

const fetchAndDisplayMessages = () => {
    fetch("https://632812529a053ff9aaaf917a.mockapi.io/todo/messages")
        .then((response)=>response.text())
        .then((json)=>JSON.parse(json))
        .then((posts)=>posts.forEach(post => {
            renderPost(post);
        })

        )
}
fetchAndDisplayMessages();