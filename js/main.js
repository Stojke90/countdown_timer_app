const daysLeft = document.querySelector('.days');
const hoursLeft = document.querySelector('.hours');
const minutesLeft = document.querySelector('.minutes');
const secondsLeft = document.querySelector('.seconds');
const text = document.querySelector("#timeFor");

const tipeOfCountdown = document.querySelector("#countdown");
const dateToCountdown = document.querySelector("#date");
const timeToCountdown = document.querySelector('.ti')
const btnSub = document.querySelector("button");

const body = document.querySelector("body");
const setData = document.querySelector(".question");
const screen = document.querySelector("#paige");


const today = new Date().toISOString().split('T')[0];
document.getElementsByName("date")[0].setAttribute('min', today);


tipeOfCountdown.onclick = () => {
	if(tipeOfCountdown.value){
		dateToCountdown.disabled = false;
	} else {
		dateToCountdown.disabled = true;
	}
};

dateToCountdown.onchange = () => {
	if(dateToCountdown.value){
		timeToCountdown.disabled = false;
	} else {
		timeToCountdown.disabled = true;
	}
};

timeToCountdown.onchange = () => {
	if(timeToCountdown.value){
		btnSub.disabled = false;
		btnSub.classList.add('active')
	} else {
		btnSub.disabled = true;
	}
};

btnSub.addEventListener('click', () => {
	if(tipeOfCountdown.value === 'New Year'){
		text.innerText = 'Time until New Year';
		body.style.backgroundImage = "url('image/newYear.jpg')"
	} else if(tipeOfCountdown.value === 'Birthday'){
		text.innerText = 'Time until Birthday';
		body.style.backgroundImage = "url('image/birthday.jpg')"
	};
	setData.style.display = "none";
	screen.style.display = "block";
	setInterval(() => countdown(),1000);
});

const countdown = () => {
	const time = dateToCountdown.value.split('-').join(' ').toString() + " " + timeToCountdown.value+":00";
	const countDownDate = new Date(time).getTime();
	const todayDate = new Date().getTime();

	const timeLeft = countDownDate - todayDate;

	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	daysLeft.innerText = days;
	hoursLeft.innerText = hours;
	minutesLeft.innerText = minutes;
	secondsLeft.innerText = seconds;
	
	if(timeLeft < 0) {
		body.style.backgroundImage = "url('image/finis.gif')";
		screen.style.display = "none";
		setData.style.display = "none";
	};

};