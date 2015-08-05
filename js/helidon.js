$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});

$('.tree-toggle').click(function () {
    $('.nav .tree').hide();
	$(this).parent().children('ul.tree').toggle(100);
});

(function($){
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	});
})(jQuery);

$(function(){
    $('.dropdowns').hover(function() {
         $(this).toggleClass('open');
    });
});