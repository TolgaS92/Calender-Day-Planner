//time, date, day variables
const time = moment().format('h:mm a');
const date = moment().format("MMMM Do YYYY");
const day = moment().format('dddd');
// schedule hours
const hour = [
    "09.00 AM",
    "10.00 AM",
    "11.00 AM",
    "12.00 PM",
    "01.00 PM",
    "02.00 PM",
    "03.00 PM",
    "04.00 PM",
    "05.00 PM",
    "06.00 PM",
    "07.00 PM",
    "08.00 PM",
]

// time, date, day variables prints to html
$("#currentTime").text(time);
$("#currentDate").text(date);
$("#currentDay").text(day);

for (var i = 0; i < hour.length; i++) {
    var timeBlockDiv = $("<div>");
    var pTag = $("<p>");
    timeBlockDiv.addClass("row time-block hour");
    timeBlockDiv.attr("data-hour", hour[i]);
    pTag.text(hour[i]).addClass("col-sm-2 hour");
    //console.log(this);

    //if else statement
    //if()
    var note = $("<textarea>").addClass("col-sm-8 textarea");

    var save = $("<div>").addClass("col-sm-2 saveBtn").text("Save");

    timeBlockDiv.append(pTag, note, save);
    $(".container").append(timeBlockDiv);
    //console.log(this);
}