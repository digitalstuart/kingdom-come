let quotes = '{ "quotesString" : [' +
    '{ "quote": "You do not get to Dingle by accident it is on the way to nothing but itself" , "who": "Andrew McCarthy travel writer" },' +
    '{ "quote": "It is beautiful. It is well worth the trip. It is something everyone should do if they get the chance" , "who": "Mark Hamill Star Wars actor" },' +
    '{ "quote": "You can feel the past and history of the people who went before you. There is an aura there, a feeling it’s mystical" , "who": "Unknown" },' +
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

document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/kenmare.jpg')" });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[3].quote + " " + quotesObject.quotesString[3].who });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[4].quote + " " + quotesObject.quotesString[4].who });
document.getElementById("kenmare-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[5].quote + " " + quotesObject.quotesString[5].who });


document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/killarney.jpg')" });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[6].quote + " " + quotesObject.quotesString[6].who });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[7].quote + " " + quotesObject.quotesString[7].who });
document.getElementById("killarney-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[8].quote + " " + quotesObject.quotesString[8].who });

document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/listowel.jpg')" });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[9].quote + " " + quotesObject.quotesString[9].who });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[10].quote + " " + quotesObject.quotesString[10].who });
document.getElementById("listowel-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[11].quote + " " + quotesObject.quotesString[11].who });

document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/tralee.jpg')" });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[12].quote + " " + quotesObject.quotesString[12].who });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[13].quote + " " + quotesObject.quotesString[13].who });
document.getElementById("tralee-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[14].quote + " " + quotesObject.quotesString[14].who });

document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("background-image").style.backgroundImage = "url('assets/images/dingle.jpg')" });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("quote-one").innerHTML = quotesObject.quotesString[0].quote + " " + quotesObject.quotesString[0].who });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("quote-two").innerHTML = quotesObject.quotesString[1].quote + " " + quotesObject.quotesString[1].who });
document.getElementById("dingle-link").addEventListener("click", function () { document.getElementById("quote-three").innerHTML = quotesObject.quotesString[2].quote + " " + quotesObject.quotesString[2].who });

function buttonText(x) {
  if (x.matches) { // If media query matches
    document.getElementById("button-text").innerHTML = "Choose your town";
  } else {
    document.getElementById("button-text").innerHTML = "Choose your town/Roghnaigh do bhaile";
  }
}

var x = window.matchMedia("(max-width: 768px)")
buttonText(x) // Call listener function at run time
x.addListener(buttonText) // Attach listener function on state changes