// JavaScript Document

//Dynamic day of the week displayed at top of schedule
//updated to use moment.js
$(document).ready(function() {
// populates current date when dom is loaded
var dateParagraph = $("#currentDay");
var todayDate = moment().format('dddd, MMMM Do YYYY');
dateParagraph.text(todayDate);
});

//Save User Input
var input_textarea1 = document.querySelector('#event1');
var save_button1 = document.querySelector('#saveEvent1');
//get saved text to display
input_textarea1.value = localStorage.getItem('content1');
//when Save button is clicked - store textarea input
saveEvent1.addEventListener('click', updateOutput1);
//keep text area input in local storage
function updateOutput1() {
    localStorage.setItem('content1', input_textarea1.value);
};

/*I am sure there is a shorter way to write this 
but I will repeat it with each timebox entry anyway because
that code works */
