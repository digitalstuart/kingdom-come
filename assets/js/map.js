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
    console.log(placesObject.placesString[0].name);
    
    // Do Something with the response e.g.
    //jsonresponse = JSON.parse(response);
    // Assuming json data is wrapped in square brackets as Drew suggests
    //console.log(jsonresponse[1].name);
});
*/

let restaurantMarkers = [];
let hotelMarkers = [];
let pubMarkers = [];

let restaurants = '{ "restaurantsString" : [' +
    '{ "formatted_address": "2a Prince\'s St, Tralee, Co. Kerry, Ireland" , "lat": 52.26767539999999 , "lng": -9.709615399999999 , "name": "Il Pomo Doro Tralee Restaurant" , "rating": 4.5 , "user_ratings_total": 314 , "category": "restaurants"},' +
    '{ "formatted_address": "14 Prince\'s St, Tralee, Co. Kerry, V92 VX26, Ireland", "lat" : 52.2664082, "lng" : -9.710678699999999, "name" : "Croí Restaurant", "rating" : 4.7, "user_ratings_total" : 237 , "category": "restaurants"},' +
    '{ "formatted_address": "6 Courthouse Ln, Cloonalour, Tralee, Co. Kerry, Ireland", "lat" : 52.2697118, "lng" : -9.7038691, "name" : "Chez Christophe", "rating" : 4.8, "user_ratings_total" : 87 , "category": "restaurants"},' +
    '{ "formatted_address": "16 Abbey St, Tralee, Co. Kerry, Ireland", "lat" : 52.2690241, "lng" : -9.707827099999999, "name" : "Cassidy\'s Restaurants", "rating" : 4.6, "user_ratings_total" : 237 , "category": "restaurants"},' +
    '{ "formatted_address": "11 Denny St, Tralee, Co. Kerry, V92 YFH0, Ireland", "lat" : 52.2684888, "lng" : -9.705575099999999, "name" : "Denny Lane Restaurant & Wine Bar", "rating" : 4.4, "user_ratings_total" : 132 , "category": "restaurants"},' +
    '{ "formatted_address": "17 Denny St, Tralee, Co. Kerry, Ireland", "lat" : 52.2680726, "lng" : -9.7057906, "name" : "Finnegan\'s Restaurant & Wine Cellar", "rating" : 4.1, "user_ratings_total" : 65 , "category": "restaurants"},' +
    '{ "formatted_address": "1-2 Ivy Terrace, Tralee, Co. Kerry, Ireland", "lat" : 52.2675049, "lng" : -9.7086284, "name" : "Bella Bia", "rating" : 4.7, "user_ratings_total" : 269 , "category": "restaurants"},' +
    '{ "formatted_address": "2 Ashe St, Cloonalour, Tralee, Co. Kerry, V92 P7K3, Ireland", "lat" : 52.26956240000001, "lng" : -9.7042758, "name" : "Lana Tralee Asian Street Food", "rating" : 4.5, "user_ratings_total" : 440 , "category": "restaurants"},' +
    '{ "formatted_address": "4 Ashe St, Cloonalour, Tralee, Co. Kerry, V92 CP29, Ireland", "lat" : 52.2695872, "lng" : -9.7042012, "name" : "Mozarts Tapas", "rating" : 4.4, "user_ratings_total" : 71 , "category": "restaurants"},' +
    '{ "formatted_address": "1 The Mall, Balloonagh, Tralee, Co. Kerry, Ireland", "lat" : 52.2695745, "lng" : -9.706239699999999, "name" : "Quinlans Fresh Fish and Seafood Bar Tralee", "rating" : 4.7, "user_ratings_total" : 128 , "category": "restaurants"} ]}';

