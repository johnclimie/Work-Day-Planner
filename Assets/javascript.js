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


$("hoursList").each().ready(function() {
    $('.btn').click(function() {
        console.log(this);
    })
})