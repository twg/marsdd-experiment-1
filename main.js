console.log('hello!')
$('#start').click(function() {
	$('#mobileFooter').css('display', 'none')
	$('#overlay').css('display', 'block')
	$('.footer-email').focus()
})

//function taken from /www-marsdd-com/wp-content/themes/marsdd-next/assets/js/_main.js
$(function () {
	$('.stickyFooter > .close').click(function () {
		if ($(this).parent().attr("id") === 'desktopFooter' || 
				$(this).parent().attr("id") === 'mobileFooter'){
			$('.stickyFooter').hide()
			mars.removeStickyFooterPadding()
			if (Cookies.get('stickyFooterSigned')) {
				Cookies.set('stickyFooterClosed', true)
			} else {
				Cookies.set('stickyFooterClosed', true, { expires: 1 })
			}
		} else if ($(this).parent().attr("id") === 'mobileForm'){
			$('#overlay').css('display', 'none')
	$('#mobileFooter').css('display', 'block')
		}
	})
})