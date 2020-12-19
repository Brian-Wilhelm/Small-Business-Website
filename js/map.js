// Initialize and add the map
function initMap() {
    // The location of Uluru
    const pkpub = { lat: 40.50133427863184, lng: -74.41416209996825 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: pkpub,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: pkpub,
      map: map,
    });
  }