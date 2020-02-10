// Map data

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

let kenmareEating = '{ "kenmareEatingString" : [' +
    '{ "formatted_address": "35 Main Street, Kenmare, County Kerry, Ireland" , "lat": 51.87956399999999 , "lng": -9.582127 , "name": "No. 35" , "rating": 4.5 , "user_ratings_total": 931},' +
    '{ "formatted_address": "Main Street, Kenmare, County Kerry, Ireland" , "lat" : 51.8796869 , "lng" : -9.582380499999999, "name" : "Mulcahy\'s", "rating" : 4.5, "user_ratings_total" : 670},' +
    '{ "formatted_address": "36 Henry Street, Kenmare, County Kerry, Ireland" , "lat" : 51.8783192 , "lng" : -9.5834943, "name" : "Mick & Jimmy\'s", "rating" : 4.5, "user_ratings_total" : 716},' +
    '{ "formatted_address": "26 Main Street, Kenmare, County Kerry, Ireland" , "lat" : 51.879229 , "lng" : -9.581258099999999, "name" : "Lily House Thai & Chinese Restaurant", "rating" : 4.5, "user_ratings_total" : 212},' +
    '{ "formatted_address": "Main Street, Kenmare, County Kerry, Ireland" , "lat" : 51.8791641, "lng" : -9.5811589, "name" : "Tom Crean Fish & Wine", "rating" : 4.5, "user_ratings_total" : 709} ]}';

let kenmareAttractions = '{ "kenmareAttractionsString" : [' +
    '{ "formatted_address": "Raleigh Bonane, Kenmare, County Kerry, Ireland" , "lat" : 51.8012086, "lng" : -9.562438799999999 , "name": "Molly Gallivan\'s Cottage & Traditional Farm" , "rating": 4.5 , "user_ratings_total": 983},' +
    '{ "formatted_address": "Gleninchaquin, Kenmare, County Kerry, Ireland" , "lat" : 51.80198499999999, "lng" : -9.660639, "name" : "Gleninchaquin Park", "rating" : 4.5, "user_ratings_total" : 670},' +
    '{ "formatted_address": "Killowen, Kenmare, County Kerry, Ireland" , "lat" : 51.8765274, "lng" : -9.579175599999999, "name" : "Reenagross Park", "rating" : 4.5, "user_ratings_total" : 73},' +
    '{ "formatted_address": "52 Market Street, Kenmare, County Kerry, Ireland" , "lat" : 51.8784747, "lng" : -9.5881297 , "name" : "Kenmare Stone Circle", "rating" : 4.0, "user_ratings_total" : 614},' +
    '{ "formatted_address": "5 Bridge Street, Kenmare, County Kerry, Ireland" , "lat" : 51.8803966, "lng" : -9.586065999999999, "name" : "Cromwell\'s Bridge", "rating" : 4.0, "user_ratings_total" : 144} ]}';

let kenmareStaying = '{ "kenmareStayingString" : [' +
    '{ "formatted_address": "Casey\'s, Killarney Road, Kenmare, County Kerry, Ireland" , "lat" : 51.8835 , "lng" : -9.5915149 , "name": "Brook Lane Hotel" , "rating": 4.5 , "user_ratings_total": 1433},' +
    '{ "formatted_address": "Sheen Falls Lodge, Kenmare, County Kerry, Ireland" , "lat" : 51.8734343 , "lng" : -9.5639118 , "name" : "Sheen Falls Lodge" , "rating" : 4.5 , "user_ratings_total" : 1265},' +
    '{ "formatted_address": "Shelbourne Street, Kenmare, County Kerry, Ireland" , "lat" : 51.87827 , "lng" : -9.581225 , "name" : "Park Hotel Kenmare" , "rating" : 4.5 , "user_ratings_total" : 1050},' +
    '{ "formatted_address": "Henry Street, Kenmare, County Kerry, Ireland" , "lat" : 51.8795254 , "lng" : -9.583607599999999 , "name" : "Coachmans Townhouse Hotel" , "rating" : 4.5 , "user_ratings_total" : 314},' +
    '{ "formatted_address": "Sneem Road, Kenmare, County Kerry, Ireland" , "lat" : 51.883027 , "lng" : -9.591343 , "name" : "Kenmare Bay Hotel & Resort" , "rating" : 4.0 , "user_ratings_total" : 1523} ]}';

