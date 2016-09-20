$(document).ready(function() {
    var rows = 16;
    var cols = 16;
    var gridWidth = $('#grid').width();
    var gridHeight = $('#grid').height();
    makeGrid(rows, cols);
    var squares = $('.square');
    var sideLength = (gridWidth / cols) -
                                 2 * parseInt(squares.css("border-left-width"));
    $('.square').width(sideLength);
    $('.square').height(sideLength);

});

function makeGrid(rows, cols) {
    for (var i = 0; i < rows; i++) {
        var row = '<div class="row">';
        for (var j = 0; j < cols; j++) {
            row += '<div class="square"></div>';
        }
        $('#grid').append(row);
    }
}
