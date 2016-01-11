console.log('hello!')
$('#start').click(function() {
	$('#mobileFooter').css('display', 'none')
	$('#desktopFooter').css('display', 'block')
	$('.footer-email').focus()
})

//taken from 
$(function () {
	$('.stickyFooter > .close').click(function () {
		$('.stickyFooter').hide();
		mars.removeStickyFooterPadding();
		if (Cookies.get('stickyFooterSigned')) {
			Cookies.set('stickyFooterClosed', true);
		} else {
			Cookies.set('stickyFooterClosed', true, { expires: 1 });
		}
	});
})