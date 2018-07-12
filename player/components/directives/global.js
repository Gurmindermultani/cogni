'use strict'
$(document).ready(function() {
	$(window).on('touchmove', function(e) {
		e.preventDefault();
	});
	$("body").on("mousedown touchstart", "*", function(e) {
		if (($(this).is(":focus") || $(this).is(e.target)) && $(this).css("outline-style") == "none") {
			$(this).css("outline", "none").on("blur", function() {
				$(this).off("blur").css("outline", "");
			});
		}
	});
});
