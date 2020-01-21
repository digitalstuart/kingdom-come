function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.272145, lng: -9.7164645 },
        zoom: 14,
        mapTypeControl: false
    });

    var styleControl = document.getElementById('style-selector-control');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

    // Apply new JSON when the user chooses to hide/show features.
    document.getElementById('hide-poi').addEventListener('click', function () {
        map.setOptions({ styles: styles['hide'] });
    });
    document.getElementById('show-poi').addEventListener('click', function () {
        map.setOptions({ styles: styles['default'] });
    });

    var request = {
        placeId: 'ChIJv-E6Ans1RUgR43eqb3GewPs',
        fields: ['name', 'formatted_address', 'place_id', 'geometry', 'rating', 'opening_hours']
    };

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    service.getDetails(request, function (place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + 'Rating ' + place.rating + '<br>' +
                    place.formatted_address + '</div>');
                infowindow.open(map, this);
            });
        }
    });
}

var styles = {
    default: null,
    hide: [
                {
            featureType: 'all',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
        }
    ]
};