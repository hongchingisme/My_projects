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

function updateSelectedCount(){
    const selectedSeats = $('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;
    
    count.text(selectedSeatsCount);

    total.text(selectedSeats.length *ticketPrice );

}


movieSelect.change(function(e){
    ticketPrice =  parseInt($(this).val());
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})
