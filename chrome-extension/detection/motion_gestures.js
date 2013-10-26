function motion_gestures() {

    var lastImageData = null;
    var prevFrame = null;
    var samplingFactor = 6;
    var noiseThreshold = 1000;

    var video, canvasSource, canvasBlended;
    var contextBlended, contextSource;
    var left_callback, right_callback, up_callback, down_callback;

    function init() {
        $('body').append(
            '<div id="motion-gestures">' +
                '<video id="webcam" autoplay width="640" height="480" style="display:none;"></video>' +
                '<canvas id="canvas-source" width="640" height="480" style="display:none;"></canvas>' +
                '<canvas id="canvas-blended" width="200" height="400"></canvas>' +
                '<button id="hide-motion-gestures">Hide</button>' +
                '</div>'
        );
        $('#hide-motion-gestures').click(function(){
            $('#motion-gestures').hide();
        });


        video = $('#webcam')[0];

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

        canvasSource = $("#canvas-source")[0];
        canvasBlended = $("#canvas-blended")[0];

        contextBlended = canvasBlended.getContext('2d');
        contextSource = canvasSource.getContext('2d');
        contextSource.translate(canvasSource.width, 0);
        contextSource.scale(-1, 1);

        start();
    }

    function start() {

        function drawVideo() {
            contextSource.drawImage(video, 0, 0, video.width, video.height);
        }

        function blend() {
            var width = canvasSource.width;
            var height = canvasSource.height;
            var sourceData = contextSource.getImageData(width - 200, 0, 200, 480);
            if (!lastImageData) lastImageData = contextSource.getImageData(width - 200, 0, 200, 480);
            var blendedData = contextSource.createImageData(200, 480);
            differenceAccuracy(blendedData.data, sourceData.data, lastImageData.data);
            contextBlended.putImageData(blendedData, 0, 0);
            lastImageData = sourceData;

            contextBlended.strokeStyle = "#FF0000";
            contextBlended.beginPath();
            contextBlended.moveTo(0, 200);
            contextBlended.lineTo(200, 200);
            contextBlended.stroke();
        }

        function fastAbs(value) {
            // equivalent to Math.abs();
            return (value ^ (value >> 31)) - (value >> 31);
        }

        function threshold(value) {
            return (value > 21) ? 0xFF : 0;
        }

        function differenceAccuracy(target, data1, data2) {
            if (data1.length != data2.length) return null;
            var i = 0;
            while (i < (data1.length * 0.25)) {
                var index = 4 * i++;
                var average1 = (data1[index] + data1[index+1] + data1[index+2]) / 3;
                var average2 = (data2[index] + data2[index+1] + data2[index+2]) / 3;
                var diff = threshold(fastAbs(average1 - average2));
                target[index] = diff;
                target[index+1] = diff;
                target[index+2] = diff;
                target[index+3] = 255;
            }
        }

        function computeWhiteArea(blendedData) {
            var whiteArea = 0, i = 0;
            var limit = blendedData.length * 0.25;
            while (i < limit) {
                var index = 4 * i++;
                whiteArea += blendedData[index] & 1;
            }
            return whiteArea;
        }

        function calcWhiteArea(x, y, width, height) {
            var blendedImage = contextBlended.getImageData(x, y, width, height);
            return computeWhiteArea(blendedImage.data);
        }

        function checkAreas() {
            var width = canvasBlended.width;
            var height = canvasBlended.height;

            var currTopWhiteArea = calcWhiteArea(0, 0, width, height / 4);
            var currBottomWhiteArea = calcWhiteArea(0, height / 4, width, height / 4);
            var currLeftWhiteArea = calcWhiteArea(0, height / 2, width / 2, height / 2);
            var currRightWhiteArea = calcWhiteArea(width / 2, height / 2, width / 2, height / 2);

            var currFrame = new MotionFrame(currTopWhiteArea, currBottomWhiteArea, currLeftWhiteArea, currRightWhiteArea);


            if (prevFrame == null) {
                prevFrame = currFrame;
                console.log("no history");
            } else {
                var diffs = currFrame.difference(prevFrame);

                if (fastAbs(diffs.top) > noiseThreshold || fastAbs(diffs.bottom) > noiseThreshold) {
                    if (diffs.top > 0 && diffs.bottom < 0) {
                        if(up_callback) up_callback();
                    } else if (diffs.top < 0 && diffs.bottom > 0) {
                        if(down_callback) down_callback();
                    }
                }

                if (fastAbs(diffs.left) > noiseThreshold || fastAbs(diffs.right) > noiseThreshold) {
                    if (diffs.left > 0 && diffs.right < 0) {
                        if(left_callback) left_callback();
                    } else if (diffs.left < 0 && diffs.right > 0) {
                        if(right_callback) right_callback();
                    }
                }
            }
            prevFrame = currFrame;
        }

        function update() {
            drawVideo();
            blend();
            checkAreas();
            setTimeout(update, 1000/samplingFactor);
        }

        update();
    }

    function left(callback) {
        left_callback = callback;
    }

    function right(callback) {
        right_callback = callback;
    }

    function up(callback) {
        up_callback = callback;
    }

    function down(callback) {
        down_callback = callback;
    }

    function webcam_error(e) {
        console.log(e);
    }

    return {
        left: left,
        right: right,
        up: up,
        down: down,
        init: init
    };
}
