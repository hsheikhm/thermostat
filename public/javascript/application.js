$(document).ready(function() {

thermostat = new Thermostat();

$("#current-temp").prepend(thermostat.currentTemp).css('color', thermostat.colorDisplay);
$("#psm").prepend(thermostat.powerSaving);

$(document).on("click", "#up-temp", function() {
  thermostat.upTemp();
  thermostat.colorDisplayCheck();
  $("#current-temp").text(thermostat.currentTemp).css('color', thermostat.colorDisplay);
});

$(document).on("click", "#down-temp", function() {
  thermostat.downTemp();
  thermostat.colorDisplayCheck();
  $("#current-temp").text(thermostat.currentTemp).css('color', thermostat.colorDisplay);
});

$(document).on("click", "#reset-temp", function() {
  thermostat.resetTemp();
  thermostat.colorDisplayCheck();
  $("#current-temp").text(thermostat.currentTemp).css('color', thermostat.colorDisplay);
});

$(document).on("click", "#power-switch", function() {
  thermostat.powerSavingSwitch();
  thermostat.colorDisplayCheck();
  $("#psm").text(thermostat.powerSaving);
});

});
