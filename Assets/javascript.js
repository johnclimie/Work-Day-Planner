var now = moment();
var hour = now.hour();
var hoursList = $("#hoursList").children();
var date = $("#date");

date.text(moment().format('MMMM Do YYYY'))



hoursList.each(function() {
    if (this.dataset.time == hour) {
        $(this).find('input').addClass("bg-info");

    }

    if (this.dataset.time < hour) {
        $(this).find('input').addClass("bg-dark text-light");
    }

})
















