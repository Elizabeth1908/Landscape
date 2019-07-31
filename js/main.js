// Scrolling Effect
$(window).scroll(function() {

    if ($(this).scrollTop() > 1){  

        $('.header').addClass("sticky");

    }  else{

        $('.header').removeClass("sticky");
    }

});

// $(function(){
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() > 1 ) {
//                 $('.header').addClass('fixed');
//         }

//         else {
//                 $('.header').removeClass('fixed');
//         }
//     })
// });

// $(function() {
//     $(window).scroll(function() {
// var scroll = $(window).scrollTop();
// if (scroll >= 500) {
//             $(".header").addClass('fixed');
// } else {
//             $(".header").removeClass("fixed");
//         }
//     });
// });

$(function(){
// Slick slider
  $('.testimonials .testimonial__slider .slider__inner').slick({
    dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
  	arrows: false
  });
});


// as infinite: true for lighhtbox
$('[data-fancybox="images"]').fancybox({
  loop: true 
});

// filter selector 
jQuery(function ($) {
    $(".filter").on("click", function () {
        var $this = $(this);
        // if we click the active tab, do nothing
        if ( !$this.hasClass("active") ) {
            $(".filter").removeClass("active");
            $this.addClass("active"); // set the active tab
            // get the data-rel value from selected tab and set as filter
            var $filter = $this.data("rel"); 
            // if we select view all, return to initial settings and show all
            $filter == 'all' ? 
                $(".fancybox")
                .attr("data-fancybox-group", "gallery")
                .not(":visible")
                .fadeIn() 
            : // otherwise
                $(".fancybox")
                .fadeOut(0)
                .filter(function () {
                    // set data-filter value as the data-rel value of selected tab
                    return $(this).data("filter") == $filter; 
                })
                // set data-fancybox-group and show filtered elements
                .attr("data-fancybox-group", $filter)
                .fadeIn(1000); 
        } // if
    }); // on
}); // ready