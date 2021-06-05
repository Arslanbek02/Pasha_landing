$(function () {

  let first_slider = $("#bestsellerSlider");

  first_slider.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    dots: true,
    focusOnSelect: true,
    prevArrow: '<span class="arrow prev__arrow"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="arrow next__arrow"><i class="fas fa-chevron-right"></i></span>',
  });

  let second_slider = $("#itemSlider");

  second_slider.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    dots: true,
    focusOnSelect: true,

    prevArrow: '<span class="arrow prev__arrow"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="arrow next__arrow"><i class="fas fa-chevron-right"></i></span>',
  });

  let third_slider = $("#aboutSlider");

  third_slider.slick({
    infinity: true,
    slidersToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,

    prevArrow: '<span class="arrow prev__arrow"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="arrow next__arrow"><i class="fas fa-chevron-right"></i></span>',
  });

  let forth_slider = $("#reviewSlider");

  forth_slider.slick({
    infinity: true,
    slidersToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
    fade: true,


    prevArrow: '<span class="arrow prev__arrow"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="arrow next__arrow"><i class="fas fa-chevron-right"></i></span>',
  });


});