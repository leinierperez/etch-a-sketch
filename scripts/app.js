let container = document.querySelector('.container');

function createGrid(x, y) {
	let divW = 100 / x;
	let divH = 100 / y;
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < y; j++) {
			let div = document.createElement('div');
			div.style.width = `${divW}%`;
			div.style.height = `${divH}%`;
			// div.style.border = '2px solid red';
			div.style.display = 'inline-grid';
			container.appendChild(div);
		}
	}
}

createGrid(32, 32);

let div = document.querySelector('div');
div.addEventListener('mouseover', (e) => {
	let grid = e.target;
	grid.style.background = 'gray';
});
