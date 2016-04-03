'use strict';
/*global $, ch*/
$(document).ready(function() {
  console.log('DOM ready!!');
  var carousel = new ch.Carousel(document.getElementById('moreLikeThisCarousel'));
  carousel.on('ready', function() {
    console.log('carousel working!!');
  });
});
