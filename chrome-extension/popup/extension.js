function extension(gestures) {

    function init() {
        gestures.up(function() {
            chrome.tabs.executeScript(null, {code: "window.scrollBy(0, -100);"});
        });

        gestures.down(function() {
            chrome.tabs.executeScript(null, {code: "window.scrollBy(0, 100);"});
        });

        gestures.left(function() {
            chrome.tabs.executeScript(null, {code: "window.history.back();"});
        });

        gestures.right(function() {
            chrome.tabs.executeScript(null, {code: "window.history.forward();"});
        });
    }

    return {
        init: init
    };
}

$(function(){
    var gestures = example_gestures();
    extension(gestures).init();
});