function control_streetview() {
    var map;
    var panorama;
    var astorPlace = new google.maps.LatLng(53.47655127448954, -2.254521449859567);

    var ANGLE = 10;

    function left() {
      var currentPov = panorama.getPov();
      currentPov.heading -= ANGLE;
      panorama.setPov(currentPov);
    }

    function right() {
      var currentPov = panorama.getPov();
      currentPov.heading += ANGLE;
      panorama.setPov(currentPov);
    }

    function up() {
      var currentPov = panorama.getPov();
      currentPov.pitch += ANGLE;
      panorama.setPov(currentPov);
    }

    function down() {
      var currentPov = panorama.getPov();
      currentPov.pitch -= ANGLE;
      panorama.setPov(currentPov);
    }

    function init() {
      // Set up the map
      var mapOptions = {
        center: astorPlace,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false
      };
      map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

      panorama = map.getStreetView();
      panorama.setPosition(astorPlace);
      panorama.setPov(/** @type {google.maps.StreetViewPov} */({
        heading: 280,
        pitch: 10
      }));
      panorama.setVisible(true);
    }

    return {
        left: left,
        right: right,
        up: up,
        down: down,
        init: init
    }
}
