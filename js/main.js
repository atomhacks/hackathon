(function($) {
  $(document).on('click', '#hamburger', function(e) {
    if ($('nav').hasClass('visible')) {
      $('nav').removeClass('visible');
    } else {
      $('nav').addClass('visible')
    }
  });
})(jQuery);
