function control_browser() {

    function back() {
       // window.history.back();
    }

    function forward() {
      //  window.history.forward();
    }

    function scroll_up() {
        window.scrollBy(0, -300);
    }

    function scroll_down() {
        window.scrollBy(0, 300);
    }

    return {
        back: back,
        forward: forward,
        scroll_up: scroll_up,
        scroll_down: scroll_down
    }
}