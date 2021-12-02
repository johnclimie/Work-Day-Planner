//Declare Variables
var now = moment();
var hour = now.hour();
var hoursList = $("#hoursList").children();
var date = $("#date");
var clear = $("#clear");

//Set Date on Page to Current Date
date.text(moment().format('MMMM Do YYYY'))

//Function for Color Change in Relation of Time Through Schedule
hoursList.each(function() {
    if (this.dataset.time == hour) {
        $(this).find('input').addClass("currenthour text-light");
    }

    if (this.dataset.time < hour) {
        $(this).find('input').addClass("pasthour text-light");
    }

    if (this.dataset.time > hour) {
        $(this).find('input').addClass("futurehour text-light");
    }
})

//Sets the Input Box to the Local Storage that it Corresponds With
$("#input1").val(localStorage.getItem("in1"));
$("#input2").val(localStorage.getItem("in2"));
$("#input3").val(localStorage.getItem("in3"));
$("#input4").val(localStorage.getItem("in4"));
$("#input5").val(localStorage.getItem("in5"));
$("#input6").val(localStorage.getItem("in6"));
$("#input7").val(localStorage.getItem("in7"));
$("#input8").val(localStorage.getItem("in8"));
$("#input9").val(localStorage.getItem("in9"));

//Sets the Text Input to Local Storage
$(document).ready(function () {
    $('#button1').click(function() {
        localStorage.setItem("in1", $("#input1").val());
    })
    $('#button2').click(function() {
        localStorage.setItem("in2", $("#input2").val());
    })
    $('#button3').click(function() {
        localStorage.setItem("in3", $("#input3").val());
    })
    $('#button4').click(function() {
        localStorage.setItem("in4", $("#input4").val());
    })
    $('#button5').click(function() {
        localStorage.setItem("in5", $("#input5").val());
    })
    $('#button6').click(function() {
        localStorage.setItem("in6", $("#input6").val());
    })
    $('#button7').click(function() {
        localStorage.setItem("in7", $("#input7").val());
    })
    $('#button8').click(function() {
        localStorage.setItem("in8", $("#input8").val());
    })
    $('#button9').click(function() {
        localStorage.setItem("in9", $("#input9").val());
    })
})

//Button that Clears Local Storage and Refreshes Page
clear.click(function() {
    localStorage.clear();
    location.reload();
})