$(document).ready(function () {

   if (window.innerWidth<576) {
      $('.btn').addClass('btn-sm');
   }

   $('#myVideo').attr('src', $('#changeVideo a.active').attr('href'));

   $('#changeVideo a').click(function(e){
      e.preventDefault();
      $('#changeVideo a').removeClass('active');
      $('#myVideo').attr('src', $(this).attr('href'));
      $(this).addClass('active');
   })



   $("#sports_carousel").owlCarousel({
      loop: false,
      margin: 0,
      nav: false,
      dots: false,
      responsive: {
         575:{
            items: 3
         },
         768: {
            items: 4
         },
         992: {
            items: 6
         },
         1200: {
            items: 7
         },
         1400: {
            items: 8
         }
      }
   });
});