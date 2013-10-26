function motion_gestures() {

    var motionSystem;


    function left(callback) {
        motionSystem.leftCallbacks(callback);
    }

    function right(callback) {
        motionSystem.rightCallbacks(callback);
    }

    function up(callback) {
        motionSystem.upCallbacks(callback);
    }

    function down(callback) {
        motionSystem.downCallbacks(callback);
    }

    function webcam_error(e) {
        console.log(e);
    }

    function init() {
        $('body').append(
            '<div id="motion-gestures">' +
                '<video id="webcam" autoplay width="640" height="480" style="display:none;"></video>' +
                '<canvas id="canvas-source" width="640" height="480" style="display:none;"></canvas>' +
                '<canvas id="canvas-blended" width="200" height="400"></canvas>' +
            '</div>'
        );

        var video = $('#webcam')[0];
        if (navigator.getUserMedia) {
            navigator.getUserMedia({audio: false, video: true}, function(stream) {
                video.src = stream;
                video.muted = 'muted';
            }, webcam_error);
        } else if (navigator.webkitGetUserMedia) {
            navigator.webkitGetUserMedia({audio: false, video: true}, function(stream) {
                video.src = window.webkitURL.createObjectURL(stream);
                video.muted = 'muted';
            }, webcam_error);
        }

        var canvasSource = $("#canvas-source")[0];
        var canvasBlended = $("#canvas-blended")[0];

        motionSystem = new MotionSystem(video, canvasSource, canvasBlended);
        motionSystem.start();
    }

    return {
        left: left,
        right: right,
        up: up,
        down: down,
        init: init
    };
}
