function toggleFunction(mainClickName, toggleIconName) {
	document.querySelectorAll(mainClickName).forEach(function(link) {
		link.addEventListener('click', function(changeIcon) {
			document.querySelectorAll(toggleIconName).forEach(function(subLink) {
				subLink.classList.toggle('fa-toggle-off');
				subLink.classList.toggle('fa-toggle-on');
			});
		});
	});
}
function viewAll() {
	let view = document.getElementById('newBooking');
	let viewAll = document.getElementById('newBookingAll');
	if (view.style.display == 'none') {
		viewAll.classList.remove('d-none');
	} else {
		view.style.display = 'none';
		viewAll.classList.remove('d-none');
	}
}
function view() {
	let view = document.getElementById('newBooking');
	let viewAll = document.getElementById('newBookingAll');
	if (view.style.display == 'none') {
		viewAll.classList.add('d-none');
		view.style.display = 'block';
	} else {
	}
}

function cancelConfirm() {
	confirm('Cancel this Booking?');
}
