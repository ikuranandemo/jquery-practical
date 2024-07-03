$(function () {
  $('a, .item img').hover(function () {
    $(this).animate({ opacity: 0.5 }, 300);
  }, function () {
    $(this).animate({ opacity: 1 }, 300);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#top-btn').fadeIn();
    } else {
      $('#top-btn').fadeOut();
    }
  });

  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    } else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed);
    return false;
  });

  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 4500,
    arrows: false,
    fade: true,
    speed: 1300
  });

  $('.works .item img').click(function () {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $('.big-img').attr({
      src: imgSrc,
      alt: imgAlt
    });
    $('.modal').fadeIn();
  });
                                                                                                    
  $('.close-btn').click(function () {
    $('.modal').fadeOut();
  });
});