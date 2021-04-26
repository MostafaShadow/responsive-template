/*
design By :Mostafa Mohamed (Shadow)
template-2

*/


$(function(){



                    /**  Change Slider*/
    (function autoChangeSlider(){
        var articleShow = $(".banner article.show");
        articleShow.each(function(){

            if(!$(this).is(':last-child')){
              
                $(this).delay(2000).fadeOut(1000 ,function(){

                  $('.icon-back .active').removeClass('active').next().addClass('active');
                    $(this).removeClass('show').next().addClass('show').show();
                    autoChangeSlider();

                });
            }
            else
            {
              $(this).delay(2000).fadeOut(1000,function(){

                $('.icon-back .active').removeClass('active').siblings().first().addClass('active');
                $(this).removeClass('show').siblings().first().addClass('show').show();
                autoChangeSlider();
              });

            }
            
        });

    }());


                  


                    /* ckick Show  page-view and Close*/
    var  marginRightWidth= $('.page-view').width();
    $('.fa-list').on('click',function(){
      $(".page-view").show().animate({
        marginRight:marginRightWidth
      },700);
    });

    //Close Page list
    $('.fa-times').on('click',function(){
      $(this).parent('.page-view').animate({
        marginRight:- marginRightWidth
      },1000,function(){
        $('.page-view').hide()
      })
    });




                    /* Header fixed */
    var banarHeight = $('.banner').innerHeight(); 
    $(window).scroll(function(){
      if($(window).scrollTop() > banarHeight){
          $('#header').addClass('run-animation').removeClass('stop-animation');

          }
          else
          {
            $('#header').addClass('stop-animation').removeClass('run-animation');

          }
        });
                   



                    /** Show Icon Scrolling */

     $(window).scroll(function(){
       if ($(window).scrollTop() > 1000 ){
         $('.parent-scroll').fadeIn(300)
       }
       else
       {
        $('.parent-scroll').fadeOut(300)
       }
     })  


                    /** click Scrolling smooth */

    $('.parent-scroll i').on('click',function(){
      $("html,body").animate({
        scrollTop:0
      },2000);
    });

});
