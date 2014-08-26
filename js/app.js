
//
// Document Ready
//
$('document').ready(function(){

  var windowHeight = $(window).height();

  $('footer, section, .button-bar').css('margin-bottom', windowHeight)

  $('button.aa').on('click', function(){
    var anchor = $(this).attr('data-anchor');
    window.location.hash = anchor;
  });

  $(this).trigger( window.AA_CONFIG.readyEvent );

})
