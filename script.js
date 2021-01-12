const container = $('.container');
const seats = $('.row .seat:not(.occupied)');
const count = $('#count');
const total = $('#total');
const movieSelect = $('#movie');
let ticketPrice = parseInt(movieSelect.val());

// Seat click event
container.click(function(e) {
    if ($(e.target).hasClass('seat') && !$(e.target).hasClass('occupied')) {
        $(e.target).toggleClass('selected');

        updateSelectedCount();
    }
});