let killarneyEating = '{ "killarneyEatingString" : [' +
    '{ "formatted_address": "8 High Street, Killarney, County Kerry, Ireland" , "lat" : 52.05980479999999, "lng" : -9.5096229 , "name": "Murphy Brownes" , "rating": 5.0 , "user_ratings_total": 525},' +
    '{ "formatted_address": "93 New Street, Killarney, County Kerry, Ireland" , "lat" : 52.0588771, "lng" : -9.5111869 , "name" : "Celtic Whiskey Bar & Larder", "rating" : 4.5, "user_ratings_total" : 681},' +
    '{ "formatted_address": "26 High Street, Killarney, County Kerry, Ireland" , "lat" : 52.060944, "lng" : -9.510202999999999, "name" : "Bricín Restaurant and Boxty House", "rating" : 4.5, "user_ratings_total" : 1927},' +
    '{ "formatted_address": "Killarney, County Kerry, Ireland" , "lat" : 52.057955, "lng" : -9.507685, "name" : "The Cellar at The Ross", "rating" : 4.5, "user_ratings_total" : 529},' +
    '{ "formatted_address": "66 High Street, Killarney, County Kerry, Ireland" , "lat" : 52.05987020000001, "lng" : -9.5100078, "name" : "Khao Asian Street Food", "rating" : 4.5, "user_ratings_total" : 547} ]}';

let killarneyAttractions = '{ "killarneyAttractionsString" : [' +
    '{ "formatted_address": "County Kerry, Ireland" , "lat" : 52.0058447, "lng" : -9.556180299999999 , "name" : "Killarney National Park" , "rating" : 5.0 , "user_ratings_total" : 7123},' +
    '{ "formatted_address": "Inchycullane, Killarney, County Kerry, Ireland" , "lat" : 52.0819357, "lng" : -9.496975599999999, "name" : "Falconry Kerry", "rating" : 5.0, "user_ratings_total" : 464},' +
    '{ "formatted_address": "The National Park, Dromyrourk, Killarney, County Kerry, Ireland" , "lat" : 52.0180696, "lng" : -9.5041358, "name" : "Muckross House, Gardens & Traditional Farms", "rating" : 4.5, "user_ratings_total" : 4907},' +
    '{ "formatted_address": "Rossnahowgarry, Killarney, County Kerry, Ireland" , "lat" : 52.0057453, "lng" : -9.506865200000002, "name" : "Torc Waterfall", "rating" : 4.5, "user_ratings_total" : 3686},' +
    '{ "formatted_address": "Ross Road, Ross Island, Killarney, County Kerry, Ireland" , "lat" : 52.0412494, "lng" : -9.531438099999999 , "name" : "Ross Castle", "rating" : 4.5, "user_ratings_total" : 2839} ]}';

let killarneyStaying = '{ "killarneyStayingString" : [' +
    '{ "formatted_address": "Town Centre, East Avenue, Dromhale, Killarney, County Kerry, Ireland" , "lat" : 52.05794849999999, "lng" : -9.5050922 , "name": "The Killarney Park" , "rating": 5.0 , "user_ratings_total": 2096},' +
    '{ "formatted_address": "East Avenue, Killarney, County Kerry, Ireland" , "lat" : 52.057893, "lng" : -9.507648999999999 , "name" : "The Ross" , "rating" : 5.0 , "user_ratings_total" : 1097},' +
    '{ "formatted_address": "Kenmare Place, Killarney, County Kerry, Ireland" , "lat" : 52.057947, "lng" : -9.507294 , "name" : "International Hotel Killarney" , "rating" : 4.5 , "user_ratings_total" : 3006},' +
    '{ "formatted_address": "Muckross Road, Poulnamuck, Killarney, County Kerry, Ireland" , "lat" : 52.0459256, "lng" : -9.5044579 , "name" : "The Brehon" , "rating" : 4.5 , "user_ratings_total" : 2929},' +
    '{ "formatted_address": "College Street, Killarney, County Kerry, Ireland" , "lat" : 52.0600377, "lng" : -9.505494299999999 , "name" : "Killarney Royal Hotel" , "rating" : 4.5 , "user_ratings_total" : 1307} ]}';

