/* jshint esversion: 6 */

let clickCount = 0;
let answer = Math.floor(Math.random() * 10)+ 1;

$( document ).ready(readyNow);

function readyNow(){
  $('#submit').on('click', addToDom);
}

function addToDom(){
  let blue = $('#guess').val();
  console.log(blue);
  clickCount ++;
  console.log(clickCount, answer);
  if( blue > answer){
    $('#hotCold').empty();
    $('#hotCold').append("lower");
    $('.container').css("background-color", "yellow");
  } else if (blue < answer){
    $('#hotCold').empty();
    $('#hotCold').append("higher");
    $('.container').css("background-color", "orange");
  } else {
    $('#hotCold').empty();
    $('#hotCold').append("correct");
    $('.container').css("background-color", "green");
  }
}
