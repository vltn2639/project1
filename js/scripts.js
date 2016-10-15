$(document).ready(function() {
	$('.header').prepend('<input type="checkbox" id="hmt" class="hidden-menu-ticker"><label class="btn-menu" for="hmt"><span class="btn-menu__first"></span><span class="btn-menu__second"></span><span class="btn-menu__third"></span></label>');
	$('.btn-menu').click(function() {
		$('body').toggleClass('mode');
	})
})