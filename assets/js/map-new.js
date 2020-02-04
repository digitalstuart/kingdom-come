function loadJSON(map) {

    let xobj = new XMLHttpRequest();
    xobj.open('GET', 'assets/tralee_restaurants.json', true);
    xobj.onreadystatechange = function () {
        console.log('hello')
        if (xobj.readyState == 4 && xobj.status == "200") {
            let data = JSON.parse(xobj.responseText);
            markers(data.results, map);
        }
    }
    xobj.send(null);
}

let gmarkers = [];

function initMap() {

    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.272145, lng: -9.7164645 },
        zoom: 14,
        mapTypeControl: false
    });

    loadJSON(map);

}

function markers(data, map) {
    for (let i = 0; i < data.length; i++) {
        let lat = data[i].geometry.location.lat;
        let lng = data[i].geometry.location.lng;
        let latLng = new google.maps.LatLng(lat, lng);
        let marker = new google.maps.Marker({
            position: latLng,
            map: map
        });

        gmarkers.push(marker);

        let mapContent = data[i].formatted_address + " " + data[i].name;
        let infowindow = new google.maps.InfoWindow({
            content: mapContent
        });

        marker.addListener('mouseover', function () {
            infowindow.open(map, marker);
        });

        marker.addListener('mouseout', function () {
            infowindow.close();
        });

    }

}

console.log('hello 2')

/*

function show(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].category == 'restaurants') {
            data[i].setVisible(true);
        }
    }
}

function hide(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].category == 'restaurants') {
            data[i].setVisible(false);
        }
    }
}

hide("restaurants");

hide("hotels");

hide("pubs");

$(".checkbox").click(function () {

    var cat = $(this).attr("value");

    // If checked

    if ($(this).is(":checked")) {
        show(cat);
    }

    else {
        hide(cat);
    }

});

*/