var menuLeft = document.getElementById('sidenav'), showLeft = document
		.getElementById("showLeft");

window.onload = function() {
	showLeft.onclick();
}

showLeft.onclick = function() {
	classie.toggle(this, 'active');
	classie.toggle(menuLeft, 'cbp-spmenu-open');
	disableOther('showLeft');
};
function disableOther(button) {
	if (button !== 'showLeft') {
		classie.toggle(showLeft, 'disabled');
	}
}


