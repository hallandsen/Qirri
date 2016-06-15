$(document).ready(function() {

  $('#sm-menu_toggle').click(function(){
    $('.sm-menu_container').addClass('sm-menu_container_slide');
  });

  $('#sm-menu_close').click(function(){
    console.log('fire');
    $('.sm-menu_container_slide').removeClass('sm-menu_container_slide');
  });

});