let listowelEating = '{ "listowelEatingString" : [' +
    '{ "formatted_address": "14 Lower William Street, Listowel, County Kerry, Ireland" , "lat" : 52.4462667, "lng" : -9.486072199999999, "name" : "The Horseshoe Bar & Restaurant", "rating" : 4.5, "user_ratings_total" : 30},' +
    '{ "formatted_address": "38 Market Street, Listowel, County Kerry, Ireland" , "lat" : 52.44684520000001, "lng" : -9.4863991 , "name" : "Nanjinj Chinese Restaurant", "rating" : 4.5, "user_ratings_total" : 40},' +    
    '{ "formatted_address": "41 Church Street, Listowel, County Kerry, Ireland" , "lat" : 52.44659919999999, "lng" : -9.4842248 , "name": "Allo\'s Restaurant, Bar & Bistro" , "rating": 4.0 , "user_ratings_total": 280},' +
    '{ "formatted_address": "42 Upper William Street, Listowel, County Kerry, Ireland" , "lat" : 52.447482, "lng" : -9.485915 , "name" : "Jumbo\'s Family Restaurant", "rating" : 4.0, "user_ratings_total" : 39},' +
    '{ "formatted_address": "Market Street, Listowel, County Kerry, Ireland" , "lat" : 52.4470921, "lng" : -9.4877907, "name" : "Eabha Joan\'s", "rating" : 4.0, "user_ratings_total" : 136} ]}';

let listowelAttractions = '{ "listowelAttractionsString" : [' +
    '{ "formatted_address": "John B. Keane Road, Listowel, County Kerry, Ireland" , "lat" : 52.4496208, "lng" : -9.490418799999999 , "name" : "Lartigue Monorail" , "rating" : 5.0 , "user_ratings_total" : 73},' +
    '{ "formatted_address": "25 The Square, Islandmacloughry, Listowel, County Kerry, Ireland" , "lat" : 52.44435130000001, "lng" : -9.4869317 , "name" : "Listowel Castle", "rating" : 4.5, "user_ratings_total" : 123},' +
    '{ "formatted_address": "24 The Square, Listowel, County Kerry, Ireland" , "lat" : 52.44472889999999, "lng" : -9.4862804, "name" : "Kerry Writers Museum", "rating" : 4.5, "user_ratings_total" : 33},' +
    '{ "formatted_address": "Ballygowloge, Ballygologue, Listowel, County Kerry, Ireland" , "lat" : 52.4443441, "lng" : -9.4753219, "name" : "Garden of Europe", "rating" : 4.0, "user_ratings_total" : 22},' +
    '{ "formatted_address": "36 The Square, Listowel, County Kerry, Ireland" , "lat" : 52.4448391, "lng" : -9.4859721 , "name" : "St John\'s Theatre & Arts Centre", "rating" : 4.5, "user_ratings_total" : 28} ]}';

