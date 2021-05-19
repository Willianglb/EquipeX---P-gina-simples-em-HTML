$( document ).ready(function() {

  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let equipeSection = $('#equipe-area');
  let portfolioSection = $('#portfolio-area');
  let contatoSection = $('#contato-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'equipe-menu') {
      scrollTo = equipeSection;
    } else if(btnId == 'portfolio-menu') {
      scrollTo = portfolioSection;
    } else if(btnId == 'contato-menu') {
      scrollTo = contatoSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });

});