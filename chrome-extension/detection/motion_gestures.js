function motion_gestures() {

    function left(callback) {

    }

    function right(callback) {

    }

    function up(callback) {

    }

    function down(callback) {

    }

    function init() {
        $('#state').text('Preparing to load webcam');

        navigator.webkitGetUserMedia({audio: false, video: true}, function(stream) {}, function(e) { console.log(e); });

        $('#state').text('Webcam loaded...') ;
    }

    return {
        left: left,
        right: right,
        up: up,
        down: down,
        init: init
    };
}
