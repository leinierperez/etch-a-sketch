const container = document.querySelector('.container');
const div = document.querySelector('div');
const createBtn = document.getElementById('create-grid');
const defaultColorBtn = document.getElementById('default-color');
const randColorBtn = document.getElementById('random-color');
const colorShadeBtn = document.getElementById('color-shade');
const clearBtn = document.getElementById('clear-grid');
let isRandColor = false;

function createGrid(x, y) {
	let divW = 100 / x;
	let divH = 100 / y;
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < y; j++) {
			const div = document.createElement('div');
			div.style.width = `${divW}%`;
			div.style.height = `${divH}%`;
			div.style.display = 'inline-block';
			container.appendChild(div);
		}
	}
}

createGrid(16, 16);

div.setAttribute('data-passes', 0);
div.addEventListener('mouseover', (e) => {
	e.target.style.background = 'black';
	if (isRandColor) {
		e.target.style.background = randRGB();
	}
});

createBtn.onclick = () => {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
	let gridSize = window.prompt(`Enter Grid Size: `, '16');
	createGrid(gridSize, gridSize);
};

randColorBtn.onclick = () => {
	isRandColor = true;
};

defaultColorBtn.onclick = () => {
	isRandColor = false;
};

function randRGB() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}

function increaseBlackLevel() {
	const passes = Number(e.target.getAttribute('data-passes'));
	const c = 250 - 25 * passes;
	e.target.style.background = `rgb(${c},${c},${c})`;
	e.target.setAttribute('data-passes', passes + 1);
}
