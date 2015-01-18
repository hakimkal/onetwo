// THEME OPTIONS.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is JS file that contains principal fuctions of theme */
// -------------------------------------------------------------------------------------------------------------------------------


$(document).ready(function($) {

	'use strict';

	//=================================== Twitter Feed  ===============================//

  $("#twitter").tweet({
      modpath: 'js/twitter/index.php',
      username: "envato", // Change for Your Username
      count: 5,
      loading_text: "Loading tweets..."
  });

  //=================================== Flikr Feed  ========================================//

  $('#flickr').jflickrfeed({
    limit: 8, //Number of images to be displayed
    qstrings: {
      id: '31238496@N04'//Change this to any Flickr Set ID as you prefer in http://idgettr.com/
    },
    itemTemplate: '<li><a href="{{image_b}}" class="fancybox"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
  });

  //=================================== Google Map  ==============================//
  
  /*
    Map Settings
    Find the Latitude and Longitude of your address:  
    - http://universimmedia.pagesperso-orange.fr/geo/loc.htm  
    - http://www.findlatitudeandlongitude.com/find-address-from-latitude-and-longitude/
  */

  // Map Markers
  var mapMarkers = [ {
    address: "Plot 1539 Ahamadu Bello Way,Gwarimpa Abuja",
    html: "<strong>Nigeria Office</strong><br>1212 Polo & Turf , 1539 Ahamadu Bello Way,Gwarimpa Abuja<br><br><a href='#' onclick='mapCenterAt({latitude: 9.088219		, longitude:  7.407696, zoom: 16}, event)'>[+] zoom here</a>",
    icon: {
      image: "img/img-theme/pin.png",
      iconsize: [26, 46],
      iconanchor: [12, 46]
    }
  },{
    address: "Gwarimpa Abuja",
    html: "<strong>Gwarimpa</strong><br>Abuja, Nigeria<br><br><a href='#' onclick='mapCenterAt({latitude: 9.088219, longitude: 7.407696, zoom: 16}, event)'>[+] zoom here</a>",
    icon: {
      image: "img/img-theme/pin.png",
      iconsize: [26, 46],
      iconanchor: [12, 46]
    }
  }];

  // Map Initial Location
  var initLatitude =9.097232900000000000;
  var initLongitude = 7.416758699999946000;

  // Map Extended Settings
  var mapSettings = {
    controls: {
      panControl: true,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      overviewMapControl: true
    },
    scrollwheel: false,
    markers: mapMarkers,
    latitude: initLatitude,
    longitude: initLongitude,
    zoom: 5
  };
  
  $("#map").gMap(mapSettings);
 
	//=================================== Nav Responsive =============================//

  $('#menu').tinyNav({
      active: 'selected'
  });

  //=================================== Sticky nav ===================================//

  $(".mainmenu").sticky({topSpacing:0});

  //=================================== Nav Superfish ===============================//

	$('ul.sf-menu').superfish();

  //=================================== Counter  ==============================//

   $('#event-one').countdown('2014/06/12', function(event) {
      var $this = $(this).html(event.strftime(''
      + '<span>%D <br> <small>days</small></span>  '
      + '<span>%H <br> <small>hr</small> </span>  '
      + '<span>%M <br> <small>min</small> </span>  '
      + '<span>%S <br> <small>sec</small></span> '));
   });

   $('#event-two').countdown('2014/09/10', function(event) {
      var $this = $(this).html(event.strftime(''
      + '<span>%D <br> <small>days</small></span>  '
      + '<span>%H <br> <small>hr</small> </span>  '
      + '<span>%M <br> <small>min</small> </span>  '
      + '<span>%S <br> <small>sec</small></span> '));
   });
   $('#event-three').countdown('2014/12/24', function(event) {
      var $this = $(this).html(event.strftime(''
      + '<span>%D <br> <small>days</small></span>  '
      + '<span>%H <br> <small>hr</small> </span>  '
      + '<span>%M <br> <small>min</small> </span>  '
      + '<span>%S <br> <small>sec</small></span> '));
   });
 	
	//=================================== Slide Services  ==============================//
	 
	$(".single-carousel").owlCarousel({
		  items : 1,
		  autoPlay: false,  
    	navigation : true,
    	autoHeight : true,
    	slideSpeed : 400,
    	singleItem: true,
    	pagination : false
	});

  //=================================== Carousel Blog  ==================================//

  $("#events-carousel").owlCarousel({
       autoPlay: 3200,      
       items : 3,
       navigation: false,
       itemsDesktop : [1199,3],
       itemsDesktopSmall : [1024,3],
       itemsTablet: [1000,2],
       itemsMobile : [480,1],
       pagination: true
   });

  //=================================== Carousel Players  ==================================//

   $("#players-carousel").owlCarousel({
       autoPlay: 3200,      
       items : 4,
       navigation: false,
       itemsDesktopSmall : [1024,3],
       itemsTablet : [768,3],
       itemsMobile : [600,2],
       pagination: true
   });

  //=================================== Carousel Clubs  ==================================//

   $("#clubs-carousel").owlCarousel({
       autoPlay: 3200,      
       items : 1,
       navigation: false,
       singleItem: true,
       pagination: true
   });

   //=================================== Carousel Sponsor  ==================================//

   $("#sponsors").owlCarousel({
       autoPlay: 3200,      
       items : 6,
       navigation: false,
       itemsDesktop : [1199,5],
       itemsDesktopSmall : [1024,4],
       itemsTablet : [768,3],
       itemsMobile : [500,2],
       pagination: true
   });

   //=================================== Carousel Testimonials  ============================//

  $("#testimonials").owlCarousel({
       autoPlay: 3200,      
       items : 3,
       navigation: false,
       itemsDesktop : [1199,3],
       itemsDesktopSmall : [1024,3],
       itemsTablet : [1000,2],
       itemsMobile : [600,1],
       pagination: true
  });

	//=================================== Carousel Twitter  ===============================//
	 
	$(".tweet_list").owlCarousel({
		  items : 1,
		  autoPlay: 3200,  
    	navigation : false,
    	autoHeight : true,
    	slideSpeed : 400,
    	singleItem: true,
    	pagination : true
	});

	//=================================== Subtmit Form  ===================================//

	/*$('.form-theme').submit(function(event) {  
	     event.preventDefault();  
	     var url = $(this).attr('action');  
	     var datos = $(this).serialize();  
	     	$.post(url, datos, function(resultado) {  
	     	$('.result').html(resultado);  
		});  
 	});*/

  //=================================== Form Newslleter  =================================//

  /*$('#newsletterForm').submit(function(event) {  
       event.preventDefault();  
       var url = $(this).attr('action');  
       var datos = $(this).serialize();  
        $.post(url, datos, function(resultado) {  
        $('#result-newsletter').html(resultado);  
    });  
  });  
*/
  //=================================== Ligbox  ===========================================//	

  $(".fancybox").fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',

      helpers : {
        title : {
          type : 'inside'
        }
      }
  });
	
	//=============================  tooltip demo ===========================================//

  $('.tooltip-hover').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
   });

	//=================================== Totop  ============================================//

  $().UItoTop({
		scrollSpeed:500,
		easingType:'linear'
	});	

  //=================================== Portfolio Filters  ==============================//

  $(window).load(function(){
      var $container = $('.portfolioContainer');
      $container.isotope({
      filter: '*',
          animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
  	}
  });
	 
  $('.portfolioFilter a').click(function(){
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');
       var selector = $(this).attr('data-filter');
       $container.isotope({
        filter: selector,
              animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
            }
        });
       return false;
      }); 
   });
 
});	

  //=================================== Slide Home =====================================//

  $('#slide').camera({        
    height: 'auto'
  });  