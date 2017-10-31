/**
 * Created by admin on 2016/11/18.
 */
$(function () {

    var w4=true;
    $(window).scroll(function () {
        if($(window).scrollTop() > $('.yes-wrap2').offset().top-600){
            $('.yes-wrap2 .yes-w2-img1').transit({'top':'354px',opacity:1},800)
            setTimeout(function () {
                $('.yes-wrap2 .yes-w2-img3').transit({'top':'470px',opacity:1},800)
            },300)
            setTimeout(function () {
                $('.yes-wrap2 .yes-w2-img2').transit({'top':'478px',opacity:1},800)
            },600)
            setTimeout(function () {
                $('.yes-wrap2 .yes-w2-img5').transit({'top':'345px',opacity:1},800)
            },900)
            setTimeout(function () {
                $('.yes-wrap2 .yes-w2-img4').transit({'top':'290px',opacity:1},800)
            },1200)
        }
        if($(window).scrollTop() > $('.yes-wrap3').offset().top-600){
            $('.yes-w3-img1').transit({'left':'57px',opacity:1},800)
            $('.yes-w3-box').transit({'left':'700px',opacity:1},800)
            setTimeout(function () {
                $('.yes-w3-img2').transit({'left':'240px',opacity:1},800)
            },300)
        }
        if($(window).scrollTop() > $('.yes-wrap4').offset().top-600){
            if(w4){
                w4=false;
                $('.yes-w4-tit').transit({'left':'112px',opacity:1},800);
                Enter($('.yes-w4-li').eq(0), 'left', 0, 6, 800, 500);
            }
        }
        if($(window).scrollTop() > $('.yes-wrap5').offset().top-600){
            $('.yes-w5-tit').transit({'left':'110px',opacity:1},800);
            $('.yes-w5-line1').transit({'left':'406px',opacity:1},800);
            setTimeout(function () {
                $('.yes-w5-line2').transit({'left':'406px',opacity:1},800);
            },300)
            setTimeout(function () {
                $('.yes-w5-line3').transit({'left':'120px',opacity:1},800);
            },600)
        }
    })

    $('.yes-w4-click').on('mousedown',function () {
        $('.yes-w4-tit').css('opacity','0.4')
    })
    $('.yes-w4-click').on('mouseup',function () {
        $('.yes-w4-tit').css('opacity','1')
    })
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 7,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30
    });

})