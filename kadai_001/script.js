$(document).ready(function () {
  $('.home, .menu-about, .menu-works').hover(function () {
    $(this).animate({ opacity: 0.5 }, 300);
  }, function () {
    $(this).animate({ opacity: 1 }, 300);
  });

  $('a[href^="#"]').click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var target = $(id).offset().top;
    $('html, body').animate({ scrollTop: target }, 600)
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

  $(document).ready(function () {
    $('body').addClass('fade-in');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#top-btn').fadeIn();
    } else {
      $('#top-btn').fadeOut();
    }
  });

  $('#top-btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
  });

  $('.works-img').hover(function () {
    $(this).animate({ opacity: 0.5 }, 300);
  }, function () {
    $(this).animate({ opacity: 1 }, 300);
  });

  $('.works-img').click(function () {
    var imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    $('#top-btn').prop('disabled', true);
    return false;
  });

  $('.close').click(function () {
    $('.modal').fadeOut();
    $('#top-btn').prop('disabled', false);
    return false;
  });
});