let traleeEating = '{ "traleeEatingString" : [' +
    '{ "formatted_address": "1 The Mall, Balloonagh, Tralee, County Kerry, Ireland" , "lat" : 52.2695745, "lng" : -9.706239699999999 , "name": "Quinlans Fresh Fish & Seafood Bar" , "rating": 4.5 , "user_ratings_total": 558},' +
    '{ "formatted_address": "41 Ashe Street, Cloonalour, Tralee, County Kerry, Ireland" , "lat" : 52.2700293, "lng" : -9.7040375 , "name" : "7th Heaven Bistro & Cafe", "rating" : 5.0, "user_ratings_total" : 62},' +
    '{ "formatted_address": "16 Abbey Street, Tralee, County Kerry, Ireland" , "lat" : 52.2690241, "lng" : -9.707827099999999 , "name" : "Cassidy\'s Restaurants", "rating" : 4.5, "user_ratings_total" : 486},' +
    '{ "formatted_address": "Rock Street, Balloonagh, Tralee, County Kerry, Ireland" , "lat" : 52.2701812, "lng" : -9.708096899999999 , "name" : "Kirby\'s Brogue Inn", "rating" : 4.5, "user_ratings_total" : 1038},' +
    '{ "formatted_address": "14 Prince\'s Street, Tralee, County Kerry, Ireland" , "lat" : 52.2664082, "lng" : -9.710678699999999 , "name" : "Croí Restaurant", "rating" : 4.5, "user_ratings_total" : 366} ]}';

let traleeAttractions = '{ "traleeAttractionsString" : [' +
    '{ "formatted_address": "Town Park, Tralee, County Kerry, Ireland" , "lat" : 52.2664318, "lng" : -9.7083552 , "name" : "Siamsa Tire National Folk Theatre" , "rating" : 5.0 , "user_ratings_total" : 370},' +
    '{ "formatted_address": "Dan Spring Road, Tralee, County Kerry, Ireland" , "lat" : 52.2635412, "lng" : -9.7100084, "name" : "Aqua Dome", "rating" : 4.5, "user_ratings_total" : 841},' +
    '{ "formatted_address": "Ballyard Road, Ballyard, Tralee, County Kerry, Ireland" , "lat" : 52.261875, "lng" : -9.711390099999999, "name" : "Tralee Bay Wetlands Eco & Activity Park", "rating" : 4.5, "user_ratings_total" : 227},' +
    '{ "formatted_address": "Ashe Memorial Hall, Denny Street, Tralee, County Kerry, Ireland" , "lat" : 52.2667702, "lng" : -9.706156499999999 , "name" : "Kerry County Museum", "rating" : 4.5, "user_ratings_total" : 433},' +
    '{ "formatted_address": "Windmill Lane, Blennerville, Tralee, County Kerry, Ireland" , "lat" : 52.2568655, "lng" : -9.736840899999999 , "name" : "Blennerville Windmill", "rating" : 4.5, "user_ratings_total" : 312} ]}';

let traleeStaying = '{ "traleeStayingString" : [' +
    '{ "formatted_address": "Ratass, Tralee, County Kerry, Ireland" , "lat" : 52.2640488, "lng" : -9.6762406 , "name": "Manor West Hotel" , "rating": 4.5 , "user_ratings_total": 1095},' +
    '{ "formatted_address": "Dan Spring Road, Cloon Beg, Tralee, County Kerry, Ireland" , "lat" : 52.2635733, "lng" : -9.700669299999999 , "name" : "The Rose Hotel" , "rating" : 4.5 , "user_ratings_total" : 1464},' +
    '{ "formatted_address": "Maine Street, Tralee, County Kerry, Ireland" , "lat" : 52.2707571, "lng" : -9.7046674 , "name" : "The Ashe Hotel" , "rating" : 4.5 , "user_ratings_total" : 1242},' +
    '{ "formatted_address": "Oakpark, Tralee, County Kerry, Ireland" , "lat" : 52.276176, "lng" : -9.691155 , "name" : "Meadowlands Hotel" , "rating" : 4.5 , "user_ratings_total" : 757},' +
    '{ "formatted_address": "Ballyroe, Tralee, County Kerry, Ireland" , "lat" : 52.296605, "lng" : -9.750987 , "name" : "Ballyroe Heights Hotel" , "rating" : 4.5 , "user_ratings_total" : 1093} ]}';

