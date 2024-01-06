const sendPost = ()=>{
    let nameInput = document.querySelector("#name");
    let msgInput = document.querySelector("#msg");

    let name = nameInput.value;
    let body = msgInput.value;
    let dateTime = getCurrentDateTime();

    let settings={ //objekt s nastaveniami request-u
        method: 'POST', //metóda, ktorá sa má vykonať, v našom prípade POST - poslanie údajov na server
        headers: {'Content-Type': 'application/json;charset=utf-8',}, //headers - uchováva ďalšie (prídavné) informácie o request-e
        body: JSON.stringify({name,body,dateTime})//data ktoré chceme poslať na server
    }
    fetch("https://632812529a053ff9aaaf917a.mockapi.io/todo/messages",settings) //To co napiseme tak sa posle do pomyselnej databazy - (Metoda POST)
        .then((response)=>response.json())//spracujeme odpoveď zo severa
        .then((data)=>{console.log(data);renderPost(data)})//v prípade ak všetko zbehlo v poriadku server mám pošle naspäť dáta, ktoré sme mu poslali mi (parametre data - skúste si ich vypísať do konzoly) ktoré následne môžme vyrenderovať...
                                        //Je tu renderPost aby ked nieco napiseme tak aby sa nam to v realnom case ukazalo, keby to tu nie je aj tak sa nam to ukaze vdaka fetchAndDisplayMessages ale az po refreshi nie realtime
        
        .catch((error)=>alert(`Error...${error}`))//v prípade ak sa post nepodaril vypíše sa Error a nič sa nevyrenderuje


    nameInput.value="";
    msgInput.value=""; //Ked nieco napiseme a odosleme to, tak aby sa nasledne input okienko vynulovalo(aby tam neostala povodna sprava)

}




const getCurrentDateTime=()=>{
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth()+1;
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




const renderPost = ({name,body,dateTime})=>{
    let post = document.createElement("article");
    let content = `
        <header>
            <div class="author" >${name}</div>
            <div class="datetime" >${dateTime.day}.${dateTime.month}.${dateTime.year} ${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds}</div>
        </header>
        <div class="body">${body}</div>
    `;
    post.innerHTML=content;
    post.setAttribute("class","post");

    let main = document.querySelector("#posts");
    main.prepend(post); //aby bolo na zaciatku vsetkych sprav append - nakoniec, prepend - na zaciatok
}





//=================================NA ZOBRAZOVANIE SPRAV NA OBRAZOVKU(aby sa vypisali)=========================
const fetchAndDisplayMessages =()=>{
    fetch("https://632812529a053ff9aaaf917a.mockapi.io/todo/messages")
        .then((response)=>response.text())
        .then((json)=>JSON.parse(json))
        .then((posts)=>posts.forEach(post => {
            renderPost(post);
        }))
}

fetchAndDisplayMessages();















