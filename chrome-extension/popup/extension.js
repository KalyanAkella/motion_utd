function extension(browser) {

    function init() {

    }

    function addPublisher(publisher){
        publisher.init();

        publisher.up(browser.scroll_up);
        publisher.down(browser.scroll_down);
        publisher.left(browser.back);
        publisher.right(browser.forward);
    }


    return {
        init: init,
        addPublisher: addPublisher
    };
}

$(function(){
    var browser = control_browser();

    var example = example_gestures();
    var motion = motion_gestures();

    var thing = extension(browser);

    thing.addPublisher(example)
    thing.addPublisher(motion)

    thing.init();


});