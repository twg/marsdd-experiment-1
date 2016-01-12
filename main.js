console.log('hello!')

// swap mobile sticky footers on button click
$('#start').click(function() {
	$('.base').css('padding-bottom', '450px')
	$('#mobileFooter').css('display', 'none')
	$('#mobileForm').css('display', 'block')
	$('.footer-email').focus()
})

//function taken from /www-marsdd-com/wp-content/themes/marsdd-next/assets/js/_main.js
$(function () {
	$('.stickyFooter > .close').click(function () {
		if ($(this).parent().attr("id") === 'desktopFooter' || $(this).parent().attr("id") === 'mobileFooter'){
			collapseFooter()
		} else if ($(this).parent().attr("id") === 'mobileForm'){
			collapseForm()
		}
	})
})

var hidden = true;
var currentlyHidden = true;
// hide 
$(window).on("scroll", function() {
	//$('#mobileFooter').css('display', 'block')
    var scrollPos = $(window).scrollTop();
    var shouldHide = scrollPos <= 100;
    if (shouldHide === currentlyHidden){
    	return;
    }
    var jqueryOp = shouldHide ? "hide" : "show"
    currentlyHidden = jqueryOp == "hide"
    console.log(jqueryOp, scrollPos, currentlyHidden)
    $("#mobileFooter")[jqueryOp]();
});

$('#mobile-email').focusout(function(){
	collapseForm()
})

function collapseFooter(){
	$('.stickyFooter').hide()
	if (Cookies.get('stickyFooterSigned')) {
		Cookies.set('stickyFooterClosed', true)
	} else {
		Cookies.set('stickyFooterClosed', true, { expires: 1 })
	}
}

function collapseForm(){
	$('#mobileForm').css('display', 'none')
	$('#mobileFooter').css('display', 'block')
}
