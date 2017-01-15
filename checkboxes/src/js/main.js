
let keys = {};
document.addEventListener('keydown', (e) => keys[e.keyCode] = true);
document.addEventListener('keyup', (e) => keys[e.keyCode] = false);



const inputs = [...document.querySelectorAll('.item input')];
const list = document.querySelectorAll('.item p');
document.addEventListener('mousedown', (e) => {
	if (e.shiftKey) e.preventDefault();
});

let lastChanged = null;


inputs.forEach( (input) => input.addEventListener('change', changeInput) );


function changeInput(e) {

	if ( keys[16] && this.checked && lastChanged ) {

		let flag = 0;

		inputs.forEach( checkbox => {

			if (flag === 1) checkbox.checked = true;

			if (checkbox === lastChanged || checkbox === this) {
				flag++;
			}

		});

	}

	lastChanged = this;

}
