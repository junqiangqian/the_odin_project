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
    $('#opacity').click(function() {
        mode = handleOpacityMode;
        handleChangeMode();
    });
    makeGrid(rows, cols);
});

function handleChangeMode() {
    $('.square').on('mouseenter', mode);
}

function makeGrid(rows, cols) {
    for (var i = 0; i < rows; i++) {
        var row = '<div class="row">';
        for (var j = 0; j < cols; j++) {
            row += '<div class="square"></div>';
        }
        $('#grid').append(row);
    }
    var squares = $('.square');
    var gridWidth = $('#grid').width();
    var gridHeight = $('#grid').height();
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
    $(this).css('background', 'white');
}

function getRandomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

function handleRandomColourMode() {
    $(this).css('background', getRandomColour());
}

function handleOpacityMode() {
    console.log("before" + $(this).css('background-color'));
    var cArray = $(this).css("background-color").match(/\d+/g);
    var nArray = getDarkerShade(cArray);
    $(this).css(
        'background', 'rgb(' + nArray[0] + ',' + nArray[1] + ',' + nArray[2] + ')');
    console.log("after " + $(this).css('background-color'));
}

function getDarkerShade(cArray) {
    var nArray = [];
    cArray.forEach(function(element, index, array) {
        var nElement = parseInt(element);
        nElement = Math.max(0, nElement - 25);
        nArray.push(nElement);
    });
    return nArray;
}
