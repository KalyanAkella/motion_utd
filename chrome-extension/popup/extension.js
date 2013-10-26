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
    motion_gestures().init();

    var browser = control_browser();
    var gestures = example_gestures();
    extension(gestures, browser).init();
});