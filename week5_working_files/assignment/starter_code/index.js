$(document).ready(function() {});

function changeCity() {
  var city = $("#city-type").val();
  $("#city-type").val(''); //sets the input field to empty
  city = city.toLowerCase().trim();
  //trim will remove white space

  if (city === "NYC" || city === "nyc" || city === "new york city") {
    $("body").attr("class", "nyc");
    //attr cleans out the class and replacing it with just the one you want - in this case its nyc//
    // console.log(city);

  } else if (city === "sf" || city === "bay area" || city === "san francisco") {
    $("body").attr("class", "sf");


  } else if (city === "la" || city === "los angeles") {
    $("body").attr("class", "la");


  } else if (city === "austin" || city === "atx") {
    $("body").attr("class", "austin");


  } else if (city === "sydney" || city === "syd") {
    $("body").attr("class", "sydney");

  } else {
    alert("Please enter a city name.")
  }
  event.preventDefault();
}

$("#submit-btn").click(changeCity);
