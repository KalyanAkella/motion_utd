function control_streetview() {
    var map;
    var panorama;
    var astorPlace = new google.maps.LatLng(53.47655127448954, -2.254521449859567);

    var ANGLE = 20;

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

    function down() {
      setPanoByHeading(panorama.getPov().heading);
    }

    function up() {
      setPanoByHeading((panorama.getPov().heading + 180) % 360);
    }

    function setPanoByHeading(currentHeading) {
      var links = panorama.getLinks();
      var targetLink = null;
      var minDiff = 361;

      for (var i=0; i<links.length; i++) {
        var linkHeading = links[i].heading;
        var diffHeading = Math.abs(currentHeading - linkHeading);
        if (diffHeading < minDiff) {
          minDiff = diffHeading;
          targetLink = links[i];
        }
      }
      if (targetLink != null) panorama.setPano(targetLink.pano);
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
