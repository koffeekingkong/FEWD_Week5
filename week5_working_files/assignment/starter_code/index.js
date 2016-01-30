$(document).ready(function() {});

function changeCity() {
  var city = $("#city-type").val();
  $("#city-type").val(''); //sets the input field to empty
  city = city.toLowerCase().trim();
  // trim will remove white space

  if (city === "NYC" || city === "nyc" || city === "New York City") {
    $("body").attr("class", "nyc");
    //attr cleans out the class and replacing it with just the one you want - in this case its nyc//
    // console.log(city);

  } else if (city === "sf" || city === "Bay Area") {
    $("body").attr("class", "sf");


  } else if (city === "la" || city === "Los Angeles") {
    $("body").attr("class", "la");


  } else if (city === "austin" || city === "ATX") {
    $("body").attr("class", "austin");


  } else if (city === "sydney" || city === "SYD") {
    $("body").attr("class", "sydney");

  } else {
    alert("Please enter a city name.")
  }
  event.preventDefault();
}

$("#submit-btn").click(changeCity);
