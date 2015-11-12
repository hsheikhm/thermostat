$( document ).ready(function() {

thermostat = new Thermostat();

$("#current-temp").prepend(thermostat.currentTemp);
$("#psm").prepend(thermostat.powerSaving);

$(document).on("click", "#up-temp", function() {
  thermostat.upTemp();
  $("#current-temp").text(thermostat.currentTemp);
});

$(document).on("click", "#down-temp", function() {
  thermostat.downTemp();
  $("#current-temp").text(thermostat.currentTemp);
});

$(document).on("click", "#reset-temp", function() {
  thermostat.resetTemp();
  $("#current-temp").text(thermostat.currentTemp);
});

$(document).on("click", "#power-switch", function() {
  thermostat.powerSavingSwitch();
  $("#psm").text(thermostat.powerSaving);
});

});
