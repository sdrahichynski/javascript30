(function(){

	const hHand = document.querySelector('.hHand');
	const mHand = document.querySelector('.mHand');
	const sHand = document.querySelector('.sHand');

	function clockLoop(){
		updateTime();
		setTimeout(clockLoop, 500);
	};

	function updateTime(){
		const now = new Date();
		const seconds = now.getSeconds();
		const minutes = now.getMinutes();
		const hours = now.getHours();

		const secondsAngle = (seconds / 60) * 360;
		const minutesAngle = (minutes / 60) * 360;
		const hoursAngle = (hours / 12) * 360;

		sHand.style.transform = `rotate(${secondsAngle}deg)`;
		mHand.style.transform = `rotate(${minutesAngle}deg)`;
		hHand.style.transform = `rotate(${hoursAngle}deg)`;
	};

	clockLoop();
}());