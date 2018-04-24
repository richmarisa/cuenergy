// Child js

jQuery(document).ready(function($) {	
	
	// Window Size Tracking
	function resizeChecks() {
		if ( $(window).width() <= 767 ) {
			$('#navbar .navbar-header').before( $('.menu.menu--main.nav.navbar-nav') );
			$('#navbar .navbar-header').css('display', 'none');
			$('#mobile-nav-dimmer').addClass('closed');
		} else {
			$('#navbar .menu.menu--main.nav.navbar-nav').appendTo('#block-cuenergy-main-menu');
			$('#navbar .navbar-header').css('display', 'block');
			$('#navbar').removeAttr('style');
			$('#mobile-nav-dimmer').removeClass('open');
			$('#mobile-nav-dimmer').css('display','none');
		}
	}
	
	// Add external link icons
	$('#block-views-block-news-block-1 .views-col .field-name-title a').append('<span class="fas fa-external-link-alt"></span>')
	$('#block-views-block-featured-reports-block-1 .views-col .views-field-title a').append('<span class="fas fa-external-link-alt"></span>')
	
	// Localist markup
	$('.lw_event_item_title > a').wrap('<h2 class="event-title"></h2>');
	
	// Remove dash from empty CESI titles
	$('.views-label.views-label-cesi-title').each(function(){
		if ( $(this).length == 0 ) {
			$(this+':before').css('content','');
		}
	});
	
	if ( $(window).width() <= 767 ) {
		$('#navbar .navbar-header').before( $('.menu.menu--main.nav.navbar-nav') );
		$('#navbar .navbar-header').css('display', 'none');
		$('#mobile-nav').on('click', function() {
			$('#mobile-nav-dimmer').toggleClass('open closed');
			$('#navbar').slideToggle('fast');
		});
	} else {
		$('#navbar .menu.menu--main.nav.navbar-nav').appendTo('#block-cuenergy-main-menu');
		$('#navbar .navbar-header').css('display', 'block');
	}
	
	
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