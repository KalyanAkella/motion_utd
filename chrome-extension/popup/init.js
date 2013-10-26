$(function(){
    var button = button_gestures();
    var motion = motion_gestures();

    var event_broker = broker(control_browser());

    event_broker.add_publisher(button)
    event_broker.add_publisher(motion)

    event_broker.init();
});
