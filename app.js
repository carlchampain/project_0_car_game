
$(document).ready(function() {
  console.log("Hey, app.js is connected!");


           while (counter < 15) {

           var counter1 = 0;
           var counter2 = 0;

            $('body').keydown(function(e) {
              e.preventDefault();
              console.log('you pressed a key');
                if (e.which === 39) {
                  // when a key is pressed, add an increment to a counter, and pass into the css method below AND use that counter to track if win
                  $('#img1').css({'margin-left': '+=50' });
                  counter1++;
                }
                if (e.which === 32){
                  $('#img2').css({'margin-left': '+=50' });
                  counter2++;
                }
            });
          }


});





            // Keep track of the car click
            // while loop to end the race
