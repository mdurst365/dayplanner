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
input_nineAM.value = localStorage.getItem('content2');
//when the Save button is clicked, store the input of the textarea
saveNineAM.addEventListener('click', updateOutput2);
//sets the input of text area into local storage
function updateOutput2() {
    localStorage.setItem('content2', input_nineAM.value);
}

var input_tenAM = document.querySelector('#tenAM');
var saveTenAM = document.querySelector('#saveTenAM');
//retrieves previously save text to display
input_tenAM.value = localStorage.getItem('content3');
//when the Save button is clicked, store the input of the textarea
saveTenAM.addEventListener('click', updateOutput3);
//sets the input of text area into local storage
function updateOutput3() {
    localStorage.setItem('content3', input_tenAM.value);
}

var input_elevenAM = document.querySelector('#elevenAM');
var saveElevenAM = document.querySelector('#saveElevenAM');
//retrieves previously save text to display
input_elevenAM.value = localStorage.getItem('content4');
//when the Save button is clicked, store the input of the textarea
saveElevenAM.addEventListener('click', updateOutput4);
//sets the input of text area into local storage
function updateOutput4() {
    localStorage.setItem('content4', input_elevenAM.value);
}

var input_twelvePM = document.querySelector('#twelvePM');
var saveTwelvePM = document.querySelector('#saveTwelvePM');
//retrieves previously save text to display
input_twelvePM.value = localStorage.getItem('content5');
//when the Save button is clicked, store the input of the textarea
saveTwelvePM.addEventListener('click', updateOutput5);
//sets the input of text area into local storage
function updateOutput5() {
    localStorage.setItem('content5', input_twelvePM.value);
}

var input_onePM = document.querySelector('#onePM');
var saveOnePM = document.querySelector('#saveOnePM');
//retrieves previously save text to display
input_onePM.value = localStorage.getItem('content6');
//when the Save button is clicked, store the input of the textarea
saveOnePM.addEventListener('click', updateOutput6);
//sets the input of text area into local storage
function updateOutput6() {
    localStorage.setItem('content6', input_onePM.value);
}

var input_twoPM = document.querySelector('#twoPM');
var saveTwoPM = document.querySelector('#saveTwoPM');
//retrieves previously save text to display
input_twoPM.value = localStorage.getItem('content7');
//when the Save button is clicked, store the input of the textarea
saveTwoPM.addEventListener('click', updateOutput7);
//sets the input of text area into local storage
function updateOutput7() {
    localStorage.setItem('content7', input_twoPM.value);
}

var input_threePM = document.querySelector('#threePM');
var saveThreePM = document.querySelector('#saveThreePM');
//retrieves previously save text to display
input_threePM.value = localStorage.getItem('content8');
//when the Save button is clicked, store the input of the textarea
saveThreePM.addEventListener('click', updateOutput8);
//sets the input of text area into local storage
function updateOutput8() {
    localStorage.setItem('content8', input_threePM.value);
}

var input_fourPM = document.querySelector('#fourPM');
var saveFourPM = document.querySelector('#saveFourPM');
//retrieves previously save text to display
input_fourPM.value = localStorage.getItem('content9');
//when the Save button is clicked, store the input of the textarea
saveFourPM.addEventListener('click', updateOutput9);
//sets the input of text area into local storage
function updateOutput9() {
    localStorage.setItem('content9', input_fourPM.value);
}

var input_fivePM = document.querySelector('#fivePM');
var saveFivePM = document.querySelector('#saveFivePM');
//retrieves previously save text to display
input_fivePM.value = localStorage.getItem('content10');
//when the Save button is clicked, store the input of the textarea
saveFivePM.addEventListener('click', updateOutput10);
//sets the input of text area into local storage
function updateOutput10() {
    localStorage.setItem('content10', input_fivePM.value);
}

//on click clear all saved data and refresh page
$("#clear").click(function() {
    localStorage.clear();
    location.reload()
});

//color code past, present and future
var now= new Date().getHours();

if (now > 8) {
    $("#eightAM").addClass("past");
	}	
    else if (now >= 8 && now < 9) {
        $("#eightAM").addClass("present");
	}
    else if (now < 8) {
        $("#eightAM").addClass("future");
	}

if (now > 9) {
    $("#nineAM").addClass("past");
	}	
    else if (now >= 9 && now < 10) {
        $("#nineAM").addClass("present");
	}
    else if (now < 9) {
        $("#nineAM").addClass("future");
	}

if (now > 10) {
    $("#tenAM").addClass("past");
	}	
    else if (now >= 10 && now < 11) {
        $("#tenAM").addClass("present");
	}
    else if (now < 10) {
        $("#tenAM").addClass("future");
	}

if (now > 11) {
    $("#elevenAM").addClass("past");
	}	
    else if (now >= 11 && now < 12) {
        $("#elevenAM").addClass("present");
	}
    else if (now < 12) {
        $("#elevenAM").addClass("future");
	}

if (now > 12) {
    $("#twelvePM").addClass("past");
	}	
    else if (now >= 12 && now < 13) {
        $("#twelvePM").addClass("present");
	}
    else if (now < 12) {
        $("#twelvePM").addClass("future");
	}

if (now > 13) {
    $("#onePM").addClass("past");
	}	
    else if (now >= 13 && now < 14) {
        $("#onePM").addClass("present");
	}
    else if (now < 14) {
        $("#onePM").addClass("future");
	}

if (now > 14) {
    $("#twoPM").addClass("past");
	}	
    else if (now >= 14 && now < 15) {
        $("#twoPM").addClass("present");
	}
    else if (now < 15) {
        $("#twoPM").addClass("future");
	}

if (now > 15) {
    $("#threePM").addClass("past");
	}	
    else if (now >= 15 && now < 16) {
        $("#threePM").addClass("present");
	}
    else if (now < 16) {
        $("#threePM").addClass("future");
	}

if (now > 16) {
    $("#fourPM").addClass("past");
	}	
    else if (now >= 16 && now < 17) {
        $("#fourPM").addClass("present");
	}
    else if (now < 16) {
        $("#fourPM").addClass("future");
	}

if (now > 17) {
    $("#fivePM").addClass("past");
	}	
    else if (now >= 16 && now < 17) {
        $("#fivePM").addClass("present");
	}
    else if (now < 16) {
        $("#fivePM").addClass("future");
	}
