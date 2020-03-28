$('document').ready(function () {
    $('.slider__wrap').slick({
        prevArrow: '<img src="img/left.png" class=" arrows-left">',
        nextArrow: '<img src="img/right.png" class="arrows-right">',
    });
    
    $('#btn_1').click(function () {
        $('.popup__item_1').toggleClass('popup__item_active');
        $('.popup').toggleClass('popup_active');
    });
    
    $('.btn_buy').click(function () {
        $('.popup__item_2').toggleClass('popup__item_active');
        $('.popup').toggleClass('popup_active');
    });
    
    $('.btn_fead').click(function () {
        $('.popup__item_3').toggleClass('popup__item_active');
        $('.popup__item_2').removeClass('popup__item_active');
    });
    
    $('.box').click(function () {
        $('.popup__item').removeClass('popup__item_active'); 
        $('.popup').removeClass('popup_active');
    }); 
    
})