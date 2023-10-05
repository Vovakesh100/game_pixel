const board = document.querySelector('#board');
const colors = ['#FF69B4', '#3498DB', '#FFD700 ', '#00FF7F', '#FF4500'];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));

	square.addEventListener('mouseleave', () => removeColor(square));

	board.append(square);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(e) {
	e.style.backgroundColor = '#1d1d1d';
	e.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
