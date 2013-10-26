function control_browser() {

    var SPEED = 500;

    function left() {
        $('html, body').animate({
            scrollLeft: '-=300'
        }, SPEED);
    }

    function right() {
        $('html, body').animate({
            scrollLeft: '+=300'
        }, SPEED);
    }

    function up() {
        $('html, body').animate({
            scrollTop: '-=300'
        }, SPEED);
    }

    function down() {
        $('html, body').animate({
            scrollTop: '+=300'
        }, SPEED);
    }

    return {
        left: left,
        right: right,
        up: up,
        down: down
    }
}