//= require jquery-2.1.3.min
//= require_tree .

$(document).ready(function() {
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	});
	$(window).scroll(function() {
		console.log($(this).scrollTop());
		if($(this).scrollTop() > $(".top").height()) {
			$("nav").addClass("dark");
		} else {
			$("nav").removeClass("dark");
		}
	})
});