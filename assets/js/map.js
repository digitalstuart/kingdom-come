/*

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
    console.log(restaurantsObject.restaurantsString[0].name);
    
    // Do Something with the response e.g.
    //jsonresponse = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    //console.log(jsonresponse[1].name);

});

*/

let restaurants = '{ "restaurantsString" : [' +
    '{ "formatted_address": "2a Prince\'s St, Tralee, Co. Kerry, Ireland" , "lat": 52.26767539999999 , "lng": -9.709615399999999 , "name": "Il Pomo Doro Tralee Restaurant" , "rating": 4.5 , "user_ratings_total": 314},' +
    '{ "formatted_address": "14 Prince\'s St, Tralee, Co. Kerry, V92 VX26, Ireland", "lat" : 52.2664082, "lng" : -9.710678699999999, "name" : "Croí Restaurant", "rating" : 4.7, "user_ratings_total" : 237},' +
    '{ "formatted_address": "6 Courthouse Ln, Cloonalour, Tralee, Co. Kerry, Ireland", "lat" : 52.2697118, "lng" : -9.7038691, "name" : "Chez Christophe", "rating" : 4.8, "user_ratings_total" : 87},' +
    '{ "formatted_address": "16 Abbey St, Tralee, Co. Kerry, Ireland", "lat" : 52.2690241, "lng" : -9.707827099999999, "name" : "Cassidy\'s Restaurants", "rating" : 4.6, "user_ratings_total" : 237},' +
    '{ "formatted_address": "11 Denny St, Tralee, Co. Kerry, V92 YFH0, Ireland", "lat" : 52.2684888, "lng" : -9.705575099999999, "name" : "Denny Lane Restaurant & Wine Bar", "rating" : 4.4, "user_ratings_total" : 132},' +
    '{ "formatted_address": "17 Denny St, Tralee, Co. Kerry, Ireland", "lat" : 52.2680726, "lng" : -9.7057906, "name" : "Finnegan\'s Restaurant & Wine Cellar", "rating" : 4.1, "user_ratings_total" : 65},' +
    '{ "formatted_address": "1-2 Ivy Terrace, Tralee, Co. Kerry, Ireland", "lat" : 52.2675049, "lng" : -9.7086284, "name" : "Bella Bia", "rating" : 4.7, "user_ratings_total" : 269},' +
    '{ "formatted_address": "2 Ashe St, Cloonalour, Tralee, Co. Kerry, V92 P7K3, Ireland", "lat" : 52.26956240000001, "lng" : -9.7042758, "name" : "Lana Tralee Asian Street Food", "rating" : 4.5, "user_ratings_total" : 440},' +
    '{ "formatted_address": "4 Ashe St, Cloonalour, Tralee, Co. Kerry, V92 CP29, Ireland", "lat" : 52.2695872, "lng" : -9.7042012, "name" : "Mozarts Tapas", "rating" : 4.4, "user_ratings_total" : 71},' +
    '{ "formatted_address": "1 The Mall, Balloonagh, Tralee, Co. Kerry, Ireland", "lat" : 52.2695745, "lng" : -9.706239699999999, "name" : "Quinlans Fresh Fish and Seafood Bar Tralee", "rating" : 4.7, "user_ratings_total" : 128} ]}';

let hotels = '{ "hotelsString" : [' +
    '{ "formatted_address": "V92 W56F, Maine St, Tralee, Co. Kerry, Ireland", "lat" : 52.2707571, "lng" : -9.7046674, "name": "The Ashe Hotel", "rating": 4.5, "user_ratings_total": 782},' +
    '{ "formatted_address": "Dan Spring Rd, Cloon Beg, Tralee, Co. Kerry, V92 HKA4, Ireland", "lat" : 52.2635733, "lng" : -9.700669299999999, "name" : "The Rose Hotel", "rating" : 4.5, "user_ratings_total" : 1353},' +
    '{ "formatted_address": "Denny St, Tralee, Co. Kerry, Ireland", "lat" : 52.2689479, "lng" : -9.705022699999999, "name" : "The Grand Hotel", "rating" : 4.4, "user_ratings_total" : 855},' +
    '{ "formatted_address": "Prince\'s St, Tralee, Co. Kerry, Ireland", "lat" : 52.2671005, "lng" : -9.710116099999999, "name" : "Brandon Hotel & Spa", "rating" : 3.9, "user_ratings_total" : 662},' +
    '{ "formatted_address": "Oakpark, Tralee, Co. Kerry, Ireland", "lat" : 52.276176, "lng" : -9.691155, "name" : "Meadowlands Hotel", "rating" : 4.4, "user_ratings_total" : 619},' +
    '{ "formatted_address": "27 Denny St, Tralee, Co. Kerry, Ireland", "lat" : 52.268481, "lng" : -9.705209, "name" : "Imperial Hotel Tralee", "rating" : 4.2, "user_ratings_total" : 325},' +
    '{ "formatted_address": "Ratass, Tralee, Co. Kerry, Ireland", "lat" : 52.2640488, "lng" : -9.6762406, "name" : "Manor West Hotel & Leisure Club", "rating" : 4.4, "user_ratings_total" : 710},' +
    '{ "formatted_address": "Upper Castle Street, Cloonalour, Tralee, Co. Kerry, Ireland", "lat" : 52.2689218, "lng" : -9.702276099999999, "name" : "Benners Hotel Tralee", "rating" : 4.3, "user_ratings_total" : 412},' +
    '{ "formatted_address": "Leebrook, Tralee, Co. Kerry, V92 W279, Ireland", "lat" : 52.26106499999999, "lng" : -9.660157999999999, "name" : "Ballygarry House Hotel and Spa", "rating" : 4.7, "user_ratings_total" : 1111},' +
    '{ "formatted_address": "Mary St, Tralee, Co. Kerry, Ireland", "lat" : 52.26782499999999, "lng" : -9.7080758, "name" : "Tralee Holiday Lodge Guest Accommodation", "rating" : 3.8, "user_ratings_total" : 204} ]}';
    
    function initMap() {

    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.272145, lng: -9.7164645 },
        zoom: 14,
        mapTypeControl: false
    });


    let restaurantsObject = JSON.parse(restaurants);

    for (let i = 0; i < restaurantsObject.restaurantsString.length; i++) {
        let lat = restaurantsObject.restaurantsString[i].lat;
        let lng = restaurantsObject.restaurantsString[i].lng;
        let latLng = new google.maps.LatLng(lat, lng);
        let marker = new google.maps.Marker({
            position: latLng,
            map: map
        });

        let contentTest = restaurantsObject.restaurantsString[i].formatted_address + " " + restaurantsObject.restaurantsString[i].name;
        let infowindow = new google.maps.InfoWindow({
            content: contentTest
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        map.addListener('click', function () {
            infowindow.close();
        });

    };

    let hotelsObject = JSON.parse(hotels);

    for (let i = 0; i < hotelsObject.hotelsString.length; i++) {
        let lat = hotelsObject.hotelsString[i].lat;
        let lng = hotelsObject.hotelsString[i].lng;
        let latLng = new google.maps.LatLng(lat, lng);
        let marker = new google.maps.Marker({
            position: latLng,
            map: map
        });

        let contentTest = hotelsObject.hotelsString[i].formatted_address + " " + hotelsObject.hotelsString[i].name;
        let infowindow = new google.maps.InfoWindow({
            content: contentTest
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        map.addListener('click', function () {
            infowindow.close();
        });

    };
}

