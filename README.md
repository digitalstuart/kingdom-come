# Kingdom Come

PROMO IMAGE HERE

This is intended to be a destination website for County Kerry in Ireland, aka The Kingdom. It sets out to promote the five main towns around the county, using images, relevant information, mapping of key locations and glowing testimonials from visitors and other interested parties.

The idea is that the website will entice readers to want to 'come to the Kingdom', while also offering them an initial glimpse at the attractions they can see, the places they can stay and where they can eat.

There are many prospects for progressive enhancement of the website in the future, which are outlined later in this document.

## UX

This website should allow users to view the core information about all five towns within just a couple of clicks/taps and with minimal scrolling.

It needed to be a dynamic page, where clicking the name of each town from the navbar (dropdown burger menu on mobile) automatically changes all the content at the same time.

The initial website concept is that it will display 'top level' details about the towns, i.e. a hero image, the 'three things' oval-shaped images featuring key places and attractions, a map containing markers for the best hotels, restaurants and places to go (sourced from TripAdvisor), plus quotes aimed at whetting the appetite of people who are intending to visit.

So as a starting point for visitors to Kerry, this site tells them - if you're coming to the Kingdom, you should try staying at one of these hotels, eating at these restaurants and visiting these attractions.

### User Stories

* 1

SCREENSHOT
* 2

SCREENSHOT
* 3

SCREENSHOT

I used Balsamiq to create some wireframes for the project, they further illustrate the layout and content ideas which I outlined above.

WIREFRAME 1
WIREFRAME 2
WIREFRAME 3

## Features

### Existing features

* The navigation menu and other website features use the green and gold colours associated with County Kerry, which makes the site recognisable and familiar.
* The navbar and dropdown burger menu show options to click for each of the five main towns, which are neatly presented in alphabetical order.
* The landing page has an attractive hero image when each town is clicked. The default is Dingle, which is first alphabetically, but is also fitting to be at the forefront because of the beautiful image of the Dingle Peninsula.
* The 'three things' oval-shaped images are desgined to further entice the user with a glimpse at some of the main things each town/area has to offer.
* The 'bouncing arrow' map link at the bottom of the landing page is a call to action for the website user to see that there is more content further down. It is also clickable and uses an anchor link.
* 
* 
* 
* 

### Features left to implement

* Modals
* Calling from the API/marker clustering/info window styling
* List view for map

## Technologies

This project uses HTML, CSS and JavaScript, plus Bootstrap and jQuery.
https://mattboldt.com/demos/typed-js/
https://github.com/mattboldt/typed.js/blob/master/README.md
https://drive.google.com/file/d/1yCbLe0qT6v84VhX0o8P9Eiti4GL8AUj8/view
Here, mention Google Maps API, typed.js, etc.
http://jsfiddle.net/apougher/WEK7C/

## Testing

## Deployment

I went to Settings > GitHub Pages from my 'kingdom-come' GitHub repository.

Then I selected 'master branch' from the Source dropdown.

My site was then automatically published at https://digitalstuart.github.io/kingdom-come.

## Credits

### Content

* The 'bouncing arrow' code was obtained from https://jsfiddle.net/Hybridx24/9fos1r9f.
* For calling .json files from Google Maps API - https://softauthor.com/google-maps-javascript-places-api.
* For removing all other default markers from Google map - https://stackoverflow.com/questions/7538444/how-do-i-remove-default-markers.
* For JavaScript media queries - https://www.w3schools.com/howto/howto_js_media_queries.asp
* For scrolling to the top with a 'back to menu' button (since removed from the site), I referred to https://www.w3schools.com/howto/howto_js_scroll_to_top.asp and https://www.sitepoint.com/community/t/scrolltop-to-a-div-instead-of-body-solved/213672.

### Media

The photos used in this site were sourced from Google image searches.

### Acknowledgements

My massive thanks and appreciation go to my project mentor, Ali Ashik, and Code Institute tutor, Stephen Moody, for their help, guidance and instructions on code for working with .json files from the Google Maps API.