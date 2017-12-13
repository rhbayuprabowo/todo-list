$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();
});

$('input[type=\'text\']').keypress(function (e) {
  if (e.which === 13) {
    var value = $(this).val();
    $(this).val('');
    $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + value + '</li>');
  }
});

$(".fa-sticky-note").on("click", function () {
  $('input[type =\'text\']').slideToggle();
});
