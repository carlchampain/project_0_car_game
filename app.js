
var counter1 = 0;
var counter2 = 0;


$(document).ready(function() {
    console.log("Hey, app.js is connected!");


    $('body').keydown(function(e) {
        e.preventDefault();
        console.log('you pressed a key');

        if (counter1 < 21) {

            if (e.which === 39) {
                // when a key is pressed, add an increment to a counter, and pass into the css method below AND use that counter to track if win
                $('#img1').css({
                    'margin-left': '+=50'
                });
                counter1++;            }
        } // end if

        if(counter2 < 21){

            if (e.which === 32) {
                $('#img2').css({
                    'margin-left': '+=50'
                });
                counter2++;
            }
        } // end if

    }); // end keydown



}); // end document ready






// Keep track of the car click
// while loop to end the race      counter 21


//boolean = hasWon    -include a reset button on the screen or in the hasWon
//prompt user for their name
//display message when  one of the user wins
// countdown timer at the start
//display message halfway ('ALmost there')
