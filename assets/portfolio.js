function modalMonitor() {
	$('#portfolioRow').on('click', '.modalProject', function() {
		$('#about-me-modal').removeClass('modal-dialog-scrollable');
		$('#portfolioModalContent').empty();
		let projUrl = $(this).attr('data-url');
		let frame = $('<iframe>').attr({ src: projUrl, allow: 'geolocation' });
		$('#portfolioModalContent').append(frame);
		$('#porfolioModal').modal();
	});
}

function clickButtons() {
	$('#contactModal').on('click', '#messageSend', function(e) {
		e.preventDefault();
		const senderName = $('#sender-name').val();
		const senderEmail = $('#sender-email').val();
		const senderMessage = $('#sender-message').val();
		setTimeout(function() {
			$('#contactModal').modal('hide');
		}, 1000);
		$('#sender-name, #sender-email, #sender-message').val('');
		$('#sender-message').val('Thanks!');
		$('#contactModal').on('hidden.bs.modal', function() {
			$('#sender-message').val('');
		});

		const url = `https://formspree.io/mrgpeaoa`;
		const data = { senderName, senderEmail, senderMessage };

		$.ajax({
			type: 'POST',
			url: url,
			data: data
		});
	});

	$('#portfolioButton').on('click', function() {
		let scrollLoc = $(this).attr('data-scroll');
		$('html, body').animate(
			{
				scrollTop: $(scrollLoc).offset().top - 320
			},
			3000
		);
	});

	$('#scootImg').click(function() {
		$('#about-me-modal').addClass('modal-dialog-scrollable');
		$('#portfolioModalContent').empty();
		let modalBody = $('<div>').addClass('modal-body').html(aboutMe);
		$('#portfolioModalContent').append(modalHeader, modalBody, modalFooter);
		$('.tooltip').remove();
		$('#porfolioModal').modal();
	}); //end of scootImg
} //end of click buttons

function toolTipInitialization() {
	//initialize bootstrap tool tips
	$('.gitTag').tooltip({ placement: 'bottom' });
	$('.techList p, #scootImg').tooltip({ placement: 'top' });
} //end of tool tip initialization

$(document).ready(function() {
	// drawPortolio();
	modalMonitor();
	clickButtons();
	toolTipInitialization();

	new WOW().init();
	// end of doc ready
});
