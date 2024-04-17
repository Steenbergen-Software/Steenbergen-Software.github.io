/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();



    // Function to toggle body scroll
    function toggleBodyScroll(on) {
        if (on) {
            $('body').css({
                overflow: 'auto'
            });
        } else {
            $('body').css({
                overflow: 'hidden'
            });
        }
    }

    // When the user clicks the button, open the modal 
    $('#btnContact').click(function() {
        $('#myModal').fadeIn();
        toggleBodyScroll(false);
    });

    // When the user clicks on <span> (x), close the modal
    $('.close').click(function() {
        $('#myModal').fadeOut();
        toggleBodyScroll(true);
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        if ($(event.target).is('#myModal')) {
            $('#myModal').fadeOut();
            toggleBodyScroll(true);
        }
    });


})(jQuery);