jQuery(document).ready(function ($) {
  
  // Menu Panel

  $('.i-nav-menu').click(function () {
    $('body').addClass('modal-open');
    $('.menu-panel').addClass('menu-panel_show');
    $('.category-panel').removeClass('menu-panel_show');
    $('.panel__overlay').hide();
    $('.forum-panel').removeClass('forum-panel_show');
  });

  $('.i-menu-close').click(function () {
    $('body').removeClass('modal-open');
    $('.menu-panel').removeClass('menu-panel_show');
  });
  $('.menu-panel--section__parent').click(function () {
    $('body').addClass('modal-open');
    $('.category-panel').addClass('menu-panel_show');
  });
  $('.i-nav-back').click(function () {
    $('body').removeClass('modal-open');
    $('.category-panel').removeClass('menu-panel_show');
  });

  // Forum Panel

  $('.nav-all-discussion').click(function(){
    $('body').addClass('modal-open');
    $('.forum-panel').addClass('forum-panel_show');
    $('.panel__overlay').fadeToggle();
    $('.home-panel.menu-panel').removeClass('menu-panel_show');
    $('.category-panel').removeClass('menu-panel_show');
  });

  $('.forum-panel .i-menu-close').click(function(){
    $('body').removeClass('modal-open');
    $('.panel__overlay').hide();
    $('.forum-panel').removeClass('forum-panel_show');
  });

  $('.i-menu-close').click(function(){
    $('body').removeClass('modal-open');
    $('.menu-panel').removeClass('menu-panel_show');
  });

  // User Panel

  $('.nav-main__profile').on('click', function(event) {       
    $('body').addClass('modal-open'); 
    $('.user-panel').slideToggle('show');
    $('.menu-panel').removeClass('menu-panel_show');
    $('.category-panel').removeClass('menu-panel_show');
    $('.panel__overlay').fadeToggle();
  });

  // Search Panel

  $('.i-nav-search').click(function () {
    $('body').addClass('modal-open');
    $('.search-panel').addClass('search-panel_show');
  });
  $('.search-panel__close').click(function () {
    $('body').removeClass('modal-open');
    $('.search-panel').removeClass('search-panel_show');
    $('.search-panel__bar input').reset();
  });
  $('.search-panel__bar input').focus(function () {
    $('.search-panel__bar .i-menu-close').show();
  });
  $('.search-panel__bar .i-menu-close').hide();

  // Inbox

  $('.btn-delete-inbox').hide();

  $('.inbox .checkbox input[type=checkbox]').change(function () {
      if (!this.checked) 
        //  ^
        $('.btn-delete-inbox').fadeOut('slow');
      else 
        $('.btn-delete-inbox').fadeIn('slow');
  });

// Carousel

$('.home-slider').owlCarousel({
    stagePadding: 30,
    loop: true,
    margin: 15,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      }
    }
  });
  $('.category-slider').owlCarousel({
    stagePadding: 15,
    loop: false,
    margin: 15,
    dots: false,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 3
      }
    }
  });


// Typehead

var $input = $(".typeahead");
$input.typeahead({
  source: [
    {id: "1", name: "Baju Anak di Artikel"},
    {id: "2", name: "Baju Anak di Forum"},
    {id: "3", name: "Perlengkapan Bayi di Artikel"},
    {id: "4", name: "Perlengkapan Bayi di Forum"},
  ],
  autoSelect: true,
  minLength : 3,
});

$input.change(function() {
  var current = $input.typeahead("getActive");
  if (current) {
    // Some item from your model is active!
    if (current.name == $input.val()) {
      // This means the exact match is found. Use toLowerCase() if you want case insensitive match.
    } else {
      // This means it is only a partial match, you can either add a new item
      // or take the active if you don't want new items
    }
  } else {
    // Nothing is active so it is a new value (or maybe empty value)
  }
});


// Tabs

$('.profile-tab li a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('.inbox-tab li a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('.tabs li a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

});

// Back to top

var amountScrolled = 600;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
    $('body').addClass('scrolled');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});


// Fixed Navbar

var beforeScroll = 0;
var afterScroll;
var $navbar = $('.layout__nav-content.navbar-tum .nav-main');

// find current position
$(window).on("scroll", function(){
  
  // Calculate updated scroll position
  afterScroll = $(this).scrollTop();
      
  // Compare before and after scroll
  
  // if scrolling is quick and less then -10
  if (beforeScroll + 20 < afterScroll) {
    // user is scrolling down
    $navbar.removeClass('slideDown').addClass('slideUp');
    $('.logo').hide();
    $('.nav-main__logo').hide();

  } else if (beforeScroll > afterScroll) {
    // user is scrolling up
    $navbar.removeClass('slideUp').addClass('slideDown');
    $('.nav-main__logo').show();
    $('button.back-to-top').removeClass('show');
  }
    
  // Reset beforeScroll to afterScroll position
  
  beforeScroll = afterScroll;
  
});

// Textarea Auto-Height

;(function(window,document,undefined){
  var textarea = document.querySelector('textarea.auto-expanding');
  textarea.addEventListener('keydown', autosize); 
  function autosize(){
    var el = this;
    setTimeout(function(){
      el.style.cssText = 'height:auto; padding:0';
      // for box-sizing other than "content-box" use:
      // el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
  }
})(window,document)