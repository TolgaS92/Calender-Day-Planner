//time, date, day variables
const time = moment().format('H:mm a');
const date = moment().format("MMMM Do YYYY");
const day = moment().format('dddd');

//to catch real time
const currentHour = moment().format('H');

// schedule hours
const hour = [
    "08.00 AM",
    "09.00 AM",
    "10.00 AM",
    "11.00 AM",
    "12.00 PM",
    "13.00 PM",
    "14.00 PM",
    "15.00 PM",
    "16.00 PM",
    "17.00 PM",
    "18.00 PM",
    "19.00 PM",
    "20.00 PM",
    "21.00 PM",
    "22.00 PM"
]

// time, date, day variables prints to html
$("#currentTime").text(time);
$("#currentDate").text(date);
$("#currentDay").text(day);



//for loop for the every hour, creating div-p, and the save button
for (var i = 0; i < hour.length; i++) {
    //All block for the scheduler div's
    let timeBlockDiv = $("<div>");
    //for hour variable
    let pTag = $("<p>");
    // to catch the actual time zone hour variable starts with 8am = 0+8 = i + 8
    let hr = i + 8;
    timeBlockDiv.addClass("row time-block hour");
    timeBlockDiv.attr("data-hour", hour[i]);
    pTag.text(hour[i]).addClass("col-sm-2 hour");
    //console.log(this);

    // textarea
    let note = $("<textarea>").addClass(`col-sm-8 textarea-${i + 8} textbox`);
    // savebutton 
    let save = $("<div>").addClass("col-sm-2 saveBtn").attr("data-hour", hour[i]).text("Save");

    // Appending the buttons that created on line 40, 49, 51---
    timeBlockDiv.append(pTag, note, save);
    $(".container").append(timeBlockDiv);
    //console.log(timeBlockDiv);


    //if - else conditions
    if (hr < currentHour) {
        console.log("past time");
        timeBlockDiv.addClass("past");
    }
    else if (hr > currentHour) {
        console.log("future time");
        timeBlockDiv.addClass("future");
    }
    else {
        console.log("present time");
        timeBlockDiv.addClass("present");
    }

}

$(".saveBtn").on("click", function () {
    //console.log($(this).data("hour")); // it gets the actual hour..
    let infoKey = $(this).data("hour");
    //It gets first two digits of the time..
    let firstTwo = infoKey.slice(0, 2);
    console.log(firstTwo);
    let textInit = $(`.textarea-${firstTwo}`).val();
    console.log(textInit);
    //console.log(infoValue);
    window.localStorage.setItem(firstTwo, textInit);

    $(`.textarea-${firstTwo}`).on("click", function (event) {
        event.preventDefault();

        window.localStorage.getItem(firstTwo, textInit);

    });

});

