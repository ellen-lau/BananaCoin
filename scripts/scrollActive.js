var addClassOnScroll = function () {
  var windowTop = $(window).scrollTop();
  $('section[id]').each(function (index, elem) {
      var offsetTop = $(elem).offset().top;
      var outerHeight = $(this).outerHeight(true);

      if( windowTop > (offsetTop - 50) && windowTop < ( offsetTop + outerHeight)) {
          var elemId = $(elem).attr('id');
          var test = $(".sidebar li a[href='#" + elemId + "']")
          console.log(test)
          $(".sidebar li.active").removeClass('active');
          $(".sidebar li a[href='#" + elemId + "']").parent().addClass('active');
      }
  });
};

$(function () {
  $(window).on('scroll', function () {
      addClassOnScroll();
  });
});