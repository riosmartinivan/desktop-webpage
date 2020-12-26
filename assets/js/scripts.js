$(document).ready(function() {


    // Carousel random interval    
    $(".carousel").carousel({
        interval: getRandomArbitrary(2000, 7000)
    });

    //  Rotate efect of the logo on hover
    var interval;
    var returnCounter = 0;
    $(".brand").on({
        mouseenter: function () {
            $(this).css("transform", "rotate(" + getRandomInt(100, 1000) + "deg)");

            // Reset the timer to reset the logo rotation
            returnCounter = 0;
            clearInterval(interval);
        },
        mouseleave: function () {
            // It's more fun if the logo stays there with the random rotation for some time
            //$(this).css("transform", "rotate(0deg)");

            // Reset the logo rotation after some time
            interval = setInterval(countReset, 1000); // Call function every 1 second
        }
    });
    
    // Reset the logo rotation after some time
    function countReset() {
        returnCounter += 1;
        console.log(returnCounter);
        if (returnCounter === 10) { // Reset logo after 10 seconds
            $(".brand").css("transform", "rotate(0deg)");
            returnCounter = 0;
            clearInterval(interval);
        };
    }


    /* Launch register modal */
    $(".launch-modal").on("click", function(e){
        e.preventDefault();
        $( '#' + $(this).data('modal-id') ).modal();
    });

    /* Register form validation */
    $(".registration-form input[type='text'], .registration-form input[type='password']").on("focus", function() {
        $(this).removeClass("input-error");
    });
    
    $('.registration-form').on('submit', function(e) {
        
        // Remove the input-error after focus
        $(this).find("input[type='text'], input[type='email'], input[type='password']").each(function(){
            if( $(this).val() == "" ) {
                e.preventDefault();
                $(this).addClass('input-error');
            }
            else {
                $(this).removeClass('input-error');
            }
        });
        
    });
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}