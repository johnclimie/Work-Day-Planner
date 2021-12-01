var now = moment();
var hour = now.hour();
var hoursList = $("#hoursList").children();
var date = $("#date");

date.text(moment().format('MMMM Do YYYY'))



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


$(document).ready(function () {
    $('#button1').click(function() {
        console.log($('#input1').val());
    })
    $('#button2').click(function() {
        console.log("test2");
    })
    $('#button3').click(function() {
        console.log("test3");
    })
    $('#button4').click(function() {
        console.log("test4");
    })
    $('#button5').click(function() {
        console.log("test5");
    })
    $('#button6').click(function() {
        console.log("test6");
    })
    $('#button7').click(function() {
        console.log("test7");
    })
    $('#button8').click(function() {
        console.log("test8");
    })
    $('#button9').click(function() {
        console.log("test9");
    })
})