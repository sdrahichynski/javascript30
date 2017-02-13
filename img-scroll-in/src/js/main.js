function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function(){
		var context = this, args = arguments;
		var later = function(){
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args)
	};
}


const slideInImages = document.querySelectorAll('.slide-in');

// slideInList.forEach( (item) => item.addEventListener('mousedown', slideIn ) );

// function slideIn(){
// 	this.classList.toggle('active')
// };





window.addEventListener('scroll', debounce(listenScroll) );

function listenScroll(e){

	const scrollAt = window.scrollY + window.innerHeight;

	slideInImages.forEach( slideImage => {
		const slideInAt = scrollAt - slideImage.height / 2;
		const imageBottom = slideImage.offsetTop + slideImage.height;

		if ( slideInAt > slideImage.offsetTop && window.scrollY < imageBottom) {
			slideImage.classList.add('active');
		} else {
			slideImage.classList.remove('active')
		}

	});
};