rows = 32;
cols = 32;

$(document).ready(function() {
    handleClearGrid();
    makeGrid(rows, cols);
});

function makeGrid(rows, cols) {
    for (var i = 0; i < rows; i++) {
        var row = '<div class="row">';
        for (var j = 0; j < cols; j++) {
            row += '<div class="square"></div>';
        }
        $('#grid').append(row);
    }
    var gridWidth = $('#grid').width();
    var gridHeight = $('#grid').height();

    var squares = $('.square');
    var sideWidth = (gridWidth / rows) -
                                 2 * parseInt(squares.css("border-left-width"));
    var sideHeight = (gridHeight / cols) -
                                 2 * parseInt(squares.css('border-left-width'));
    squares.width(sideWidth);
    squares.height(sideHeight);

    squares.hover(function() {
        $(this).addClass("black");
    });
}

function handleClearGrid() {
    $('#cleargrid').click(function(event) {
        event.preventDefault();
        $('.square').removeClass('black');
        cols = parseInt(prompt("Enter number of rows"));
        rows = parseInt(prompt("Enter number of columns"));
        $('#grid').empty();
        makeGrid(rows, cols);
    });
}
