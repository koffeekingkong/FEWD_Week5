var total = 0;

function setToZero(){
  total = 0;

  $("#result").html(total);

}

function addFive(){
  total = total + 5;

  $("#result").html(total);
}

function addTen(){
  total = total + 10;

  $("#result").html(total);
}

function subtractOne(){
  total = total - 1;

  $("#result").html(total);
}

$("#zero").click(setToZero);
$("#add5").click(addFive);
$("#add10").click(addTen);
$("#sub1").click(subtractOne);


  // $("#result").html("a whole new world~");
