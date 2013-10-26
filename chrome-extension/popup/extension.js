function extension(gestures) {

    function init() {
        gestures.up(function() {
            $('html, body').animate({ scrollTop: $(document).offset().top }, 0);
        });

        gestures.down(function() {
            $('html, body').animate({ scrollTop: $(document).height() }, 1000);
        });

        gestures.left(function() {

        });

        gestures.right(function() {

        });
    }

    return {
        init: init
    };
}

$(function(){
    var gestures = gestures();

    extension(gestures).init();
});