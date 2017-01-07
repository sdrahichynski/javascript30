(function(){

	const inputs = document.querySelectorAll('.container input');




	function updateVars(){
		var sizing = this.dataset.sizing || '';
		document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
	};

	inputs.forEach(input => input.addEventListener('change', updateVars,false));
	inputs.forEach(input => input.addEventListener('mousemove', updateVars,false));

}())