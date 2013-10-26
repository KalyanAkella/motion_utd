function example_gestures() {

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
        init: function() {}
    };
}
