function example_gestures() {

    function init() {
        $('body').append(
            '<div id="motion-example-gestures">' +
                '<button id="up">Up</button>' +
                '<button id="down">Down</button>' +
                '<button id="back">Back</button>' +
                '<button id="forward">Forward</button>' +
            '</div>'
        );
    }

    function left(callback) {
        $('#back').click(callback);
    }

    function right(callback) {
        $('#forward').click(callback);
    }

    function up(callback) {
        $('#up').click(callback);
    }

    function down(callback) {
        $('#down').click(callback);
    }

    return {
        left: left,
        right: right,
        up: up,
        down: down,
        init: init
    };
}
