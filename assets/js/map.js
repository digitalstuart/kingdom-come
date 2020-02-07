/*

let restaurantMarkers = [];
let hotelMarkers = [];
let pubMarkers = [];

*/

let eating = '{ "eatingString" : [' +
    '{ "formatted_address": "Green Street, Dingle, County Kerry, Ireland" , "lat": 52.1415429 , "lng": -10.2704251 , "name": "The Fish Box/Flannery\'s Seafood Bar" , "rating": 5.0 , "user_ratings_total": 500},' +
    '{ "formatted_address": "Main Street, Grove, Dingle, County Kerry, Ireland" , "lat" : 52.1415871 , "lng" : -10.2686796, "name" : "Land To Sea", "rating" : 5.0, "user_ratings_total" : 89},' +
    '{ "formatted_address": "Lower Main Street, Grove, Dingle, County Kerry, Ireland" , "lat" : 52.1412065 , "lng" : -10.2672304, "name" : "Pantri Cafe", "rating" : 5.0, "user_ratings_total" : 136},' +
    '{ "formatted_address": "Green Street, Dingle, County Kerry, Ireland" , "lat" : 52.140976 , "lng" : -10.271026, "name" : "Bean In Dingle", "rating" : 5.0, "user_ratings_total" : 351},' +
    '{ "formatted_address": "Strand Street, Dingle, County Kerry, Ireland" , "lat" : 52.1393625 , "lng" : -10.2747959 , "name" : "James Long Pub", "rating" : 5.0, "user_ratings_total" : 103} ]}';

let attractions = '{ "attractionsString" : [' +
    '{ "formatted_address": "Carhoo West, County Kerry, Ireland" , "lat": 52.1155202 , "lng": -10.2816985 , "name": "Eask Tower" , "rating": 5.0 , "user_ratings_total": 251},' +
    '{ "formatted_address": "Coumeenoole North, County Kerry, Ireland" , "lat" : 52.1098114 , "lng" : -10.4644343, "name" : "Coumeenoole Beach", "rating" : 5.0, "user_ratings_total" : 258},' +
    '{ "formatted_address": "Farranredmond, Dingle, County Kerry, Ireland" , "lat" : 52.1418288 , "lng" : -10.2892974, "name" : "Dingle Distillery", "rating" : 4.5, "user_ratings_total" : 447},' +
    '{ "formatted_address": "Main Street, Grove, Dingle, County Kerry, Ireland" , "lat" : 52.1415585 , "lng" : -10.2680867 , "name" : "St James\' Church", "rating" : 4.5, "user_ratings_total" : 332},' +
    '{ "formatted_address": "Gallarus, Dingle, County Kerry, Ireland" , "lat" : 52.1736605 , "lng" : -10.3523922, "name" : "Gallarus Oratory", "rating" : 4.5, "user_ratings_total" : 1583} ]}';

let staying = '{ "stayingString" : [' +
    '{ "formatted_address": "Upper John Street, Farraneesteenig, Dingle, County Kerry, Ireland" , "lat": 52.1338631 , "lng": -10.2571086 , "name": "Pax Guest House" , "rating": 5.0 , "user_ratings_total": 1926},' +
    '{ "formatted_address": "The Wood, Dingle, County Kerry, Ireland" , "lat" : 52.1410543 , "lng" : -10.2864218, "name" : "Castlewood House", "rating" : 5.0, "user_ratings_total" : 1441},' +
    '{ "formatted_address": "The Wood, Dingle, County Kerry, Ireland" , "lat" : 52.1408627 , "lng" : -10.2858315, "name" : "Heaton\'s Guesthouse", "rating" : 5.0, "user_ratings_total" : 1293},' +
    '{ "formatted_address": "Gortonora, Dingle, County Kerry, Ireland" , "lat" : 52.1381733 , "lng" : -10.262914 , "name" : "Greenmount House", "rating" : 5.0, "user_ratings_total" : 1080},' +
    '{ "formatted_address": "The Wood, Dingle, County Kerry, Ireland" , "lat" : 52.14006089999999 , "lng" : -10.2889296, "name" : "Milltown House", "rating" : 5.0, "user_ratings_total" : 631} ]}';

/*

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

*/

