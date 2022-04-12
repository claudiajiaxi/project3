function initMap() {
    var map;
    var csLatLang = new google.maps.LatLng(41.83863002472576, -87.6270380886158);
    var parkingLatLng = new google.maps.LatLng(41.838566078590155, -87.62616905289498)
    var parkingSpot2LatLang = new google.maps.LatLng(41.83747898404313, -87.62616905289498)
    var infoLatLang = new google.maps.LatLng(41.83855433094542, -87.6273903853663);
    var scienceLatLang = new google.maps.LatLng(41.83792661341855, -87.62704881745186)
    const contentString =
        '<h1>CS Department</h1>' +
        'This is where I go to most days' +
        'This is the CS department. I have most of my CS classes here';
    const scienceString =
        '<h1>Science Department</h1>' +
        'This is where I sometimes go. ' +
        'Sometimes I have CS courses in this building';
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    const scienceInfo = new google.maps.InfoWindow({
        content: scienceString,
    });
    var image =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

    map = new google.maps.Map(document.getElementById("map"), {
        center: csLatLang,
        zoom: 18,
    });
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker = new google.maps.Marker({
        position: parkingLatLng,
        map: map,
        icon: iconBase + 'parking_lot_maps.png',
        animation: google.maps.Animation.BOUNCE,
        title: "This is a parking spot",
    });

    var marker_parking = new google.maps.Marker({
        position: parkingSpot2LatLang,
        map: map,
        icon: iconBase + 'parking_lot_maps.png',
        animation: google.maps.Animation.BOUNCE,
        title: "This is a parking spot",
    });

    new google.maps.Marker({
        position: csLatLang,
        map: map,
        title: "Drag Me!",
        icon: image,
        draggable: true,
    });

    const marker_two = new google.maps.Marker({
        position: infoLatLang,
        map,
        title: "Copmuter Science Department",
    });

    const scienceMarker = new google.maps.Marker({
        position: scienceLatLang,
        map,
        title: "Science Deparment",
    });

    marker_two.addListener("click", () => {
        infowindow.open({
            anchor: marker_two,
            map,
            shouldFocus: false,
        });
    });

    scienceMarker.addListener("click", () => {
        scienceInfo.open({
            anchor: scienceMarker,
            map,
            shouldFocus: false,
        });
    });


}

window.addEventListener('load', initMap)
