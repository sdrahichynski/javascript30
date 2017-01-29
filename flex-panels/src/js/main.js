(function(){

	const panels = document.querySelectorAll('.panel');

	panels.forEach( panel => panel.addEventListener('mousedown', toggleOpen, false));
	panels.forEach( panel => panel.addEventListener('transitionend', toggleActive, false));

	function toggleOpen(evt) {

		if ( !this.classList.contains('open') ) {
			let opened = document.querySelector('.panel.open');

			if (opened) {
				opened.classList.remove('open');
			};
		};

		this.classList.toggle('open');

	};

	function toggleActive(evt) {

		if (evt.propertyName !== 'flex-grow' && evt.propertyName !== 'flex') return false;
		this.classList.toggle('open-active');

	};


}())