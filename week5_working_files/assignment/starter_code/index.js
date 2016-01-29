$(document).ready(function() {});

function changeCity() {
  var city = $("#city-type").val();

  if (city === "NYC" || city === "nyc" || city === "New York City") {
    $("body").addClass("nyc");
    $("body").removeClass("sf", "la", "austin", "sydney");


  } else if (city ==="SF" || city === "Bay Area") {
    $("body").addClass("sf");
    $("body").removeClass("nyc", "la", "austin", "sydney");


  } else if (city ===  "LA" || city === "Los Angeles") {
    $("body").addClass("la");
    $("body").removeClass("sf", "nyc", "austin", "sydney");


  } else if (city === "AUSTIN" || city === "ATX") {
    $("body").addClass("austin");
    $("body").removeClass("sf", "la", "nyc", "sydney");


  } else if (city === "SYDNEY" || city === "SYD") {
    $("body").addClass("sydney");
    $("body").removeClass("sf", "la", "austin", "nyc");

  } else {
    alert("Please enter a city name.")
  }
  event.preventDefault();
}

$("#submit-btn").click(changeCity);
