function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.272145, lng: -9.7164645},
          zoom: 14
        });

  
  var museum = {lat: 52.2667702, lng: -9.7061565};
  
 
  var marker = new google.maps.Marker({position: museum, map: map});
    }