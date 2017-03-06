function Player(name, key, image) {
    this.counter = 0;
    this.name = name;
    this.key = key;
    this.image = image;
}

var player1 = new Player("Player 1", 39, "#img1");
var player2 = new Player("Player 2", 32, "#img2");
var winningScore = 21;

$(document).ready(function() {

    console.log("Hey, app.js is connected!");

    var hasWon = false;

    $('body').keydown(function(e) {
        e.preventDefault();

        function moveCar(player) {
            $(player.image).css({
                'margin-left': '+=50'
            });
            player.counter++;
        }

        function checkWin(player) {
            if (player.counter === winningScore) {
                $('.winner').append(player.name + ' has won the game!');
                hasWon = true;
            }
        }

        if (!hasWon) {
            if (e.which === player1.key) {
                moveCar(player1);
                checkWin(player1);
            }
            if (e.which === player2.key) {
                moveCar(player2);
                checkWin(player2);
            }
        }
    }); // end keydown

    $('#button').click(function() {
        $(player1.image).css({
            'margin-left': '0'
        });
        $(player2.image).css({
            'margin-left': '0'
        });
        player1.counter = 0;
        player2.counter = 0;
        hasWon = false;
        $('.winner').text('');
    });
}); // end document ready
