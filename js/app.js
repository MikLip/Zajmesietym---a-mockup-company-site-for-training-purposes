$(function() {

  console.log("dzialam");

  const $topMenuBar = $('.page-top-bar');
  $(window).on('scroll', function() {
      if ($(this).scrollTop() >= 100) {
          $topMenuBar.addClass('scrolled');
      } else {
          $topMenuBar.removeClass('scrolled');
      }
  })

})
