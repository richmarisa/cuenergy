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
		
		// align bradcrumbs with content and sidebar
		var content = $( 'body:not(.path-frontpage) #main > .row > section' );
		var contentWidth = content.width();
		var contentOffset = content.offset();
		var contentOffsetLeft = contentOffset.left;
		var windowWidth = $(window).width();
		$('#breadcrumbs > .col-sm-4').css('width', contentOffsetLeft);
		$('#breadcrumbs .breadcrumb').css('width', windowWidth - contentOffsetLeft);
		
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
		
		// Move header captions on mobile
		if ( $(window).width() <= 752 ) {
			$('.slider-caption').appendTo($('article .content > div:nth-child(2)'));
		}
	}
	
	// Fit videos
	$('#main').fitVids({ customSelector: "iframe[src^='https://cdnapisec.kaltura.com']"});
	
	// Move header captions on mobile
	if ( $(window).width() <= 752 ) {
		$('.slider-caption').appendTo($('article .content > div:nth-child(2)'));
	}
	//else {
		//$('.slider-caption').insertAfter($('.slider-container > .next-prev'));
	//}
	
	
	
	$('.region-sidebar-first #block-mainnavigation #block-mainnavigation-menu').html(function(index,html){
		return html.replace('news-events','News & Events');
	});
	$('.region-sidebar-first #block-mainnavigation #block-mainnavigation-menu').html(function(index,html){
		return html.replace('-',' ');
	});
	$('.region-sidebar-first #block-mainnavigation #block-mainnavigation-menu').addClass('all-caps');
	$('.region-sidebar-first #block-mainnavigation > ul').addClass('menu menu--main nav navbar-nav');
	$('.region-sidebar-first #block-mainnavigation > ul li .is-active').parent('li').addClass('active');
	
	
	
	
	// align bradcrumbs with content and sidebar
	var content = $( '#main > .row > section' );
	var contentWidth = content.width();
	var contentOffset = content.offset();
	var contentOffsetLeft = contentOffset.left;
	var windowWidth = $(window).width();
	$('#breadcrumbs > .col-sm-4').css('width', contentOffsetLeft);
	$('#breadcrumbs .breadcrumb').css('width', windowWidth - contentOffsetLeft);
	
	// Insert more links on home page
	$('.path-frontpage .view-id-news').append('<div class="more-link form-group"><a href="/news-events/cu-energy-news">More news</a></div>');
	$('.path-frontpage .view-id-featured_reports').append('<div class="more-link form-group"><a href="/news-events/featured-reports">More reports</a></div>');
	
	// Add anchor for broken ARIA reference error. Not a real solution, quick and dirty, but see here: https://github.com/react-bootstrap/react-bootstrap/issues/1827
	$('<a id="popup-anchor" href="#" class="visually-hidden">Popup</a>').appendTo('#popup');
	
	// ...and another
	$('.view-id-people > nav h4').attr('id', 'pagination-heading');
	
	// Add external link icons
	$('#block-views-block-news-block-1 .views-col .field-name-title a').append('<span class="fa fa-external-link"></span>')
	$('#block-views-block-featured-reports-block-1 .views-col .views-field-title a').append('<span class="fa fa-external-link"></span>')
	$('.path-frontpage .event-title-and-location a').append('<span class="fa fa-external-link"></span>')
	
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
	
	// Read more people
	$('.read-more-label').click(function(e) {
		e.preventDefault();
		$(this).parent().prev('.read-more-text').slideToggle('medium');
		$(this).toggleClass('read-more-label read-more-label-close');
		if( $(this).hasClass('read-more-label') ) {
			$(this).text('Read more...');
	    }
		else {
			$(this).text('Close');
		}
	});
		
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