var city="Toronto";
var currentH1El=document.querySelector("#currentcity");
var currentImgEl=document.querySelector("#currentimg");
var getCoordinates = function(city){

var apiUrl="http://api.openweathermap.org/geo/1.0/direct?q="+city+"&appid=36cf548e4720f5cb0d8e91c0678423fe";

fetch(apiUrl).then(function(response){
    if(response.ok){
        response.json().then(function(data){
            getWeatherData(data[0].lat,data[0].lon);
        });
    }
    else{
        alert('Error: City Not Found');
    }
});
};

var getWeatherData = function(lat,lon){
var apiUrl ="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=hourly,minutely&units=imperial&appid=36cf548e4720f5cb0d8e91c0678423fe";   

fetch(apiUrl).then(function(response){
    if(response.ok){
        response.json().then(function(data){
                  var today = moment.unix(data.current.dt).format("MM/DD/YYYY");
                  currentH1El.textContent=data.timezone+" ("+today+")";
                  currentImgEl.setAttribute("src","http://openweathermap.org/img/wn/10d.png");
                  currentImgEl.setAttribute("style","width=50px height=50px");
        });
    }
    else{

        alert("Error");
    }
});

};


getCoordinates(city);