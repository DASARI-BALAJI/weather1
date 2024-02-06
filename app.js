const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "306e0ebc074cce2a12789c00008f2dec";
btn=document.querySelector("button");
btn.addEventListener('click',async()=>{
    try{
        val=document.querySelector("input");
        city=val.value;
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRes=await res.json();
        console.log(jsonRes);
        info={
            city : city,
            temp : jsonRes.main.temp,
            humidity : jsonRes.main.humidity,
            min_temp : jsonRes.main.temp_min,
            max_temp : jsonRes.main.temp_max,
            feels : jsonRes.main.feels_like,
            weather : jsonRes.weather[0].main,
            latitude : jsonRes.coord.lat,
            longitue : jsonRes.coord.lon,
        }
        let infor=document.querySelectorAll("#info p");
        infor[0].textContent=info.city;
        infor[1].textContent=`Temperature : ${info.temp}\u00B0 C`;
        infor[2].textContent=`Humidity : ${info.humidity}`;
        infor[3].textContent=`Min_temp : ${info.min_temp}\u00B0 C`;
        infor[4].textContent=`Max_temp : ${info.max_temp}\u00B0 C`;
        infor[5].textContent=`Feels_like : ${info.feels}\u00B0 C`;
        infor[6].textContent=`Weather : ${info.weather}`;
        infor[7].textContent=`Latitude : ${info.latitude}\u00B0`;
        infor[8].textContent=`Longitude : ${info.longitue}\u00B0`;
        document.querySelector("input").value="";
        let e=document.querySelector("#err");
        e.textContent="";
    } catch(err){
        let e=document.querySelector("#err");
        e.textContent="no such place";
    }
})