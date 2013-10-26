function extension(gestures) {

    function init() {
        gestures.up(function() {

        });

        gestures.down(function() {

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