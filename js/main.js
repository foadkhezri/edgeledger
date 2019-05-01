// Initialize and add the map
function initMap() {
  // Your location
  const loc = {
    lat: 36.521832,
    lng: 46.212357
  };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}

// jQuery(window).resize(function () {
//   if ($(window).width() > 600) {
//     $('#navbar').show();
//   }
// });


// change navbar background when scrolled to a certain place 


$(document).on('scroll', function () {
  if ($(this).scrollTop() < $('#what').position().top) {
    $('#navbar').css('background-color', '');
  }
  if ($(this).scrollTop() > $('#what').position().top) {
    $('#navbar').css('background-color', '#333');
  }
})

// $(window).scroll(function() {
//   var hT = $('#what').offset().top,
//       hH = $('#what').outerHeight(),
//       wH = $(window).height(),
//       wS = $(this).scrollTop();
//   if (wS > (hT+hH-wH)){
//     document.getElementById('#navbar').style.background = "#333";
//   }
// });



// menu 
function menu() {
  document.getElementById("navbar").style.display = "block";
  document.getElementById("hamburger").style.display = "none";
}

function close_menu() {
  document.getElementById("navbar").style.display = "none";
  document.getElementById("hamburger").style.display = "block";
}


// hide menu when clicking outside
$(document).mouseup(function (e) {

  var container = $("#navbar");
  var hamburger = $("#hamburger");
  var width = $(window).width();

  if (width <= 768) {

    if (!container.is(e.target) && container.has(e.target).length === 0) {

      container.fadeOut();
      hamburger.fadeIn();

    }
  }
});