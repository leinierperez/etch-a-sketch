let container = document.querySelector('.container');
let div = document.querySelector('div');
let body = document.querySelector('body');
let btn = document.createElement('button');
btn.style.width = '60px';
btn.style.height = '20px';
btn.style.alignSelf = 'flex-end';
btn.innerHTML = 'hellp';
body.appendChild(btn);

function createGrid(x, y) {
	let divW = 100 / x;
	let divH = 100 / y;
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < y; j++) {
			let div = document.createElement('div');
			div.style.width = `${divW}%`;
			div.style.height = `${divH}%`;
			div.style.display = 'inline-block';
			container.appendChild(div);
		}
	}
}

createGrid(16, 16);

div.addEventListener('mouseover', (e) => {
	e.target.style.background = 'black';
});

btn.onclick = () => {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
	let gridSize = window.prompt(`Enter Grid Size: `, '16');
	createGrid(gridSize, gridSize);
};

function randRGB() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}
