function extension(gestures, browser) {

    function init() {
        gestures.up(browser.scroll_up);
        gestures.down(browser.scroll_down);
        gestures.left(browser.back);
        gestures.right(browser.forward);
    }

    return {
        init: init
    };
}

$(function(){
//    motion_gestures().init();

    var browser = control_browser();
    var gestures = example_gestures();
    extension(gestures, browser).init();

//    var video = $('#webcam')[0];
//    console.log(video);

//
//
//    if (navigator.getUserMedia) {
//        navigator.getUserMedia({audio: false, video: true}, function(stream) {
//            video.src = stream;
//            video.muted = 'muted';
//        }, webcamError);
//    } else if (navigator.webkitGetUserMedia) {
//        navigator.webkitGetUserMedia({audio: false, video: true}, function(stream) {
//            video.src = window.webkitURL.createObjectURL(stream);
//            video.muted = 'muted';
//        }, webcamError);
//    } else {
//        //video.src = 'video.webm'; // fallback.
//    }
//
//    var canvasSource = $("#canvas-source")[0];
//    var canvasBlended = $("#canvas-blended")[0];
//    var motionSystem = new MotionSystem(video, canvasSource, canvasBlended);
//    motionSystem.start();

});