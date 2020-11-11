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

var input_textarea2 = document.querySelector('#event2');
var save_button2 = document.querySelector('#saveEvent2');
//get saved text to display
input_textarea2.value = localStorage.getItem('content2');
//when Save button is clicked - store textarea input
saveEvent2.addEventListener('click', updateOutput2);
//keep text area input in local storage
function updateOutput1() {
    localStorage.setItem('content2', input_textarea1.value);
};

var input_textarea3 = document.querySelector('#event3');
var save_button3 = document.querySelector('#saveEvent3');
//get saved text to display
input_textarea3.value = localStorage.getItem('content3');
//when Save button is clicked - store textarea input
saveEvent2.addEventListener('click', updateOutput3);
//keep text area input in local storage
function updateOutput1() {
    localStorage.setItem('content3', input_textarea1.value);
};

//placeholder for additional saves

//4

//5

//6

//7

//8

//9
