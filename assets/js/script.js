// Hard-coded for quotes section

let quotes = '{ "quotesString" : [' +
    '{ "quote": "It is beautiful. It is well worth the trip. It is something everyone should do if they get the chance." , "who": "Mark Hamill, Star Wars actor" },' +
    '{ "quote": "You do not get to Dingle by accident. It is on the way to nothing but itself." , "who": "Andrew McCarthy, travel writer" },' +
    '{ "quote": "You can feel the past and history of the people who went before you. There is an aura there, a feeling, it is mystical." , "who": "Joe Bloggs, tourist" },' +
    '{ "quote": "Kenmare quote 1" , "who": "Kenmare person 1" },' +
    '{ "quote": "Kenmare quote 2" , "who": "Kenmare person 2" },' +
    '{ "quote": "Kenmare quote 3" , "who": "Kenmare person 3" },' +
    '{ "quote": "Killarney quote 1" , "who": "Killarney person 1" },' +
    '{ "quote": "Killarney quote 2" , "who": "Killarney person 2" },' +
    '{ "quote": "Killarney quote 3" , "who": "Killarney person 3" },' +
    '{ "quote": "Listowel quote 1" , "who": "Listowel person 1" },' +
    '{ "quote": "Listowel quote 2" , "who": "Listowel person 2" },' +
    '{ "quote": "Listowel quote 3" , "who": "Listowel person 3" },' +
    '{ "quote": "Tralee quote 1" , "who": "Tralee person 1" },' +
    '{ "quote": "Tralee quote 2" , "who": "Tralee person 2" },' +
    '{ "quote": "Tralee quote 3" , "who": "Tralee person 3" } ]}';

let quotesObject = JSON.parse(quotes);

// ALL DYNAMIC FUNCTIONALITY WHEN CLICKING 'KENMARE'

// Change background image
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/kenmare.jpg')"; });

// Change quotes
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[3].quote; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("who-one").innerHTML = quotesObject.quotesString[3].who; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[4].quote; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("who-two").innerHTML = quotesObject.quotesString[4].who; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[5].quote; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("who-three").innerHTML = quotesObject.quotesString[5].who; });

// Change 'three things' images, words & alt text
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("three-things-one").src = 'assets/images/kenmare-reenagross.jpg'; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("three-things-two").src = 'assets/images/kenmare-square.jpg'; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("three-things-three").src = 'assets/images/kenmare-main.jpg'; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("three-things-one").alt = 'Reenagross Park in Kenmare'; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("three-things-two").alt = 'The Square in Kenmare'; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("three-things-three").alt = 'Main Street in Kenmare'; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("text-one").innerHTML = 'Reenagross'; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("text-two").innerHTML = 'Square'; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("text-three").innerHTML = 'Main St'; });

// Bring back missing map key elements after Listowel click makes them 'display:none'
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("list-stay").style.display = "inline"; });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("list-more").style.display = "inline"; });

// ALL DYNAMIC FUNCTIONALITY WHEN CLICKING 'KILLARNEY'

// Change background image
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/killarney.jpg')"; });

// Change quotes
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[6].quote; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("who-one").innerHTML = quotesObject.quotesString[6].who; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[7].quote; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("who-two").innerHTML = quotesObject.quotesString[7].who; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[8].quote; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("who-three").innerHTML = quotesObject.quotesString[8].who; });

// Change 'three things' images, words & alt text
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("three-things-one").src = 'assets/images/killarney-muckross.jpg'; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("three-things-two").src = 'assets/images/killarney-horses.jpg'; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("three-things-three").src = 'assets/images/killarney-town.jpg'; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("three-things-one").alt = 'Muckross House in Killarney'; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("three-things-two").alt = 'Jaunting cars in Killarney'; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("three-things-three").alt = 'Killarney town centre'; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("text-one").innerHTML = 'Muckross'; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("text-two").innerHTML = 'Jaunting'; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("text-three").innerHTML = 'Town'; });

// Bring back missing map key elements after Listowel click makes them 'display:none'
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("list-stay").style.display = "inline"; });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("list-more").style.display = "inline"; });

// ALL DYNAMIC FUNCTIONALITY WHEN CLICKING 'LISTOWEL'

// Change background image
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/listowel.jpg')"; });

