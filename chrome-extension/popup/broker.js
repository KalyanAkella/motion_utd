function broker(browser) {

    function add_publisher(publisher){
        publisher.init();

        publisher.up(browser.scroll_up);
        publisher.down(browser.scroll_down);
        publisher.left(browser.back);
        publisher.right(browser.forward);
    }

    return {
        init: function() {},
        add_publisher: add_publisher
    };
}

$(function(){
    var example = example_gestures();
    var motion = motion_gestures();

    var event_broker = broker(control_browser());

    event_broker.add_publisher(example)
    event_broker.add_publisher(motion)

    event_broker.init();
});