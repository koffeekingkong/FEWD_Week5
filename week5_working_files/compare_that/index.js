

function compareNumbers(){
  //get the value of input #a and input #b
  var a =  $("#a").val();
  var b =  $("#b").val();

  a = Number(a);
  b = Number(b);

  var comparison = $("#comparison");

if ( a > b ){
    //if a is greater than b
    comparison.html('>');
  }else if ( a < b ){
    //if a is lesser than b
    comparison.html('<');
  }else if ( a === b ){
    //if a is equal to b
    comparison.html('===');
  }else{
    //something else that is not right
    comparison.html('NaN')
  }
}

$( "#submit" ).click(compareNumbers);
