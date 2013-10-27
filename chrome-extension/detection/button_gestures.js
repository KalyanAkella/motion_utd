function button_gestures() {

    function init() {
        $('body').append(
            '<div id="motion-example-gestures">' +
                '<button id="up">Up</button>' +
                '<button id="down">Down</button>' +
                '<button id="left">Left</button>' +
                '<button id="right">Right</button>' +
                '<button id="hide-motion-example">Hide</button>' +

      '</div>'
        );
      $('#hide-motion-example').click(function(){
        $('#motion-example-gestures').hide();
      });
    }

    function left(callback) {
        $('#left').click(callback);
    }

    function right(callback) {
        $('#right').click(callback);
    }

    function up(callback) {
        $('#up').click(callback);
    }

    function down(callback) {
        $('#down').click(callback);
    }

    return {
        left: left,
        right: right,
        up: up,
        down: down,
        init: init
    };
}
