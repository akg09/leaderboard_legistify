var img;
var carousel = function (element) {
	let items = document.getElementsByClassName('item');
	startSlide(items,1);
}
var startAnimation = function () {
	carousel();
}
var startSlide = function (items, count) {
	img = items[count];
	setTimeout(function(){
		hideAllImages(items);			// hide all images
		img.classList.remove('hide');	//show current image
		count = count + 1;
		if(count >= 4) {
			count = 0;
		}
		startSlide (items , count);
	}, 4000);
}
var hideAllImages = function (items) {
	let img;
	for(i=0;i<items.length;i++) {
		img = items[i];
		img.classList.add('hide');
	}
}
var openOverlay = function () {
	let modal = document.getElementById('modal-overlay');
	modal.style.display = "block";
}
var closeOverlay = function () {
	let modal = document.getElementById('modal-overlay');
	modal.style.display = "none";
}