// Core map function

    function initMap() {
    
    //Base map code

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
        center: { lat: 52.1394887, lng: -10.2808477 },
        zoom: 13,
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

        let mapContent = "Name: " + eatingObject.eatingString[i].name + "<br>" + "Where: " + eatingObject.eatingString[i].formatted_address + "<br>" + "Rating: " + eatingObject.eatingString[i].rating + "<br>" + "No. of ratings: " + eatingObject.eatingString[i].user_ratings_total;
        let infowindow = new google.maps.InfoWindow({
            content: mapContent
        });

        eatingMarker.addListener('click', function () {
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

        let mapContent = "Name: " + attractionsObject.attractionsString[i].name + "<br>" + "Where: " + attractionsObject.attractionsString[i].formatted_address + "<br>" + "Rating: " + attractionsObject.attractionsString[i].rating + "<br>" + "No. of ratings: " + attractionsObject.attractionsString[i].user_ratings_total;
        let infowindow = new google.maps.InfoWindow({
            content: mapContent
        });

        attractionsMarker.addListener('click', function () {
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

        let mapContent = "Name: " + stayingObject.stayingString[i].name + "<br>" + "Where: " + stayingObject.stayingString[i].formatted_address + "<br>" + "Rating: " + stayingObject.stayingString[i].rating + "<br>" + "No. of ratings: " + stayingObject.stayingString[i].user_ratings_total;
        let infowindow = new google.maps.InfoWindow({
            content: mapContent
        });

        stayingMarker.addListener('click', function () {
            infowindow.open(map, stayingMarker);
        });

        stayingMarker.addListener('mouseout', function () {
            infowindow.close();
        });

    };

    //Kenmare map code

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
            center: { lat: 51.8790316, lng: -9.5856994 },
            zoom: 14,
            styles: myStyles
        });

        let kenmareEatingObject = JSON.parse(kenmareEating);
        let kenmareAttractionsObject = JSON.parse(kenmareAttractions);
        let kenmareStayingObject = JSON.parse(kenmareStaying);
        let eatingImage = 'https://i.imgur.com/M2nsXS1.png?1';
        let attractionsImage = 'https://i.imgur.com/QlNM9nx.png?1';
        let stayingImage = 'https://i.imgur.com/z0wt3rY.png?1';

        for (let i = 0; i < kenmareEatingObject.kenmareEatingString.length; i++) {
            let lat = kenmareEatingObject.kenmareEatingString[i].lat;
            let lng = kenmareEatingObject.kenmareEatingString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let eatingMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: eatingImage
            });

            let mapContent = "Name: " + kenmareEatingObject.kenmareEatingString[i].name + "<br>" + "Where: " + kenmareEatingObject.kenmareEatingString[i].formatted_address + "<br>" + "Rating: " + kenmareEatingObject.kenmareEatingString[i].rating + "<br>" + "No. of ratings: " + kenmareEatingObject.kenmareEatingString[i].user_ratings_total;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            eatingMarker.addListener('click', function () {
                infowindow.open(map, eatingMarker);
            });

            eatingMarker.addListener('mouseout', function () {
                infowindow.close();
            });

        };

        for (let i = 0; i < kenmareAttractionsObject.kenmareAttractionsString.length; i++) {
            let lat = kenmareAttractionsObject.kenmareAttractionsString[i].lat;
            let lng = kenmareAttractionsObject.kenmareAttractionsString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let attractionsMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: attractionsImage
            });

            let mapContent = "Name: " + kenmareAttractionsObject.kenmareAttractionsString[i].name + "<br>" + "Where: " + kenmareAttractionsObject.kenmareAttractionsString[i].formatted_address + "<br>" + "Rating: " + kenmareAttractionsObject.kenmareAttractionsString[i].rating + "<br>" + "No. of ratings: " + kenmareAttractionsObject.kenmareAttractionsString[i].user_ratings_total;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            attractionsMarker.addListener('click', function () {
                infowindow.open(map, attractionsMarker);
            });

            attractionsMarker.addListener('mouseout', function () {
                infowindow.close();
            });
        };

        for (let i = 0; i < kenmareStayingObject.kenmareStayingString.length; i++) {
            let lat = kenmareStayingObject.kenmareStayingString[i].lat;
            let lng = kenmareStayingObject.kenmareStayingString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let stayingMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: stayingImage
            });

            let mapContent = "Name: " + kenmareStayingObject.kenmareStayingString[i].name + "<br>" + "Where: " + kenmareStayingObject.kenmareStayingString[i].formatted_address + "<br>" + "Rating: " + kenmareStayingObject.kenmareStayingString[i].rating + "<br>" + "No. of ratings: " + kenmareStayingObject.kenmareStayingString[i].user_ratings_total;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            stayingMarker.addListener('click', function () {
                infowindow.open(map, stayingMarker);
            });

            stayingMarker.addListener('mouseout', function () {
                infowindow.close();
            });

        };

    });

    // Killarney map code

    document.getElementById("killarney-link").addEventListener("click", function () {

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
            center: { lat: 52.0615525, lng: -9.5083282 },
            zoom: 14,
            styles: myStyles
        });

        let killarneyEatingObject = JSON.parse(killarneyEating);
        let killarneyAttractionsObject = JSON.parse(killarneyAttractions);
        let killarneyStayingObject = JSON.parse(killarneyStaying);
        let eatingImage = 'https://i.imgur.com/M2nsXS1.png?1';
        let attractionsImage = 'https://i.imgur.com/QlNM9nx.png?1';
        let stayingImage = 'https://i.imgur.com/z0wt3rY.png?1';

        for (let i = 0; i < killarneyEatingObject.killarneyEatingString.length; i++) {
            let lat = killarneyEatingObject.killarneyEatingString[i].lat;
            let lng = killarneyEatingObject.killarneyEatingString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let eatingMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: eatingImage
            });

            let mapContent = "Name: " + killarneyEatingObject.killarneyEatingString[i].name + "<br>" + "Where: " + killarneyEatingObject.killarneyEatingString[i].formatted_address + "<br>" + "Rating: " + killarneyEatingObject.killarneyEatingString[i].rating + "<br>" + "No. of ratings: " + killarneyEatingObject.killarneyEatingString[i].user_ratings_total;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            eatingMarker.addListener('click', function () {
                infowindow.open(map, eatingMarker);
            });

            eatingMarker.addListener('mouseout', function () {
                infowindow.close();
            });

        };

        for (let i = 0; i < killarneyAttractionsObject.killarneyAttractionsString.length; i++) {
            let lat = killarneyAttractionsObject.killarneyAttractionsString[i].lat;
            let lng = killarneyAttractionsObject.killarneyAttractionsString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let attractionsMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: attractionsImage
            });

            let mapContent = "Name: " + killarneyAttractionsObject.killarneyAttractionsString[i].name + "<br>" + "Where: " + killarneyAttractionsObject.killarneyAttractionsString[i].formatted_address + "<br>" + "Rating: " + killarneyAttractionsObject.killarneyAttractionsString[i].rating + "<br>" + "No. of ratings: " + killarneyAttractionsObject.killarneyAttractionsString[i].user_ratings_total;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            attractionsMarker.addListener('click', function () {
                infowindow.open(map, attractionsMarker);
            });

            attractionsMarker.addListener('mouseout', function () {
                infowindow.close();
            });
        };

        for (let i = 0; i < killarneyStayingObject.killarneyStayingString.length; i++) {
            let lat = killarneyStayingObject.killarneyStayingString[i].lat;
            let lng = killarneyStayingObject.killarneyStayingString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let stayingMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: stayingImage
            });

            let mapContent = "Name: " + killarneyStayingObject.killarneyStayingString[i].name + "<br>" + "Where: " + killarneyStayingObject.killarneyStayingString[i].formatted_address + "<br>" + "Rating: " + killarneyStayingObject.killarneyStayingString[i].rating + "<br>" + "No. of ratings: " + killarneyStayingObject.killarneyStayingString[i].user_ratings_total;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            stayingMarker.addListener('click', function () {
                infowindow.open(map, stayingMarker);
            });

            stayingMarker.addListener('mouseout', function () {
                infowindow.close();
            });

        };

    });
    
    // Listowel map code

    document.getElementById("listowel-link").addEventListener("click", function () {

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
            center: { lat: 52.4468587, lng: -9.4866836 },
            zoom: 14,
            styles: myStyles
        });

        let listowelEatingObject = JSON.parse(listowelEating);
        let listowelAttractionsObject = JSON.parse(listowelAttractions);
        let eatingImage = 'https://i.imgur.com/M2nsXS1.png?1';
        let attractionsImage = 'https://i.imgur.com/QlNM9nx.png?1';

        for (let i = 0; i < listowelEatingObject.listowelEatingString.length; i++) {
            let lat = listowelEatingObject.listowelEatingString[i].lat;
            let lng = listowelEatingObject.listowelEatingString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let eatingMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: eatingImage
            });

            let mapContent = "Name: " + listowelEatingObject.listowelEatingString[i].name + "<br>" + "Where: " + listowelEatingObject.listowelEatingString[i].formatted_address + "<br>" + "Rating: " + listowelEatingObject.listowelEatingString[i].rating + "<br>" + "No. of ratings: " + listowelEatingObject.listowelEatingString[i].user_ratings_total;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            eatingMarker.addListener('click', function () {
                infowindow.open(map, eatingMarker);
            });

            eatingMarker.addListener('mouseout', function () {
                infowindow.close();
            });

        };

        for (let i = 0; i < listowelAttractionsObject.listowelAttractionsString.length; i++) {
            let lat = listowelAttractionsObject.listowelAttractionsString[i].lat;
            let lng = listowelAttractionsObject.listowelAttractionsString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let attractionsMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: attractionsImage
            });

            let mapContent = "Name: " + listowelAttractionsObject.listowelAttractionsString[i].name + "<br>" + "Where: " + listowelAttractionsObject.listowelAttractionsString[i].formatted_address + "<br>" + "Rating: " + listowelAttractionsObject.listowelAttractionsString[i].rating + "<br>" + "No. of ratings: " + listowelAttractionsObject.listowelAttractionsString[i].user_ratings_total;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            attractionsMarker.addListener('click', function () {
                infowindow.open(map, attractionsMarker);
            });

            attractionsMarker.addListener('mouseout', function () {
                infowindow.close();
            });
        };        
    });    
    
    // Tralee map code

    document.getElementById("tralee-link").addEventListener("click", function () {

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
            center: { lat: 52.2671263, lng: -9.7095775 },
            zoom: 14,
            styles: myStyles
        });

        let traleeEatingObject = JSON.parse(traleeEating);
        let traleeAttractionsObject = JSON.parse(traleeAttractions);
        let traleeStayingObject = JSON.parse(traleeStaying);
        let eatingImage = 'https://i.imgur.com/M2nsXS1.png?1';
        let attractionsImage = 'https://i.imgur.com/QlNM9nx.png?1';
        let stayingImage = 'https://i.imgur.com/z0wt3rY.png?1';

        for (let i = 0; i < traleeEatingObject.traleeEatingString.length; i++) {
            let lat = traleeEatingObject.traleeEatingString[i].lat;
            let lng = traleeEatingObject.traleeEatingString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let eatingMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: eatingImage
            });

            let mapContent = "Name: " + traleeEatingObject.traleeEatingString[i].name + "<br>" + "Where: " + traleeEatingObject.traleeEatingString[i].formatted_address + "<br>" + "Rating: " + traleeEatingObject.traleeEatingString[i].rating + "<br>" + "No. of ratings: " + traleeEatingObject.traleeEatingString[i].user_ratings_total;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            eatingMarker.addListener('click', function () {
                infowindow.open(map, eatingMarker);
            });

            eatingMarker.addListener('mouseout', function () {
                infowindow.close();
            });

        };

        for (let i = 0; i < traleeAttractionsObject.traleeAttractionsString.length; i++) {
            let lat = traleeAttractionsObject.traleeAttractionsString[i].lat;
            let lng = traleeAttractionsObject.traleeAttractionsString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let attractionsMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: attractionsImage
            });

            let mapContent = "Name: " + traleeAttractionsObject.traleeAttractionsString[i].name + "<br>" + "Where: " + traleeAttractionsObject.traleeAttractionsString[i].formatted_address + "<br>" + "Rating: " + traleeAttractionsObject.traleeAttractionsString[i].rating + "<br>" + "No. of ratings: " + traleeAttractionsObject.traleeAttractionsString[i].user_ratings_total;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            attractionsMarker.addListener('click', function () {
                infowindow.open(map, attractionsMarker);
            });

            attractionsMarker.addListener('mouseout', function () {
                infowindow.close();
            });
        };

        for (let i = 0; i < traleeStayingObject.traleeStayingString.length; i++) {
            let lat = traleeStayingObject.traleeStayingString[i].lat;
            let lng = traleeStayingObject.traleeStayingString[i].lng;
            let latLng = new google.maps.LatLng(lat, lng);
            let stayingMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: stayingImage
            });

            let mapContent = "Name: " + traleeStayingObject.traleeStayingString[i].name + "<br>" + "Where: " + traleeStayingObject.traleeStayingString[i].formatted_address + "<br>" + "Rating: " + traleeStayingObject.traleeStayingString[i].rating + "<br>" + "No. of ratings: " + traleeStayingObject.traleeStayingString[i].user_ratings_total;
            let infowindow = new google.maps.InfoWindow({
                content: mapContent
            });

            stayingMarker.addListener('click', function () {
                infowindow.open(map, stayingMarker);
            });

            stayingMarker.addListener('mouseout', function () {
                infowindow.close();
            });

        };

    });

    // Dingle return map code

    document.getElementById("dingle-link").addEventListener("click", function () {

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
            center: { lat: 52.1394887, lng: -10.2808477 },
            zoom: 13,
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

        let mapContent = "Name: " + eatingObject.eatingString[i].name + "<br>" + "Where: " + eatingObject.eatingString[i].formatted_address + "<br>" + "Rating: " + eatingObject.eatingString[i].rating + "<br>" + "No. of ratings: " + eatingObject.eatingString[i].user_ratings_total;
        let infowindow = new google.maps.InfoWindow({
            content: mapContent
        });

        eatingMarker.addListener('click', function () {
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

        let mapContent = "Name: " + attractionsObject.attractionsString[i].name + "<br>" + "Where: " + attractionsObject.attractionsString[i].formatted_address + "<br>" + "Rating: " + attractionsObject.attractionsString[i].rating + "<br>" + "No. of ratings: " + attractionsObject.attractionsString[i].user_ratings_total;
        let infowindow = new google.maps.InfoWindow({
            content: mapContent
        });

        attractionsMarker.addListener('click', function () {
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

        let mapContent = "Name: " + stayingObject.stayingString[i].name + "<br>" + "Where: " + stayingObject.stayingString[i].formatted_address + "<br>" + "Rating: " + stayingObject.stayingString[i].rating + "<br>" + "No. of ratings: " + stayingObject.stayingString[i].user_ratings_total;
        let infowindow = new google.maps.InfoWindow({
            content: mapContent
        });

        stayingMarker.addListener('click', function () {
            infowindow.open(map, stayingMarker);
        });

        stayingMarker.addListener('mouseout', function () {
            infowindow.close();
        });

    };

    });

}