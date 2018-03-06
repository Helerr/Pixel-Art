// Select color input
const colorpicker = document.getElementById('colorPicker');
let color = colorpicker.value;
colorpicker.addEventListener('change', function() {color = this.value;}, false);
console.log(color);
// Select size input
let height;
let width;


const form = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function(e){
	e.preventDefault();
	height = document.getElementById('inputHeight').value;
	width = document.getElementById('inputWeight').value;
	console.log(height);	
	console.log(width);
	makeGrid();
});
function makeGrid() {
	const canvas = document.getElementById("pixelCanvas");
	while(canvas.firstChild){
		canvas.removeChild(canvas.firstChild);
	}
	canvas.style.backgroundColor= "white";
	const col="<td></td>";
	for(let i=1; i<= height; i++){
		let row = document.getElementById("pixelCanvas").appendChild(document.createElement("tr"));
		for(let j=1;j<= width; j++){
			row.appendChild(document.createElement("td"));
		}
	}

}

document.getElementById("pixelCanvas").addEventListener("click", function(e){
	e.target.style.backgroundColor = color;
}, false);