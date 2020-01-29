var JSONresponse;

function loadJSON(callback) {

    let xobj = new XMLHttpRequest();
    xobj.open('GET', 'assets/tralee_restaurants.json', true);
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
    JSONresponse = JSON.parse(response);
    console.log(JSONresponse);
    console.log(JSONresponse.results[0].name);
    
    // Do Something with the response e.g.
    //jsonresponse = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    //console.log(jsonresponse[1].name);

});

function initMap() {
    
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.272145, lng: -9.7164645 },
        zoom: 14,
        mapTypeControl: false
    });
       
        for (let i = 0; i < JSONresponse.results.length; i++) {
        let lat = JSONresponse.results[i].geometry.location.lat;
        let lng = JSONresponse.results[i].geometry.location.lng;
        let latLng = new google.maps.LatLng(lat, lng);
        let marker = new google.maps.Marker({
            position: latLng,
            map: map
    });
    }    
}