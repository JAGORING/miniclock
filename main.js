const today = document.getElementById('today');
const nowTime = document.getElementById('nowTime');

const hourLine = document.querySelector('.hours-line');
const minuteLine = document.querySelector('.minutes-line');
const secondLine = document.querySelector('.seconds-line');
const lines = document.querySelectorAll('.line');

function getDate() {
	const date = new Date();
	const year = date.getFullYear();
	const month = Number(date.getMonth()) + 1;
	const day = date.getDate();
	today.innerText = `${year}년 ${month}월 ${day}일`;
}

function getTime() {
	const date = new Date();
	const hours = (date.getHours() > 12) ?  date.getHours() - 12 : date.getHours();
	const hoursDegree = (hours / 12) * 360 + 90;
	hourLine.style.transform = `rotate(${hoursDegree}deg)`;

	const minutes = date.getMinutes();
	const minutesDegree = (minutes / 60) * 360 + 90;
	minuteLine.style.transform = `rotate(${minutesDegree}deg)`;

	const seconds = date.getSeconds();
	const secondsDegree = (seconds / 60) * 360 + 90;
	secondLine.style.transform = `rotate(${secondsDegree}deg)`;

	if ((hours / 12) === 0 || (minutes / 60) === 0 || (seconds / 60) === 0) {
		console.log('0!!');
		lines.forEach((line) => {
			line.style.transition = 'unset'; 
			console.log('1!!!!');
		});
	} else {
		lines.forEach((line) => {
			line.style.transition = '.2s'; 
		});
	}

	nowTime.innerText = `${date.getHours() > 12 ? '오후' : '오전' } ${hours}시 ${minutes}분 ${seconds}초`;
}

setInterval(getTime, 1000);

function init() {
  getDate();
	getTime();
}
init();