// Change quotes
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[9].quote; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("who-one").innerHTML = quotesObject.quotesString[9].who; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[10].quote; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("who-two").innerHTML = quotesObject.quotesString[10].who; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[11].quote; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("who-three").innerHTML = quotesObject.quotesString[11].who; });

// Change 'three things' images, words & alt text
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("three-things-one").src = 'assets/images/listowel-monorail.jpg'; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("three-things-two").src = 'assets/images/listowel-castle.jpg'; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("three-things-three").src = 'assets/images/listowel-garden.jpg'; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("three-things-one").alt = 'Lartigue Monorail in Listowel'; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("three-things-two").alt = 'Listowel Castle'; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("three-things-three").alt = 'Gardens of Europe in Listowel'; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("text-one").innerHTML = 'Monorail'; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("text-two").innerHTML = 'Castle'; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("text-three").innerHTML = 'Gardens'; });

// Two unused map key icons removed
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("list-stay").style.display = "none"; });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("list-more").style.display = "none"; });

// ALL DYNAMIC FUNCTIONALITY WHEN CLICKING 'TRALEE'

// Change background image
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/tralee.jpg')"; });

// Change quotes
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[12].quote; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("who-one").innerHTML = quotesObject.quotesString[12].who; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[13].quote; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("who-two").innerHTML = quotesObject.quotesString[13].who; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[14].quote; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("who-three").innerHTML = quotesObject.quotesString[14].who; });

// Change 'three things' images, words & alt text
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("three-things-one").src = 'assets/images/tralee-blennerville.jpg'; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("three-things-two").src = 'assets/images/tralee-park.jpg'; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("three-things-three").src = 'assets/images/tralee-aquadome.jpg'; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("three-things-one").alt = 'Blennerville Windmill in Tralee'; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("three-things-two").alt = 'Tralee town park'; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("three-things-three").alt = 'Aquadome swimming pool in Tralee'; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("text-one").innerHTML = 'Blennerville'; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("text-two").innerHTML = 'Park'; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("text-three").innerHTML = 'Aquadome'; });

// Bring back missing map key elements after Listowel click makes them 'display:none'
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("list-stay").style.display = "inline"; });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("list-more").style.display = "inline"; });

// ALL DYNAMIC FUNCTIONALITY WHEN CLICKING 'DINGLE'

// Change background image
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/dingle.jpg')"; });

// Change quotes
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[0].quote; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("who-one").innerHTML = quotesObject.quotesString[0].who; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[1].quote; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("who-two").innerHTML = quotesObject.quotesString[1].who; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[2].quote; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("who-three").innerHTML = quotesObject.quotesString[2].who; });

// Change 'three things' images, words & alt text
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("three-things-one").src = 'assets/images/dingle-fungie.jpg'; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("three-things-two").src = 'assets/images/dingle-inch.jpg'; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("three-things-three").src = 'assets/images/dingle-oceanworld.jpg'; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("three-things-one").alt = 'Statue of Fungie the dolphin in Dingle'; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("three-things-two").alt = 'Inch Beach on the Dingle Peninsula'; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("three-things-three").alt = 'Tunnel aquarium at Dingle Oceanworld'; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("text-one").innerHTML = 'Fungie'; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("text-two").innerHTML = 'Inch'; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("text-three").innerHTML = 'Oceanworld'; });

// Bring back missing map key elements after Listowel click makes them 'display:none'
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("list-stay").style.display = "inline"; });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("list-more").style.display = "inline"; });


// Media query for shortening map key text on smaller devices (https://www.w3schools.com/howto/howto_js_media_queries.asp)
function myFunction(x) {
    if (x.matches) { 
        document.getElementById("eat").innerHTML = ("Places to eat");
    } else {
        document.getElementById("eat").innerHTML = ("Eat");
    }

    if (x.matches) { 
        document.getElementById("stay").innerHTML = ("Places to stay");
    } else {
        document.getElementById("stay").innerHTML = ("Stay");
    }

    if (x.matches) { 
        document.getElementById("go").innerHTML = ("Places to go");
    } else {
        document.getElementById("go").innerHTML = ("Go");
    }

    if (x.matches) { 
        document.getElementById("more").innerHTML = ("Zoom out for more");
    } else {
        document.getElementById("more").innerHTML = ("More");
    }

}

var x = window.matchMedia("(min-width: 630px)");
myFunction(x);
x.addListener(myFunction);