// JavaScript Document

//Dynamic day of the week displayed at top of schedule
//updated to use moment.js
$(document).ready(function() {
// populates current date when dom is loaded
var dateParagraph = $("#currentDay");
var todayDate = moment().format('dddd, MMMM Do YYYY');
dateParagraph.text(todayDate);
});
