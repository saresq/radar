$(document).ready(function(){
  $(function() {
    $('[data-toggle="popover"]').popover()
  })
  $('body').on('click', function (e) {
      //did not click a popover toggle or popover
      if ($(e.target).data('toggle') !== 'popover'
          && $(e.target).parents('.popover.in').length === 0) {
          $('[data-toggle="popover"]').popover('hide');
      }
  });
});
