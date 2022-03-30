var searchFormEl = document.querySelector("#search-form");
var city = document.querySelector("#searchcity");
var currentH1El=document.querySelector("#currentcity");
var currentImgEl=document.querySelector(".currenttitle > img");
var currentTempEl=document.querySelector("#currenttemp");
var currentWindEl=document.querySelector("#currentwind");
var currentHumidityEl=document.querySelector("#currenthumidity");
var currentUVIEl=document.querySelector("#currentuvi");

var day1DateEl=document.querySelector("#day1date");
var day1ImgEl=document.querySelector("#day1img");
var day1TempEl=document.querySelector("#day1temp");
var day1WindEl=document.querySelector("#day1wind");
var day1HumidityEl=document.querySelector("#day1humidity");

var day2DateEl=document.querySelector("#day2date");
var day2ImgEl=document.querySelector("#day2img");
var day2TempEl=document.querySelector("#day2temp");
var day2WindEl=document.querySelector("#day2wind");
var day2HumidityEl=document.querySelector("#day2humidity");

var day3DateEl=document.querySelector("#day3date");
var day3ImgEl=document.querySelector("#day3img");
var day3TempEl=document.querySelector("#day3temp");
var day3WindEl=document.querySelector("#day3wind");
var day3HumidityEl=document.querySelector("#day3humidity");

var day4DateEl=document.querySelector("#day4date");
var day4ImgEl=document.querySelector("#day4img");
var day4TempEl=document.querySelector("#day4temp");
var day4WindEl=document.querySelector("#day4wind");
var day4HumidityEl=document.querySelector("#day4humidity");

var day5DateEl=document.querySelector("#day5date");
var day5ImgEl=document.querySelector("#day5img");
var day5TempEl=document.querySelector("#day5temp");
var day5WindEl=document.querySelector("#day5wind");
var day5HumidityEl=document.querySelector("#day5humidity");

var getCoordinates = function(city){

var apiUrl="https://api.openweathermap.org/geo/1.0/direct?q="+city+"&appid=36cf548e4720f5cb0d8e91c0678423fe";

fetch(apiUrl).then(function(response){
    if(response.ok){
        response.json().then(function(data){
            getWeatherData(data[0].lat,data[0].lon,city);
        });
    }
    else{
        alert('Error: City Not Found');
    }
});
};

var getWeatherData = function(lat,lon,city){
var apiUrl ="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=hourly,minutely&units=imperial&appid=36cf548e4720f5cb0d8e91c0678423fe";   

fetch(apiUrl).then(function(response){
    if(response.ok){
        response.json().then(function(data){
                  var today = moment.unix(data.current.dt).format("MM/DD/YYYY");
                  currentH1El.textContent=(city[0].toUpperCase() + city.substring(1))+" ("+today+")";
                  currentImgEl.setAttribute("src","https://openweathermap.org/img/wn/"+data.current.weather[0].icon+".png");
                  currentImgEl.setAttribute("style","width:50px;height:50px");
                  document.querySelector(".currenttitle").setAttribute("style","display:flex;align-items:center");
                  currentTempEl.innerHTML="Temp: "+data.current.temp+"&#8457";
                  currentWindEl.textContent="Wind: "+data.current.wind_speed+" MPH";
                  currentHumidityEl.textContent="Humidity: "+data.current.humidity+" %";
                  currentUVIEl.textContent=data.current.uvi;
                  if(data.current.uvi < 3){
                    currentUVIEl.classList.add("btn-success");
                  }
                  else if(data.current.uvi < 7){
                    currentUVIEl.classList.add("btn-warning");
                  }
                  else{
                    currentUVIEl.classList.add("btn-danger");
                  }

                
                  var day1 = moment.unix(data.daily[1].dt).format("MM/DD/YYYY");
                  day1DateEl.textContent=day1;
                  day1ImgEl.setAttribute("src","https://openweathermap.org/img/wn/"+data.daily[1].weather[0].icon+".png");
                  day1ImgEl.setAttribute("style","width=60px;height=60px");
                  day1TempEl.innerHTML="Temp: "+data.daily[1].temp.day+"&#8457";
                  day1WindEl.textContent="Wind: "+data.daily[1].wind_speed+" MPH";
                  day1HumidityEl.textContent="Humidity: "+data.daily[1].humidity+" %";

                  var day2 = moment.unix(data.daily[2].dt).format("MM/DD/YYYY");
                  day2DateEl.textContent=day2;
                  day2ImgEl.setAttribute("src","https://openweathermap.org/img/wn/"+data.daily[2].weather[0].icon+".png");
                  day2ImgEl.setAttribute("style","width=60px;height=60px");
                  day2TempEl.innerHTML="Temp: "+data.daily[2].temp.day+"&#8457";
                  day2WindEl.textContent="Wind: "+data.daily[2].wind_speed+" MPH";
                  day2HumidityEl.textContent="Humidity: "+data.daily[2].humidity+" %";

                  var day3 = moment.unix(data.daily[3].dt).format("MM/DD/YYYY");
                  day3DateEl.textContent=day3;
                  day3ImgEl.setAttribute("src","https://openweathermap.org/img/wn/"+data.daily[3].weather[0].icon+".png");
                  day3ImgEl.setAttribute("style","width=60px;height=60px");
                  day3TempEl.innerHTML="Temp: "+data.daily[3].temp.day+"&#8457";
                  day3WindEl.textContent="Wind: "+data.daily[3].wind_speed+" MPH";
                  day3HumidityEl.textContent="Humidity: "+data.daily[3].humidity+" %";

                  var day4 = moment.unix(data.daily[4].dt).format("MM/DD/YYYY");
                  day4DateEl.textContent=day4;
                  day4ImgEl.setAttribute("src","https://openweathermap.org/img/wn/"+data.daily[4].weather[0].icon+".png");
                  day4ImgEl.setAttribute("style","width=60px;height=60px");
                  day4TempEl.innerHTML="Temp: "+data.daily[4].temp.day+"&#8457";
                  day4WindEl.textContent="Wind: "+data.daily[4].wind_speed+" MPH";
                  day4HumidityEl.textContent="Humidity: "+data.daily[4].humidity+" %";

                  var day5 = moment.unix(data.daily[5].dt).format("MM/DD/YYYY");
                  day5DateEl.textContent=day5;
                  day5ImgEl.setAttribute("src","https://openweathermap.org/img/wn/"+data.daily[5].weather[0].icon+".png");
                  day5ImgEl.setAttribute("style","width=60px;height=60px");
                  day5TempEl.innerHTML="Temp: "+data.daily[5].temp.day+"&#8457";
                  day5WindEl.textContent="Wind: "+data.daily[5].wind_speed+" MPH";
                  day5HumidityEl.textContent="Humidity: "+data.daily[5].humidity+" %";


        });
    }
    else{

        alert("Error");
    }
});

};

var formSubmitHandler = function(event) {
    event.preventDefault();
    
    var cityName = city.value.trim();

    if(cityName){
        getCoordinates(cityName);
        city.value="";
    }
    else{
        alert("Please enter a City Name");
    }
  };


searchFormEl.addEventListener("submit", formSubmitHandler);
