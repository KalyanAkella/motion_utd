function control_browser() {

    var SPEED = 400;

    function left() {
        $('html, body').animate({
            scrollLeft: '-=400'
        }, SPEED);
    }

    function right() {
        $('html, body').animate({
            scrollLeft: '+=400'
        }, SPEED);
    }

    function up() {
        $('html, body').animate({
            scrollTop: '-=400'
        }, SPEED);
    }

    function down() {
        $('html, body').animate({
            scrollTop: '+=400'
        }, SPEED);
    }

    return {
        left: left,
        right: right,
        up: up,
        down: down
    }
}