// JavaScript Document

/**
 * Function takes in a Date object and returns the day of the week in a text format.
 */
function getWeekDay(date){
    //Create an array containing each day, starting with Sunday.
    var weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
    //Use the getDay() method to get the day.
    var day = date.getDay();
    //Return the element that corresponds to that index.
    return weekdays[day];
}

//The current weekday in a text format.
var date = new Date();
var weekDay = getWeekDay(date);
document.getElementById("currentDay").innerHTML = weekDay;