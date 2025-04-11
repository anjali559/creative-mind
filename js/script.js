
        $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 50) {
                $(".navbar").addClass("active-nav");
                // $(".nav-link").css('color','#333');
                // $(".navbar-brand img").css('width','50px');
                if ($(window).width() <= 992) {  
                $(".navbar-nav").css('background-color','#fff');
              }  
                
            } else {
                //remove the background property so it comes transparent again (defined in your css)
              $(".navbar").removeClass("active-nav");
              // $(".nav-link").css('color','#000');
              // $(".navbar-brand img").css('width','80px');
              if ($(window).width() <= 992) {  
                $(".navbar-nav").css('background-color','#fff');
              }  
            }
        });
    });

      
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop >20){
     nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}


// init Isotope
var $grid = $('.collect').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
