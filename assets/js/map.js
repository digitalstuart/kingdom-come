function loadJSON1(callback) {

    let xobj = new XMLHttpRequest();
    xobj.open('GET', 'assets/tralee_restaurants_1.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

function loadJSON2(callback) {

    let xobj = new XMLHttpRequest();
    xobj.open('GET', 'assets/tralee_restaurants_2.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

function loadJSON3(callback) {

    let xobj = new XMLHttpRequest();
    xobj.open('GET', 'assets/tralee_restaurants_3.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

// Call to function with anonymous callback
loadJSON1(function(response) {
    traleeRestaurants1 = JSON.parse(response);
    console.log(traleeRestaurants1.results[1].name);
    
    // Do Something with the response e.g.
    //jsonresponse = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    //console.log(jsonresponse[1].name);

});

// Call to function with anonymous callback
loadJSON2(function(response) {
    traleeRestaurants2 = JSON.parse(response);
    console.log(traleeRestaurants2.results[1].name);
    
    // Do Something with the response e.g.
    //jsonresponse = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    //console.log(jsonresponse[1].name);

});

// Call to function with anonymous callback
loadJSON3(function(response) {
    traleeRestaurants3 = JSON.parse(response);
    console.log(traleeRestaurants3.results[1].name);
    
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
       
        for (let i = 0; i < traleeRestaurants1.results.length; i++) {
        let lat = traleeRestaurants1.results[i].geometry.location.lat;
        let lng = traleeRestaurants1.results[i].geometry.location.lng;
        let latLng = new google.maps.LatLng(lat, lng);
        let marker = new google.maps.Marker({
            position: latLng,
            map: map
    });
    }

    for (let i = 0; i < traleeRestaurants2.results.length; i++) {
        let lat = traleeRestaurants2.results[i].geometry.location.lat;
        let lng = traleeRestaurants2.results[i].geometry.location.lng;
        let latLng = new google.maps.LatLng(lat, lng);
        let marker = new google.maps.Marker({
            position: latLng,
            map: map
    });
    }

    for (let i = 0; i < traleeRestaurants3.results.length; i++) {
        let lat = traleeRestaurants3.results[i].geometry.location.lat;
        let lng = traleeRestaurants3.results[i].geometry.location.lng;
        let latLng = new google.maps.LatLng(lat, lng);
        let marker = new google.maps.Marker({
            position: latLng,
            map: map
    });
    }
}