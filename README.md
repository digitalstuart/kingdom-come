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

* I am planning a trip to Kerry and I want to know what the main towns around the county have to offer me as a visitor.

![alt text](https://i.imgur.com/iLy9U3h.jpg "Kingdom Come screenshot")
* I'm coming to County Kerry and I want to know the locations of the best hotels/restaurants/attractions in a certain town.

![alt text](https://i.imgur.com/D56Tugb.jpg "Kingdom Come screenshot")
* I haven't got a great deal of time to spend in County Kerry, I want to know why [name of town] should be on my list.

![alt text](https://i.imgur.com/GGjyC6j.jpg "Kingdom Come screenshot")

I used Balsamiq to create some wireframes for the project. This initial one shows that the basic premise for the website was clear from the start, however the structure and layout was modified to make it more dynamic and interactive. The video idea was put on the shelf at this stage.

![alt text](https://i.imgur.com/6Ro7Wcy.jpg "Kingdom Come wireframe")
![alt text](https://i.imgur.com/SEltWEW.jpg "Kingdom Come wireframe")

## Features

### Existing features

* The navigation menu and other website features use the green and gold colours associated with County Kerry, which makes the site recognisable and familiar.
* The navbar and dropdown burger menu show options to click for each of the five main towns, which are neatly presented in alphabetical order.
* The landing page has an attractive hero image when each town is clicked. The default is Dingle, which is first alphabetically, but is also fitting to be at the forefront because of the beautiful image of the Dingle Peninsula.
* The 'three things' oval-shaped images are desgined to further entice the user with a glimpse at some of the main things each town/area has to offer.
    * I added modals for each of the images (see screenshot below), but unfortunately I encountered issues with not being able to close them on mobile devices. I also tried some code for only having the modals as working functionality on larger screens, however time constraints meant I had to move them into 'features left to implement'.
![alt text](https://i.imgur.com/ISAwCcb.jpg "Kingdom Come screenshot")
* The 'bouncing arrow' map link at the bottom of the landing page is a call to action for the website user to see that there is more content further down. It is also clickable and uses an anchor link.
* The Google map contains 5x markers for restaurants, hotels and attractions. The map content dynamically changes when each town name is clicked. Each marker icon has an 'info window'. There is a map key which behaves responsively. NB: the Listowel map has fewer icons due to, well, fewer places of note!
    * My work on the map began with calling .json files from the Google Maps API and working with them in Gitpod (e.g. the 'tralee_restaurants.json' file). I did manage to write a for loop whereby I could iterate through the data (with a successful console.log test) and place markers on the map by accessing the latitude and longitude keys and values. 
    * I was also working on a checkbox where users could select to see only restaurants or only hotels (as there were a lot more markers than the final deployed version of the site). I was referring to this code for the checkbox testing - http://jsfiddle.net/apougher/WEK7C.
    * Unfortunately I then got to a point where I felt my JavaScript knowledge and aptitude was not yet strong enough for me to be able complete all my desired features in the project timeframe. At this point I decided to go back to having hard-coded data for the map.
* The quotes section uses the Bootstrap accordion functionality, with CSS styling and responsive behaviour. The quotes dynamically change according to which town is selected. NB: the landing page has real quotes, all other towns contain filler text due to project time pressures.
    * I also played around with some nice functionality from https://mattboldt.com/demos/typed-js for the quotes section. I did manage adapt some of the code in order to create a typing effect for my quotes (an example can be seen at this link - https://drive.google.com/file/d/1yCbLe0qT6v84VhX0o8P9Eiti4GL8AUj8/view); unfortunately though, it led to performance issues and bugs which I was unable to solve at this stage of my learning.

NB: my work during the project with the Google Maps API, .json files, modals and the typed.js functionality can be seen in the version control history.

### Features left to implement

* Modals for the 'three things' images, different ones for each town.
* Populating the map from the Google Maps API/.json files, rather than hard-coded data. I would also look at marker clustering and 'info window' styling.
* I would also aim for the map to have a companion list view for all the markers, containing extra content such as images and external website links.
* There could be scope for adding 'showcase' videos of each of the towns to the content offering.

## Technologies

This project uses HTML, CSS and JavaScript, plus Bootstrap and jQuery.
I also worked extensively with the Google Maps API developer documentation, as well as .json files and the typed.js JavaScript typing animation.

## Testing

1. Navbar
    * Clicking on the site logo redirects correctly to /index.html.
    * Clicking on the individual town names achieves the following dynamic effects:
        * The main background image changes
        * The images, words and alt text change for the 'three things' section
        * The map updates to a new location with relevant map markers
        * The accordion quotes panels update accordingly
    * In mobile view, the burger icon correctly displays the dropdown menu. All the menu links behave in the expected way, as above
    * The navbar auto-collapses when an option is selected from the burger menu
    * The navbar stays fixed in place on the site

2. Landing page
    * The 'three things' oval-shaped images convert from a row to a column for smaller screen sizes
    
3. 'Bouncing arrow' map link
    * This jumps the user down to the map element
    * The icon disappears when the page is scrolled down and reappears when the top of the screen is reached

4. Map
    * Clicking a marker icon displays an 'info window' with all fields populated correctly
    * 'Mouseout' functionality makes the 'info window' disappear
    * The map has zooming and panning working correctly
    * The map updates with new markers when a different town name is selected
    * The main cluster of markers remain visible on the map in mobile view
    * The text for the individual items in the map key is shortened for smaller devices
    
5. Quotes section
    * The content of each accordion panel updates correctly when a different town is selected from the navbar menu
    * The different quotes panels open and display correctly when their title is clicked
    * The accordion panels change from a row display on desktop to full column width on mobile

The site was manually viewed and tested in the Chrome and Firefox browsers on a Windows 10 Pro PC, as well on iOS and Android mobile devices.

This was done with a view to ensuring that: navigation functions respond appropriately on mobile and desktop; responsive changes in the navbar, site layout, background images, text and map are all present and correct for different devices; and the site remains fully functional, useable and well presented across all screen sizes.

Testing on iOS mobile/tablet devices identified a previously known issue, where using 'background-attachment: fixed;' led to poorly sized images and no background scrolling effect. Background-attachment was thus changed to 'scroll' in order to fix the issue. 

Finally, I also ran my code through the W3C validator tools for HTML/CSS and corrected the small number of errors which appeared.

## Deployment

I went to Settings > GitHub Pages from my 'kingdom-come' GitHub repository.

Then I selected for the site to be deployed directly from the 'master branch' in the Source dropdown.

My site was then automatically published at https://digitalstuart.github.io/kingdom-come.

In order to clone this project, you should paste https://github.com/digitalstuart/kingdom-come.git into your chosen editor's terminal. Then type 'git remote rm origin' into the terminal to sever the link with the original.

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