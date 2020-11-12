// JavaScript Document

//Dynamic day of the week displayed at top of schedule
//updated to use moment.js
$(document).ready(function() {
// populates current date when dom is loaded
var dateParagraph = $("#currentDay");
var todayDate = moment().format('dddd, MMMM Do YYYY');
dateParagraph.text(todayDate);
});

//telling the user that their content is saved
$(".saveBtn").click(function(){
  alert("Content Saved");
});

//actually saving the content
var input_eightAM = document.querySelector('#eightAM');
var saveEightAM = document.querySelector('#saveEightAM');
//retrieves previously save text to display
input_eightAM.value = localStorage.getItem('content1');
//when the Save button is clicked, store the input of the textarea
saveEightAM.addEventListener('click', updateOutput1);
//sets the input of text area into local storage
function updateOutput1() {
    localStorage.setItem('content1', input_eightAM.value);
}

var input_nineAM = document.querySelector('#nineAM');
var saveNineAM = document.querySelector('#saveNineAM');
//retrieves previously save text to display
input_nineAM.value = localStorage.getItem('content1');
//when the Save button is clicked, store the input of the textarea
saveNineAM.addEventListener('click', updateOutput2);
//sets the input of text area into local storage
function updateOutput2() {
    localStorage.setItem('content2', input_nineAM.value);
}