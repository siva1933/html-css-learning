function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 14
  });
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

$('#navbar,a,.btn').on('click', function(event) {
  if (this.hash !== '') {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});
