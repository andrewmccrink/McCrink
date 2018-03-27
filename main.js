$( document ).ready(function() {

  $('.overlay').fadeIn(1000);
  $('.overlay').css('display', 'flex');
  $('.title').fadeIn(10000);

    $('.hero').css('background-color', '#548ec4f0');
    $('.about.hero').css('background-color', '#548ec4f0 !important');

    $('.about_title').fadeIn(1000);
    $('.about_name').addClass('top_margin');
  // $('#pagepiling').pagepiling();

  setTimeout(function(){
    $('.hero_content').css('opacity', '1');
    $('.about_icon').fadeIn(2000);
    $('.first').fadeIn(2000);
    $('.first').css('margin-top', '0');
    $('.first.arrow').css('margin-top', '30px');
    $('.overlay img').css('margin-top', '0');
    // $('.description').fadeIn(2000);
    // $('.description').css('margin-top', '100px');
  }, 1000)



  $('.init').click(function(){
    $('#work').slideDown();
    $('body').css('overflow', 'auto');
    $('.about_icon').fadeIn(2000);
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 1000);

    // $('.lmj').addClass('lmj_color');
  });


    var works = $('.work')
    workCounter = 0




    $(window).on('scroll', function() {
      if ( $('#work').is(':visible') ) {
         var w_height = $(window).scrollTop();

         if ( $('.work').length > workCounter ) {
            if ( $($('.work')[workCounter]).offset().top <= w_height + $('.work').height() /2 ) {
                var i = workCounter

                var work = works[i]
                var color = $(work).attr('class').substring(5, work.length) + "_color"
                $(work).addClass(color);
                $($(work).children('.art')).fadeIn(1000)
                $($(work).children('.art')).addClass('move_up');
                $($(work).children('.text_box')).fadeIn(2000);
               
               if ( workCounter !== works.length ) {
                workCounter ++
               }
            }
         }
      }
    });


    $('.scroll').on('click', function() {
          $(".worktop").animate({ scrollTop: $('.worktop').prop("scrollHeight")}, 15000);
      });


    $('.down').click(function(){
      var div = $(this).parents('.work');
      var nextDiv = $(div).next('.work');

      $('html, body').animate({
        scrollTop: $(nextDiv).offset().top
    }, 1000);
    });

    $('.up').click(function(){
      var div = $(this).parents('.work');
      var nextDiv = $(div).prev('.work');

      $('html, body').animate({
        scrollTop: $(nextDiv).offset().top
    }, 1000);
    });

    $('.top').click(function(){

      $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 1000);
    });



    $('.arrow.next').click(function(){
      $('.about_info').fadeOut();
      $('.about_bio').fadeIn(2000);
      $('.about_bio').addClass('bio_top');
    });


    $('.prev.arrow').click(function(){
      $('.about_bio').fadeOut(2000);
      $('.about_info').fadeIn(2000);
      $('.about_bio').css('margin-top', '600');
    });


  


 


});