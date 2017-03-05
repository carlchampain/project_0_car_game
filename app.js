var player1 = 0;
var player2 = 0;


$(document).ready(function() {

    console.log("Hey, app.js is connected!");

    var hasWon = false;

    $('body').keydown(function(e) {
        e.preventDefault();
        console.log('you pressed a key');

        if (!hasWon) {

            if (player1 < 21 && !hasWon) {

                if (e.which === 39) {
                    // when a key is pressed, add an increment to a counter, and pass into the css method below AND use that counter to track if win
                    $('#img1').css({
                        'margin-left': '+=50'
                    });
                    player1++;
                }
            }

            if (player2 < 21 && !hasWon) {

                if (e.which === 32) {
                    $('#img2').css({
                        'margin-left': '+=50'
                    });
                    player2++;
                }
            }

            if (player1 === 21) {
                $('.winner').append('Player 1 has won the game!');
                hasWon = true;
            }
            if (player2 === 21) {
                $('.winner').append('Player 2 has won the game!');
                hasWon = true;
            }
        }

    }); // end keydown

     $('#button').click(function(){
       window.location.reload();
     });

}); // end document ready






//prompt user for their name
// countdown timer at the start
//display message halfway ('ALmost there')
