$(document).ready(function() {
  // EXPAND GROUP
  $('.group-show_expand').click(function() {
    $('.group-show').addClass('expand-group');
    $('.group-show_expand').addClass('hide-arrow');
    $('.group-hide_expand').removeClass('hide-arrow');
  });
  // COLLAPSE GROUP
  $('.group-hide_expand').click(function() {
    $('.group-show').removeClass('expand-group');
    $('.group-show_expand').removeClass('hide-arrow');
    $('.group-hide_expand').addClass('hide-arrow');
  })

});