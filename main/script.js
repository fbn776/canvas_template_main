const { canvas, ctx, cx, cy, cw, ch } = setUpCanvas(s("#main"), width, height);

let now;
let lastTime = Date.now();

function draw() {
	now = Date.now();
	let dt = (now - lastTime) / 1000.0;
	//Main code starts here;
	
	
	
	window.requestAnimationFrame(draw);
	lastTime = now;
};
draw();
