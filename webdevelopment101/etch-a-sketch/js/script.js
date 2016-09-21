rows = 32;
cols = 32;

mode = handleDefaultMode;

$(document).ready(function() {
    $('#cleargrid').click(handleClearGrid);
    $('#default').click(function() {
        mode = handleDefaultMode;
        handleChangeMode();
    });
    $('#randomcolour').click(function() {
        mode = handleRandomColourMode;
        handleChangeMode();
    });
    makeGrid(rows, cols);
});

function handleChangeMode() {
    $('.square').hover(mode);
}

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
    var borderOffset = 2 * parseInt(squares.css("border-left-width"));
    var sideWidth = (gridWidth / rows) - borderOffset;
    var sideHeight = (gridHeight / cols) - borderOffset;
    squares.width(sideWidth);
    squares.height(sideHeight);
    handleChangeMode();
}

function handleClearGrid() {
    $('.square').css('background', 'transparent');
    cols = parseInt(prompt("Enter number of rows"));
    rows = parseInt(prompt("Enter number of columns"));
    $('#grid').empty();
    makeGrid(rows, cols);
}

function handleDefaultMode() {
    $(this).css('background', 'black');
}

function getRandomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++ ) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

function handleRandomColourMode() {
    $(this).css('background', getRandomColour());
}
