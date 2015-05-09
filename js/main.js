(function($) {
  $(document).on('click', '#hamburger', function(e) {
    if ($('nav').hasClass('visible')) {
      $('nav').removeClass('visible');
    } else {
      $('nav').addClass('visible')
    }
  });

  $('.judge').fancybox({
    maxWidth: 600,
    maxHeight: 600,
    fitToView: false,
    autoSize: true,
    closeClick: true,
    openEffect: 'none',
    closeEffect: 'none'
  });
})(jQuery);
