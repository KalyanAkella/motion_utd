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
