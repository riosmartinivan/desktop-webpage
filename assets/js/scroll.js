(function(){

    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var header = document.getElementById('header-container');

    var headerHeight = header.clientHeight;
    console.log("Height: " + headerHeight);

    var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll === 0) {
        //at the top, make the header visible again
        header.classList.remove('active');
    }
    if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
    }
    else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
    }

    if (direction !== prevDirection && headerHeight) {
        toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
    };

    var toggleHeader = function(direction, curScroll) {

        if (headerHeight < 300) {
            if (direction === 2 && curScroll > headerHeight) { 

                header.classList.add('hide');
                header.classList.remove('active');
                prevDirection = direction;
            }
            else if (direction === 1) {
                header.classList.remove('hide');
                header.classList.add('active');
                prevDirection = direction;
            }
        }
    };

    window.addEventListener('scroll', checkScroll);

})();