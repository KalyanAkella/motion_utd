function control_browser() {

    var SPEED = 500;

    function scroll_left() {
        $('html, body').animate({
            scrollLeft: '-=300'
        }, SPEED);
    }

    function scroll_right() {
        $('html, body').animate({
            scrollLeft: '+=300'
        }, SPEED);
    }

    function scroll_up() {
        $('html, body').animate({
            scrollTop: '-=300'
        }, SPEED);
    }

    function scroll_down() {
        $('html, body').animate({
            scrollTop: '+=300'
        }, SPEED);
    }

    return {
        scroll_left: scroll_left,
        scroll_right: scroll_right,
        scroll_up: scroll_up,
        scroll_down: scroll_down
    }
}