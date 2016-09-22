$(document).ready(function() {
    var modeNames = {'handleDefaultMode' : 'Default Mode',
                     'handleRandomColourMode' : 'Random Colour Mode',
                     'handleOpacityMode' : 'Opacity Mode'};
    $('#cleargrid').click(handleClearGrid);
    $('#default').click(function() {
        handleChangeMode(handleDefaultMode);
    });
    $('#randomcolour').click(function() {
        handleChangeMode(handleRandomColourMode);
    });
    $('#opacity').click(function() {
        handleChangeMode(handleOpacityMode);
    });
    makeGrid(32, 32);

    /* Function definitions START */
    function handleChangeMode(mode) {
        $('#mode').text(modeNames[mode.name]);
        $('.square').off('mouseenter');
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
        var borderOffset = 0;
        var sideWidth = (gridWidth / rows) - borderOffset;
        var sideHeight = (gridHeight / cols) - borderOffset;
        squares.width(sideWidth);
        squares.height(sideHeight);
        handleChangeMode(handleDefaultMode);
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
        for (var i = 0; i < 6; i++) {
            colour += letters[Math.floor(Math.random() * 16)];
        }
        return colour;
    }

    function handleRandomColourMode() {
        $(this).css('background', getRandomColour());
    }

    function handleOpacityMode() {
        var cArray = $(this).css("background-color").match(/\d+/g);
        var nArray = getDarkerShade(cArray);
        $(this).css(
            'background',
            'rgb(' + nArray[0] + ',' + nArray[1] + ',' + nArray[2] + ')');
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
});
