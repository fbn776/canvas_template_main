const width = window.innerWidth;
const height = window.innerHeight;
const twoPi = 2 * Math.PI;
const root2 = Math.sqrt(2);
const root3 = Math.sqrt(3);

function setUpCanvas(c, w, h) {
	c.width = w;
	c.height = h;
	return {
		canvas: c,
		ctx: c.getContext("2d"),
		cw: c.width,
		ch: c.height,
		cx: c.width / 2,
		cy: c.height / 2
	}
}

CanvasRenderingContext2D.prototype.line = function(x1, y1, x2, y2, opt = {}) {
	this.beginPath();
	if (opt.dash || opt.dashed) {
		this.setLineDash(opt.dash || opt.dashed || [5, 2]);
	}
	this.strokeStyle = (opt.color || opt.strokColor || "black");
	this.lineWidth = (opt.width || opt.lineWidth || 1);
	this.moveTo(x1, y1);
	this.lineTo(x2, y2);
	this.stroke();
	this.setLineDash([0, 0])
	this.closePath();
};

CanvasRenderingContext2D.prototype.box = function(x, y, w, h, opt = {}) {
	this.beginPath();
	this.strokeStyle = (opt.color || opt.strokeStyle || "black");
	this.fillStyle = (opt.fill || opt.fillStyle || "black");
	this.lineWidth = (opt.width || opt.lineWidth || 1);
	this.rect(x, y, w, h);
	this.fill();
	this.stroke();
	this.closePath();
};

CanvasRenderingContext2D.prototype.circle = function(x, y, r, opt = {}) {
	this.beginPath();
	this.strokeStyle = (opt.color || opt.strokeStyle || "black");
	this.fillStyle = (opt.fill || opt.fillStyle || "black");
	this.lineWidth = (opt.width || opt.lineWidth || 1);
	this.arc(x, y, r, 0, twoPi);
	this.fill();
	this.stroke();
	this.closePath();
};

CanvasRenderingContext2D.prototype.text = function(txt, x, y, opt = {}) {
	this.beginPath();
	this.font = opt.font || "10px Arial";
	this.fillStyle = opt.color || "black";
	this.fillText(txt, x, y);
	this.closePath();
};
CanvasRenderingContext2D.prototype.Arrow = function(sX, sY, eX, eY, opt = {}) {
	this.line(sX, sY, eX, eY, opt);
	if (opt.hideArrow) {
		let size = opt.size || 8;
		let angle = Math.atan2((eY - sY), (eX - sX));
		this.save();
		this.translate(eX, eY);
		this.rotate(angle - Math.PI / 2);
		this.beginPath();

		let x1 = -(size / 2),
			y1 = -(size * root3 / 2);

		this.moveTo(x1, y1);
		this.lineTo(x1 + size, y1);
		this.lineTo(0, 0);
		this.fillStyle = opt.color;
		this.fill();
		this.closePath();
		this.restore();
	}
};

CanvasRenderingContext2D.prototype.drawRect = function(obj, opt) {
	this.box(obj.x, obj.y, obj.w, obj.h, opt);
}