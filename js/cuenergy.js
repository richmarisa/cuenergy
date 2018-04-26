// Child js

jQuery(document).ready(function($) {	
	
	// Window Size Tracking
	function resizeChecks() {
		if ( $(window).width() <= 752 ) {
			$('#navbar .navbar-header').before( $('#navbar .menu.menu--main.nav.navbar-nav') );
			$('#navbar .navbar-header').css('display', 'none');
			$('#mobile-nav-dimmer').addClass('closed');
		} else {
			$('#navbar .menu.menu--main.nav.navbar-nav').appendTo('#block-cuenergy-main-menu');
			$('#navbar .navbar-header').css('display', 'block');
			$('#navbar').removeAttr('style');
			$('#mobile-nav-dimmer').removeClass('open');
			$('#mobile-nav-dimmer').css('display','none');
		}
		
		// Insert more links on home page
		$('.view-id-news').append('<div class="more-link form-group"><a href="/news-events/news">More news</a></div>');
		$('.view-id-featured_reports').append('<div class="more-link form-group"><a href="/news-events/news">More reports</a></div>');
		
		// Move more links to bottom on mobile
		if ( $(window).width() <= 630 ) {
			$('.path-frontpage .more-link').each(function(){
				$(this).appendTo($(this).prev('.view-content'));
			});		
		}
		else {
			$('.path-frontpage .view-content .more-link').each(function(){
				$(this).appendTo($(this).prev('.view'));
			});		
		}
	}
	
	// Fit videos
	$("#main").fitVids();
		
	// Add anchor for broken ARIA reference error. Not a real solution, quick and dirty, but see here: https://github.com/react-bootstrap/react-bootstrap/issues/1827
	$('<a id="popup-anchor" href="#" class="visually-hidden">Popup</a>').appendTo('#popup');
	
	// Add external link icons
	$('#block-views-block-news-block-1 .views-col .field-name-title a').append('<span class="fas fa-external-link-alt"></span>')
	$('#block-views-block-featured-reports-block-1 .views-col .views-field-title a').append('<span class="fas fa-external-link-alt"></span>')
	
	// Localist markup
	$('.lw_event_item_title > a').wrap('<h2 class="event-title"></h2>');
	
	// Move slider buttons
	$('.next-prev').prependTo('.slider-container');
	
	// Move more links
	if ( $(window).width() <= 630 ) {
		$('.path-frontpage .more-link').each(function(){
			$(this).appendTo($(this).prev('.view-content'));
		});		
	}
	else {
		$('.path-frontpage .more-link').each(function(){
			$(this).appendTo($(this).prev('.view'));
		});		
	}
	
	// Remove dash from empty CESI titles
	$('.views-label.views-label-cesi-title').each(function(){
		if ( $(this).length == 0 ) {
			$(this+':before').css('content','');
		}
	});
	
	// Mobile navigation
	if ( $(window).width() <= 752 ) {
		$('#navbar .navbar-header').before( $('#navbar .menu.menu--main.nav.navbar-nav') );
		$('#navbar .navbar-header').css('display', 'none');
	} else {
		$('#navbar .menu.menu--main.nav.navbar-nav').appendTo('#block-cuenergy-main-menu');
		$('#navbar .navbar-header').css('display', 'block');
	}
	
	$('#mobile-nav').on('click', function() {
		$('#mobile-nav-dimmer').toggleClass('open closed');
		$('#navbar').slideToggle('fast');
	});
	
	$(window).resize(resizeChecks);
	resizeChecks();
		
	
	
	// Window Load ------------------------------------------------------------
	$(window).on("load", function() {

		$("#cu-search-form").attr("action", "/search/node/");
		$("#cu-search-query").attr("name", "keys");

		$('input[type=radio][name=sitesearch]').on('change', function() {
	     switch($(this).val()) {
	         case 'thissite':
				 $("#cu-search-form").attr("action", "/search/node/");
				 $("#cu-search-query").attr("name", "keys");
				 cu-search-query
	             break;
	         case 'cornell':
	             $("#cu-search-form").attr("action", "https://cornell.edu/search/");
	             $("#cu-search-query").attr("name", "q");
	             break;
	     }
		});

	});
	
});