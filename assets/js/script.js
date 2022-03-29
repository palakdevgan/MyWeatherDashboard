var city="Toronto";

var getCoordinates = function(city){

var apiUrl="http://api.openweathermap.org/geo/1.0/direct?q="+city+"&appid=36cf548e4720f5cb0d8e91c0678423fe";

fetch(apiUrl).then(function(response){
    if(response.ok){
        response.json().then(function(data){
            getWeatherData(data.lat,data.lon);
        });
    }
    else{
        alert('Error: City Not Found');
    }
});
};

var getWeatherData = function(lat,lon){
var apiUrl ="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"exclude=hourly,minutely&units=imperial&appid=36cf548e4720f5cb0d8e91c0678423fe";   

fetch(apiUrl).then(function(response){
    if(response.ok){
        response.json().then(function(data){
                  console.log(data);
        });
    }
    else{

        alert("Error");
    }
});

};


getCoordinates(city);