function Player(name, key, image) {
    this.counter = 0;
    this.name = name;
    this.key = key;
    this.image = image;
    this.score = 0;
}

var player1 = new Player("Batman", 39, "#img1");
var player2 = new Player("Cops", 32, "#img2");

var players = [];
players.push(player1, player2);

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
                hasWon = true;
                player.score++;
                $('.winner').append(player.name + ' has won the game!<br>Total wins for ' +
                    player.name + ' = ' + player.score);
            }
        }

        if (!hasWon) {

            for (var i = 0; i < players.length; i++) {
                if (e.which === players[i].key) {
                    moveCar(players[i]);
                    checkWin(players[i]);
                }
            }
        }
    }); // end keydown

    $('#button').click(function() {
        hasWon = false;
        $('.winner').text('');

        for (var i = 0; i < players.length; i++) {
            $(players[i].image).css({
                'margin-left': '0'
            });
            players[i].counter = 0;
        }
    });
}); // end document ready
