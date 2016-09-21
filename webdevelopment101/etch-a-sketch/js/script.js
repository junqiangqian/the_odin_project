$(document).ready(function() {
    var rows = 16;
    var cols = 16;
    var gridWidth = $('#grid').width();
    var gridHeight = $('#grid').height();
    makeGrid(rows, cols);
    var squares = $('.square');
    var sideWidth = (gridWidth / rows) -
                                 2 * parseInt(squares.css("border-left-width"));
    var sideHeight = (gridHeight / cols) -
                                 2 * parseInt(squares.css('border-left-width'));
    squares.width(sideWidth);
    squares.height(sideHeight);

    squares.on('mouseenter', function() {
        $(this).addClass("black");
    });

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
