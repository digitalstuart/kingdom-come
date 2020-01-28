function loadJSON(callback) {

    let xobj = new XMLHttpRequest();
    xobj.open('GET', 'assets/maps.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

// Call to function with anonymous callback
loadJSON(function(response) {
    jsonresponse = JSON.parse(response);
    console.log(jsonresponse.results[1].geometry.location.lat);
    
    // Do Something with the response e.g.
    //jsonresponse = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    //console.log(jsonresponse[1].name);

});

function mapTest () {
    document.getElementById("test").innerHTML = jsonresponse.results[1].formatted_address;    
}

document.getElementById("button-test").onclick = function() {mapTest()};

function initMap() {
    
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.272145, lng: -9.7164645 },
        zoom: 14,
        mapTypeControl: false
    });
       
        for (let i = 0; i < jsonresponse.results.length; i++) {
        let lat = jsonresponse.results[i].geometry.location.lat;
        let lng = jsonresponse.results[i].geometry.location.lng;
        let latLng = new google.maps.LatLng(lat, lng);
        let marker = new google.maps.Marker({
            position: latLng,
            map: map
    });
    }
}