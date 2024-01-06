//https://www.jcchouinard.com/install-git-in-vscode/
const ids={
    Bratislava: 2131,
    Trnava: 4078,
    Presov: 2567,
    Kosice: 3278,
    Zilina: 2795,
    Trencin: 3867,
    Poprad: 3709
}

const fetchAndDisplayWeatherData = ()=>{
    let inputElement = document.querySelector("#city");
    //let city = inputElement.value;
    if (ids[inputElement.value]!=null){
        fetch(`https://632812529a053ff9aaaf917a.mockapi.io/todo/weather/${ids[inputElement.value]}`)//doplniť spracovanie odpovede a samotnú url
        .then((response)=>response.json())
        .then((data)=>renderData(data))
    }
    inputElement.value="";
}

const renderData = (/*data*/{city, country, currentDesc, currentTemp, currentWind, currentPressure, forecasts})=>{
    let weatherCard = document.createElement("div");
    weatherCard.setAttribute("class", "weather-card");
    
    content=`
    <div class="location">${city}, ${country}</div>
    <div class="curent-weather">
        <div class="curent-desc">
        <img src = "./assets/weather/${currentDesc}.svg"/>
        ${currentDesc}
        </div>
        <div class="curent-temp">${currentTemp}°c</div>
        <div class="curent-other">
            <div class="wind">Wind: ${currentWind}</div>
            <div class="presure">Pressure: ${currentPressure}</div>
        </div>
    </div>

    <div class="forecasts">
        ${forecasts.map(day => `
        <div class="day">
            <div class="name">${day.name}</div>
            <img src = "./assets/weather/${day.desc}.svg"/>
            <div class="temperature">${day.temperature}</div>
        </div>`
        )
        .join(" ")}
    </div>
    `;
    weatherCard.innerHTML=content;
    document.body.append(weatherCard);
    
}