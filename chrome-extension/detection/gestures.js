function motion_gestures() {

    function left(callback) {

    }

    function right(callback) {

    }

    function up(callback) {

    }

    function down(callback) {

    }

    function webcamError(e) {
        alert(e);
    }

    function init() {
        var video = $('#webcam')[0];
        if (navigator.getUserMedia) {
            navigator.getUserMedia({audio: false, video: true}, function(stream) {
                video.src = stream;
                video.muted = 'muted';
            }, webcamError);
        } else if (navigator.webkitGetUserMedia) {
            navigator.webkitGetUserMedia({audio: false, video: true}, function(stream) {
                video.src = window.webkitURL.createObjectURL(stream);
                video.muted = 'muted';
            }, webcamError);
        } else {
            //video.src = 'video.webm'; // fallback.
        }

        var canvasSource = $("#canvas-source")[0];
        var canvasBlended = $("#canvas-blended")[0];
        var motionSystem = new MotionSystem(video, canvasSource, canvasBlended);
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
