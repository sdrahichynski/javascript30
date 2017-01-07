var Key = function(element, keyCode){
	this[keyCode] = element;
	return this;
};

var DrumMachine = {

	pressedKeys: [],

	keys: {

	},

	pressedKey: function(code){
		var self = this;
		var key = self.keys[code];

		key.classList.add('active');
		self.pressedKeys.push(key);

		self.playMusic(code);
		//playmusic
	},

	unPressedKey: function(){
		var self = this;
		self.pressedKeys.
			forEach(function(element){
				element.classList.remove('active');
				self.stopMusic(element.getAttribute('data-key'));
			});

		self.pressedKeys = [];
	},

	playMusic: function(code) {
		console.log(`play music ${code}`);
	},

	stopMusic: function(code) {
		console.log(`stop music ${code}`);
	},

	init: function(keySelector){

		var self = this;

		keyElements = document.querySelectorAll(keySelector);

		for (var i = 0, length = keyElements.length; i < length; i++) {

			var keyElement = keyElements[i];
			var keyCode = keyElement.getAttribute('data-key');

			self.keys[keyCode] = keyElement;

		};

	},
};


var Controller = {

	mouseDown: function(evt){
		evt.preventDefault();
		var target = evt.target;

		target = target.closest('.drumKey');

		if (target) {
			DrumMachine.pressedKey(target.getAttribute('data-key'));
		}

	},

	mouseUp: function(evt){
		var target = evt.target;

			DrumMachine.unPressedKey(target.getAttribute('data-key'));

	},

	keyDown: function(evt){

		var key = evt.keyCode;
		if (!(key in DrumMachine.keys)) return false;
		DrumMachine.pressedKey(key);
	},

	keyUp: function(evt){

		var key = evt.keyCode;
		if (!(key in DrumMachine.keys)) return false;
		DrumMachine.unPressedKey(key);
	},

};

(function(){
	app = {

		keySelector: '.drumKey',

		events: function(){

			window.addEventListener('mousedown', Controller.mouseDown, false);
			window.addEventListener('mouseup', Controller.mouseUp, false);

			window.addEventListener('keydown', Controller.keyDown, false);
			window.addEventListener('keyup', Controller.keyUp, false);

		},

		main: function(){

			DrumMachine.init(this.keySelector);

		},

		init: function(){

			this.events();
			this.main();


		}

	};

	app.init();

}());