let hotels = '{ "hotelsString" : [' +
    '{ "formatted_address": "V92 W56F, Maine St, Tralee, Co. Kerry, Ireland", "lat" : 52.2707571, "lng" : -9.7046674, "name": "The Ashe Hotel", "rating": 4.5, "user_ratings_total": 782 , "category": "hotels"},' +
    '{ "formatted_address": "Dan Spring Rd, Cloon Beg, Tralee, Co. Kerry, V92 HKA4, Ireland", "lat" : 52.2635733, "lng" : -9.700669299999999, "name" : "The Rose Hotel", "rating" : 4.5, "user_ratings_total" : 1353 , "category": "hotels"},' +
    '{ "formatted_address": "Denny St, Tralee, Co. Kerry, Ireland", "lat" : 52.2689479, "lng" : -9.705022699999999, "name" : "The Grand Hotel", "rating" : 4.4, "user_ratings_total" : 855 , "category": "hotels"},' +
    '{ "formatted_address": "Prince\'s St, Tralee, Co. Kerry, Ireland", "lat" : 52.2671005, "lng" : -9.710116099999999, "name" : "Brandon Hotel & Spa", "rating" : 3.9, "user_ratings_total" : 662 , "category": "hotels"},' +
    '{ "formatted_address": "Oakpark, Tralee, Co. Kerry, Ireland", "lat" : 52.276176, "lng" : -9.691155, "name" : "Meadowlands Hotel", "rating" : 4.4, "user_ratings_total" : 619 , "category": "hotels"},' +
    '{ "formatted_address": "27 Denny St, Tralee, Co. Kerry, Ireland", "lat" : 52.268481, "lng" : -9.705209, "name" : "Imperial Hotel Tralee", "rating" : 4.2, "user_ratings_total" : 325 , "category": "hotels"},' +
    '{ "formatted_address": "Ratass, Tralee, Co. Kerry, Ireland", "lat" : 52.2640488, "lng" : -9.6762406, "name" : "Manor West Hotel & Leisure Club", "rating" : 4.4, "user_ratings_total" : 710 , "category": "hotels"},' +
    '{ "formatted_address": "Upper Castle Street, Cloonalour, Tralee, Co. Kerry, Ireland", "lat" : 52.2689218, "lng" : -9.702276099999999, "name" : "Benners Hotel Tralee", "rating" : 4.3, "user_ratings_total" : 412 , "category": "hotels"},' +
    '{ "formatted_address": "Leebrook, Tralee, Co. Kerry, V92 W279, Ireland", "lat" : 52.26106499999999, "lng" : -9.660157999999999, "name" : "Ballygarry House Hotel and Spa", "rating" : 4.7, "user_ratings_total" : 1111 , "category": "hotels"},' +
    '{ "formatted_address": "Mary St, Tralee, Co. Kerry, Ireland", "lat" : 52.26782499999999, "lng" : -9.7080758, "name" : "Tralee Holiday Lodge Guest Accommodation", "rating" : 3.8, "user_ratings_total" : 204 , "category": "hotels"} ]}';

let pubs = '{ "pubsString" : [' +
    '{ "formatted_address": "30 Lower Castle St, Cloonalour, Tralee, Co. Kerry, V92 N9FT, Ireland", "lat" : 52.26921300000001, "lng" : -9.703892999999999, "name": "Baily\'s Corner", "rating": 4.6, "user_ratings_total": 348 , "category": "pubs"},' +
    '{ "formatted_address": "18 The Mall, Gallowsfields, Tralee, Co. Kerry, V92 DD5X, Ireland", "lat" : 52.2694564, "lng" : -9.704781100000002, "name" : "Paddy Mac\'s Pub", "rating" : 4.5, "user_ratings_total" : 205 , "category": "pubs"},' +
    '{ "formatted_address": "27 The Mall, Balloonagh, Tralee, Co. Kerry, V92 HN40, Ireland", "lat" : 52.2696373, "lng" : -9.705735299999999, "name" : "An Teach Beag", "rating" : 4.3, "user_ratings_total" : 133 , "category": "pubs"},' +
    '{ "formatted_address": "Rock St, Balloonagh, Tralee, Co. Kerry, Ireland", "lat" : 52.2701812, "lng" : -9.708096899999999, "name" : "Kirbys Brogue Inn", "rating" : 4.6, "user_ratings_total" : 1158 , "category": "pubs"},' +
    '{ "formatted_address": "41 Bridge St, Tralee, Co. Kerry, Ireland", "lat" : 52.26920399999999, "lng" : -9.708067999999999, "name" : "Sean Ogs Bar & B&B", "rating" : 4.6, "user_ratings_total" : 432 , "category": "pubs"},' +
    '{ "formatted_address": "77 Rock St, Gallowsfields, Tralee, Co. Kerry, Ireland", "lat" : 52.2721216, "lng" : -9.7073798, "name" : "The Castle Bar", "rating" : 4.6, "user_ratings_total" : 120 , "category": "pubs"},' +
    '{ "formatted_address": "22 Castle St, Tralee, Co. Kerry, Ireland", "lat" : 52.2691403, "lng" : -9.702966999999999, "name" : "Turners Bar", "rating" : 4.4, "user_ratings_total" : 160 , "category": "pubs"},' +
    '{ "formatted_address": "28 Lower Castle St, Cloonalour, Tralee, Co. Kerry, V92 AD60, Ireland", "lat" : 52.2692419, "lng" : -9.703685199999999, "name" : "The Blasket Bar", "rating" : 4.4, "user_ratings_total" : 292 , "category": "pubs"},' +
    '{ "formatted_address": "5 Brogue maker\'s Ln, Gallowsfields, Tralee, Co. Kerry, V92 NA46, Ireland", "lat" : 52.2706652, "lng" : -9.7054466, "name" : "Roundy\'s Bar", "rating" : 4.4, "user_ratings_total" : 87 , "category": "pubs"},' +
    '{ "formatted_address": "Pembroke St, Balloonagh, Tralee, Co. Kerry, Ireland", "lat" : 52.2715185, "lng" : -9.708596499999999, "name" : "The Greyhound Bar", "rating" : 4.6, "user_ratings_total" : 198 , "category": "pubs"} ]}';

