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

//EXPAND COMMENT FIELD
  $('.user-comment_input textarea').focus(function(){
    $(this).parent('.user-comment_input').addClass('comment_input-expanded');
  });

//COLLAPSE COMMENT FIELD
  $('.comment-input_collapse').click(function(){
    $(this).parents('.user-comment_input').removeClass('comment_input-expanded');
  })


//SHOW ALL COMMENTS
  $('span.show-all_comments').click(function(){
    $(this).parents('.group-more_comments_show').removeClass('hide-comments');
    //$('.group-comments_show_all').removeClass('hide');
    $('span.show-all_comments').addClass('hide');
    $('span.hide-comments').removeClass('hide');
  });

  $('span.hide-comments').click(function(){
    $(this).parents('.group-more_comments_show').addClass('hide-comments');
    $('span.show-all_comments').removeClass('hide');
    $('span.hide-comments').addClass('hide');
  });

});