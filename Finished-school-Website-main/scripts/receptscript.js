$('.option_1 img').on('click', function() {
    $(this).toggleClass('clicked');
    $('.Website').toggleClass('blur');
    $('.option_2 img').toggleClass('noborder');
    $('.option_2 img').toggleClass('webBlur');
    $('.option_3 img').toggleClass('noborder');
    $('.option_3 img').toggleClass('webBlur');
    $('.kippentext').toggleClass('visible');
    $('.kippentext2').toggleClass('visible');
});

$('.option_2 img').on('click', function() {
    $(this).toggleClass('clicked');
    $('.Website').toggleClass('blur');
    $('.option_1 img').toggleClass('noborder');
    $('.option_1 img').toggleClass('webBlur');
    $('.option_3 img').toggleClass('noborder');
    $('.option_3 img').toggleClass('webBlur');
    $('.ballentext').toggleClass('visible');
    $('.ballentext2').toggleClass('visible');
    $('.ballentext3').toggleClass('visible');
});

$('.option_3 img').on('click', function() {
    $(this).toggleClass('clicked');
    $('.Website').toggleClass('blur');
    $('.option_1 img').toggleClass('noborder');
    $('.option_1 img').toggleClass('webBlur');
    $('.option_2 img').toggleClass('noborder');
    $('.option_2 img').toggleClass('webBlur');
    $('.bonentext').toggleClass('visible');
    $('.bonentext2').toggleClass('visible');
});