function initMap() {

    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.272145, lng: -9.7164645 },
        zoom: 14,
        mapTypeControl: false
    });    

        let restaurantsObject = JSON.parse(restaurants);
        let hotelsObject = JSON.parse(hotels);
        let pubsObject = JSON.parse(pubs);
                
        for (let i = 0; i < restaurantsObject.restaurantsString.length; i++) {
            let lat = restaurantsObject.restaurantsString[i].lat;
            let lng = restaurantsObject.restaurantsString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let eatMarker = new google.maps.Marker({
                position: latLng,
                map: map
            });

            restaurantMarkers.push(eatMarker);            

            let mapContent = restaurantsObject.restaurantsString[i].formatted_address + " " + restaurantsObject.restaurantsString[i].name;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            eatMarker.addListener('mouseover', function () {
                infowindow.open(map, eatMarker);
            });

            eatMarker.addListener('mouseout', function () {
                infowindow.close();
            });
            

        };   

        for (let i = 0; i < hotelsObject.hotelsString.length; i++) {
            let lat = hotelsObject.hotelsString[i].lat;
            let lng = hotelsObject.hotelsString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let stayMarker = new google.maps.Marker({
                position: latLng,
                map: map
            });

            hotelMarkers.push(stayMarker);            

            let mapContent = hotelsObject.hotelsString[i].formatted_address + " " + hotelsObject.hotelsString[i].name;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            stayMarker.addListener('mouseover', function () {
                infowindow.open(map, stayMarker);
            });

            stayMarker.addListener('mouseout', function () {
                infowindow.close();
            });
            

        };    

        for (let i = 0; i < pubsObject.pubsString.length; i++) {
            let lat = pubsObject.pubsString[i].lat;
            let lng = pubsObject.pubsString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let drinkMarker = new google.maps.Marker({
                position: latLng,
                map: map
            });

            pubMarkers.push(drinkMarker);            

            let mapContent = pubsObject.pubsString[i].formatted_address + " " + pubsObject.pubsString[i].name;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            drinkMarker.addListener('mouseover', function () {
                infowindow.open(map, drinkMarker);
            });

            drinkMarker.addListener('mouseout', function () {
                infowindow.close();
            });
            

        };       

        function showRestaurants() {

        for (var i=0; i < restaurantsObject.restaurantsString.length; i++) {

          if (restaurantsObject.restaurantsString[i].category == 'restaurants') {

            restaurantMarkers[i].setVisible(true);

          }
        }   
        }  

        function showHotels() {

        for (var i=0; i < hotelsObject.hotelsString.length; i++) {

          if (hotelsObject.hotelsString[i].category == 'hotels') {

            hotelMarkers[i].setVisible(true);

          } 
        }   
        }

        function showPubs() {

        for (var i=0; i < pubsObject.pubsString.length; i++) {

          if (pubsObject.pubsString[i].category == 'pubs') {

            pubMarkers[i].setVisible(true);

          }        

        } 
        }     

        

        function hideRestaurants() {

        for (var i=0; i < restaurantsObject.restaurantsString.length; i++) {

          if (restaurantsObject.restaurantsString[i].category == 'restaurants') {

            restaurantMarkers[i].setVisible(false);

          }
        }     
        }

        function hideHotels() {

        for (var i=0; i < hotelsObject.hotelsString.length; i++) {

          if (hotelsObject.hotelsString[i].category == 'hotels') {

            hotelMarkers[i].setVisible(false);

          } 
        }   
        }

        function hidePubs() {

        for (var i=0; i < pubsObject.pubsString.length; i++) {

          if (pubsObject.pubsString[i].category == 'pubs') {

            pubMarkers[i].setVisible(false);

          }        

        } 
        } 

        hideRestaurants("restaurants");

         hideHotels("hotels");

          hidePubs("pubs");
       

      $(".checkbox").click(function(){

            var cat = $(this).attr("value = Pubs");

        

            // If checked

            if ($(this).is(":checked"))

            {

                showPubs(cat);

            }

            else

            {

                hidePubs(cat);

            }

          });


          $(".checkbox").click(function(){

            var cat = $(this).attr("value = Restaurants");

        

            // If checked

            if ($(this).is(":checked"))

            {

                showRestaurants(cat);

            }

            else

            {

                hideRestaurants(cat);

            }

          });


          $(".checkbox").click(function(){

            var cat = $(this).attr("value = Hotels");

        

            // If checked

            if ($(this).is(":checked"))

            {

                showHotels(cat);

            }

            else

            {

                hideHotels(cat);

            }

          });

          

}