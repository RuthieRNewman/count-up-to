$(document).ready(function(){
  $("form#counter").submit(function(event){
    event.preventDefault();

  const countto=parseInt($("#num1").val());
  const countby=parseInt($("#num2").val()); 


  //function countUpByCalculator(countto,countby)
    for (let index= countby; index <= countto; index += countby) {
      console.log(index);
   // alert (index);
    $("#output").append("<li>" + index + "</li>");
  }
  })