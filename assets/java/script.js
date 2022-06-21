// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//the current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// define save button
var saveBtn = $('.saveBtn');

// each timeblock is color coded to indicate whether it is in the past, present, or future

function timeColor() {
    var hour = moment().hours();
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
        console.log(this)
        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// click the save button for that time block
saveBtn.on("click", function() {

    console.log(this)
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // the text for that event is saved in local storage
    localStorage.setItem(time, plan);
});

// WHEN I refresh the page
// THEN the saved events persist
function planner() {
    $(".hour").each(function() {
    var currentHour = $(this).text();
    console.log (this);
    var currentPlan = localStorage.getItem(currentHour);
    if(currentPlan !== null) {
        $(this).siblings(".plan").val(currentPlan);
    }
});
}

// calling the function
timeColor();
planner ();