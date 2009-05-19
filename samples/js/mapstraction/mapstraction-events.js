var marker;
var mapstraction;
function initialize() {
    mapstraction = new Mapstraction('map_canvas','google');
    mapstraction.setCenterAndZoom(new LatLonPoint(37.404196,-122.008194), 7);

    mapstraction.addEventListener('click', 
    function(p) { 
        marker = new Marker(p);
        text = "<p>Lat: " + p.lat + " Lon: " + p.lon + "</p>";
        marker.setLabel(text);
        marker.setInfoBubble(text);
        marker.openBubble();
        mapstraction.addMarker(marker);
    });
    mapstraction.addEventListener( 'changeZoom', function() { alert("changeZoom")});
    mapstraction.addEventListener( 'drag', function() { alert("drag")});
    mapstraction.addEventListener( 'endPan', function() { alert("endPan")});
}