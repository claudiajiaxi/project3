var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.835471, lng: -87.625888},
    zoom: 16
  });

  var marker = new google.maps.Marker({
		position: new google.maps.LatLng(41.83909, -87.62531),
		map: map,
    icon: './media/image/sportcenter.jpeg'
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<h1>IIT sportcengter</h1><p>sportcenter is the sport hall of IIT which many students play basketball and sports.<p>"
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
  });

  var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(41.83378, -87.62829),
		map: map,
    icon: './media/image/library.jpeg'
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: "<h1>IIT library</h1><p>IIT library is located for students lend the books.<p>"
  });

  google.maps.event.addListener(marker2, 'mouseover', function() {
    infowindow2.open(map, marker2);
  });
}
google.maps.event.addDomListener(window, 'load', initMap);
