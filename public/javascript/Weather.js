if("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    loadWeather(position.coords.latitude + ',' + position.coords.longitude);
  });
} else {
  loadWeather("London, UK", "");
}

$(document).ready(function() {
  setInterval(loadWeather, 10000);
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {
      city = weather.city;
      temp = weather.temp+'&deg;';
      wcode = '<img class="weathericon" src="../public/images/weathericons/' +
      weather.code + '.svg">';
      wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
      humidity = weather.humidity + ' %';

      $(".location").text(city);
      $(".temperature").html(temp);
      $(".climate_bg").html(wcode);
      $(".windspeed").html(wind);
      $(".humidity").text(humidity);
    },

    error: function(error) {
      $(".error").html('<p>' + error + '</p>');
    }
  });
}

function codeAddress() {
    var address = document.getElementById("my-address").value;
    loadWeather(address, "");
  }
