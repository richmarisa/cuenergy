	
	jQuery(document).ready(function($) {
	
		// Isotope People Page
		
		var category_list = ['Leadership','Faculty Experts'];
		
		var $container = $('#people-listing');
		//var $container_list = $('.people-ui-filter2');
		$container.isotope({
  			//transformsEnabled: false,
  			resizable: false,
  			masonry: { columnWidth: $container.width() / 5 }
		});
		$(window).smartresize(updateIsotope);
		
		$('.people-ui-filter1 a').click(function(e) {
			
			e.preventDefault();
			closeAllReadMore();
			$('.people-ui-filter2 a').removeClass('active');
			$('.people-ui-filter1 a').removeClass('active');
			$(this).addClass('active');
			
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector });
			$('#people-ui-filter2-label').text(category_list[$(this).parent().index()]);
			if (selector == '*') {
				$('.people-ui-filter2 li').show();
			}
			else {
				$('.people-ui-filter2 li').hide();
				$('.people-ui-filter2 li'+selector).show();
			}
			$('.people-ui-scroll').first().scrollTop(0);
			updateScrollFade();
			
			return false;
			
		});
		
		$('.people-ui-filter2 a').click(function(e) {
			
			e.preventDefault();
			closeAllReadMore();
			
			$('#people-ui-filter2-label .view-all').remove();
			$('#people-ui-filter2-label').append('<a class="view-all">view all</a>');
			setViewAll();
			
			$('.people-ui-filter2 a').removeClass('active');
			$(this).addClass('active');
			
			$('.readmore-expand').readmore({
				speed: 0,
				maxHeight: 133,
				afterToggle: updateIsotope
			});
			var selector = $(this).attr('data-filter');
			triggerReadMore(selector.split('.')[1]);
			$container.isotope({ filter: selector });
			return false;
			
		});
		
		
		$('.readmore-expand').readmore({
			speed: 0,
			maxHeight: 133,
			afterToggle: updateIsotope
		});
		
		
		function updateIsotope() {
			$container.isotope({
				masonry: { columnWidth: $container.width() / 5 }
			});
		}
		function closeAllReadMore() {
			$('.readmore-js-toggle').each(function() {
				if ($(this).text() == "Close") {
					$(this).trigger('click');
				}
			});
		}
		function triggerReadMore(key) {
			$('.isotope-item').each(function() {
				if ($(this).hasClass(key)) {
					if ($(this).find('.readmore-js-toggle').text() == "Read More") {
						$(this).find('.readmore-js-toggle').trigger('click');
					}
				}
			});
		}
		function setViewAll() {
			$('#people-ui-filter2-label .view-all').click(function(e) {
				$('.people-ui-filter1 a.active').trigger('click');
			});	
		}
		
		// visual scrolling indicator
		$('.people-ui-scroll').append('<div class="bottom-fader"></div>').bind('scroll touchmove', function() {
			$(this).find('.bottom-fader').hide(); // hide on user interaction
		});
		function updateScrollFade() {
			if ($('.people-ui-scroll').length > 0) {
				if ( $('.people-ui-scroll').first()[0].scrollHeight > $('.people-ui-scroll').first().height() ) { // if scrolling is active
					$('.bottom-fader').show();
				}
				else {
					$('.bottom-fader').hide();
				}
			}
		}
		
		updateScrollFade();
		updateIsotope();
		
		
	});