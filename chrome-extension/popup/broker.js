function broker(browser) {

    function add_publisher(publisher){
        publisher.init();

        publisher.up(browser.up);
        publisher.down(browser.down);
        publisher.left(browser.left);
        publisher.right(browser.right);
    }

    return {
        init: function() {},
        add_publisher: add_publisher
    };
}

$(function(){
    var button = button_gestures();
    var motion = motion_gestures();

    var event_broker = broker(control_browser());

    event_broker.add_publisher(button)
    event_broker.add_publisher(motion)

    event_broker.init();
});