function initMap() {

    let myStyles = [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.1406427, lng: -10.2889963 },
        zoom: 14,
        styles: myStyles
    });

    let eatingObject = JSON.parse(eating);
    let attractionsObject = JSON.parse(attractions);
    let stayingObject = JSON.parse(staying);
    let eatingImage = 'https://i.imgur.com/M2nsXS1.png?1';
    let attractionsImage = 'https://i.imgur.com/QlNM9nx.png?1';
    let stayingImage = 'https://i.imgur.com/z0wt3rY.png?1';

    for (let i = 0; i < eatingObject.eatingString.length; i++) {
        let lat = eatingObject.eatingString[i].lat;
        let lng = eatingObject.eatingString[i].lng;
        let latLng = new google.maps.LatLng(lat, lng);
        let eatingMarker = new google.maps.Marker({
            position: latLng,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: eatingImage
        });

        let mapContent = eatingObject.eatingString[i].formatted_address + " " + eatingObject.eatingString[i].name;
        let infowindow = new google.maps.InfoWindow({
            content: mapContent
        });

        eatingMarker.addListener('mouseover', function () {
            infowindow.open(map, eatingMarker);
        });

        eatingMarker.addListener('mouseout', function () {
            infowindow.close();
        });

    };

    for (let i = 0; i < attractionsObject.attractionsString.length; i++) {
        let lat = attractionsObject.attractionsString[i].lat;
        let lng = attractionsObject.attractionsString[i].lng;
        let latLng = new google.maps.LatLng(lat, lng);
        let attractionsMarker = new google.maps.Marker({
            position: latLng,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: attractionsImage
        });

        let mapContent = attractionsObject.attractionsString[i].formatted_address + " " + attractionsObject.attractionsString[i].name;
        let infowindow = new google.maps.InfoWindow({
            content: mapContent
        });

        attractionsMarker.addListener('mouseover', function () {
            infowindow.open(map, attractionsMarker);
        });

        attractionsMarker.addListener('mouseout', function () {
            infowindow.close();
        });
    };

    for (let i = 0; i < stayingObject.stayingString.length; i++) {
        let lat = stayingObject.stayingString[i].lat;
        let lng = stayingObject.stayingString[i].lng;
        let latLng = new google.maps.LatLng(lat, lng);
        let stayingMarker = new google.maps.Marker({
            position: latLng,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: stayingImage
        });

        let mapContent = stayingObject.stayingString[i].formatted_address + " " + stayingObject.stayingString[i].name;
        let infowindow = new google.maps.InfoWindow({
            content: mapContent
        });

        stayingMarker.addListener('mouseover', function () {
            infowindow.open(map, stayingMarker);
        });

        stayingMarker.addListener('mouseout', function () {
            infowindow.close();
        });

    };


    document.getElementById("kenmare-link").addEventListener("click", function () {

        let myStyles = [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ];

        let map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 52.1406427, lng: -10.2889963 },
            zoom: 14,
            styles: myStyles
        });

        let eatingObject = JSON.parse(eating);
        let attractionsObject = JSON.parse(attractions);
        let stayingObject = JSON.parse(staying);
        let eatingImage = 'http://www.myiconfinder.com/uploads/iconsets/256-256-f900504cdc9f243b1c6852985c35a7f7.png';
        let attractionsImage = 'https://i.imgur.com/QlNM9nx.png?1';
        let stayingImage = 'https://i.imgur.com/z0wt3rY.png?1';

        for (let i = 0; i < eatingObject.eatingString.length; i++) {
            let lat = eatingObject.eatingString[i].lat;
            let lng = eatingObject.eatingString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let eatingMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: eatingImage
            });

            let mapContent = eatingObject.eatingString[i].formatted_address + " " + eatingObject.eatingString[i].name;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            eatingMarker.addListener('mouseover', function () {
                infowindow.open(map, eatingMarker);
            });

            eatingMarker.addListener('mouseout', function () {
                infowindow.close();
            });

        };

        for (let i = 0; i < attractionsObject.attractionsString.length; i++) {
            let lat = attractionsObject.attractionsString[i].lat;
            let lng = attractionsObject.attractionsString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let attractionsMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: attractionsImage
            });

            let mapContent = attractionsObject.attractionsString[i].formatted_address + " " + attractionsObject.attractionsString[i].name;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            attractionsMarker.addListener('mouseover', function () {
                infowindow.open(map, attractionsMarker);
            });

            attractionsMarker.addListener('mouseout', function () {
                infowindow.close();
            });
        };

        for (let i = 0; i < stayingObject.stayingString.length; i++) {
            let lat = stayingObject.stayingString[i].lat;
            let lng = stayingObject.stayingString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let stayingMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: stayingImage
            });

            let mapContent = stayingObject.stayingString[i].formatted_address + " " + stayingObject.stayingString[i].name;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            stayingMarker.addListener('mouseover', function () {
                infowindow.open(map, stayingMarker);
            });

            stayingMarker.addListener('mouseout', function () {
                infowindow.close();
            });

        };

    });

}

/*

    for (let i = 0; i < hotelsObject.hotelsString.length; i++) {
        let lat = hotelsObject.hotelsString[i].lat;
        let lng = hotelsObject.hotelsString[i].lng;
        let latLng = new google.maps.LatLng(lat, lng);
        let stayMarker = new google.maps.Marker({
            position: latLng,
            map: map
        });

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

    hide('restaurants')
    hide('hotels')
    hide('pubs')

    function show() {

        for (i = 0, j = 0, k = 0; i < restaurantsObject.restaurantsString.length && j < hotelsObject.hotelsString.length && k < pubsObject.pubsString.length; i++ , j++ , k++) {

            if (pubsObject.pubsString[k].category == 'pubs') {

                restaurantMarkers[i].setVisible(false);
                hotelMarkers[i].setVisible(false);
                pubMarkers[i].setVisible(true)
            }
        }
    }

    function hide() {

        for (i = 0, j = 0, k = 0; i < restaurantsObject.restaurantsString.length && j < hotelsObject.hotelsString.length && k < pubsObject.pubsString.length; i++ , j++ , k++) {

            if (pubsObject.pubsString[i].category == 'pubs') {

                restaurantMarkers[i].setVisible(false);
                hotelMarkers[i].setVisible(false);
                pubMarkers[i].setVisible(false)
            }
        }
    }

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