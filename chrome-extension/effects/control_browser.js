function control_browser() {

    function back() {
        chrome.tabs.executeScript(null, {code: "window.history.back();"});
    }

    function forward() {
        chrome.tabs.executeScript(null, {code: "window.history.forward();"});
    }

    function scroll_up() {
        chrome.tabs.executeScript(null, {code: "window.scrollBy(0, -100);"});
    }

    function scroll_down() {
        chrome.tabs.executeScript(null, {code: "window.scrollBy(0, 100);"});
    }

    return {
        back: back,
        forward: forward,
        scroll_up: scroll_up,
        scroll_down: scroll_down
    }
}