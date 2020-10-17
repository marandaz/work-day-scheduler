let dateEl = $("#currentDay");
let containerEl = $(".container");
let inputEl = $("input");
let buttonEl = $(".saveBtn");
let currentTime = moment().format('MMMM Do YYYY, h:mm:ss');
// let currentTime = timeVar.format("HH");
// let timeVar = moment();
// console.log(currentTime);
// dateEl.innerHTML = timeVar.format("dddd, MMMM Do");


// 1. Open planner, current time and day displays at the top.

dateEl.append(currentTime);
console.log(moment().format("LT"));
console.log($(inputEl));

$(document).ready(function () {

    // Tasks:
    $("input").each(function () {
        console.log(this)
        var currentTime = parseInt($(this).attr("id"));
        var current = moment().hour();
        console.log(localStorage.getItem(currentTime));

        $(this).val(localStorage.getItem(currentTime) || "");

        // a. If time slot is the past time, it'll be gray.
        if (currentTime < current) {
            $(this).addClass("past");
        

            // b. If time slot is in the present, it'll be red.
        } else if (current === currentTime) {
            $(this).addClass("present");

            // c. If time slot is in the future, it'll be green.
        } else {
            $(this).addClass("future");
        }
    });

  //  Save to store to local storage.
    $(buttonEl).on("click", function (event) {
        event.preventDefault();

        var task = $(this).siblings("input").val()
        var hour = $(this).siblings("input").attr("id")
        localStorage.setItem(hour, task);
    });
});