// Get the linear interpolation between two value
function lerp(value1, value2, amount) {
	amount = amount < 0 ? 0 : amount;
	amount = amount > 1 ? 1 : amount;
	return value1 + (value2 - value1) * amount;
}

function circleCord(h, k, r, angle) {
	return {
		x: (r * Math.cos(angle)) + h,
		y: (r * Math.sin(angle)) + k,
	};
}

function rad(x) {
	return (Math.PI / 180) * x;
};

function deg(x) {
	return (180 / Math.PI) * x;
};

function dist(xa, ya, xb, yb) { return Math.sqrt(((xb - xa) ** 2) + ((yb - ya) ** 2)) };

function slope(x1, y1, x2, y2) {
	return deg(Math.atan2((y2 - y1), (x2 - x1)));
};

function round(value, precision) {
	let multiplier = Math.pow(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
};

function map_range(x, inMin, inMax, outMin, outMax) {
	return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

function root(n) { return Math.sqrt(n) };

function sin(n) { return Math.sin(n) };

function cos(n) { return Math.cos(n) };

function tan(n) { return Math.tan(n) };

function cosec(n) { return 1 / sin(n) };

function sec(n) { return 1 / cos(n) };

function cot(n) { return 1 / tan(n) };

function random(x, y, round = false) {
	let a = x + Math.random() * (y - x);
	return round?Math.floor(a):a;
}


class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.xy = [this.x, this.y];
	}
	draw(r = 3, color = "black") {
		ctx.circle(this.x, this.y, r, { fill: color })
	}

	static connect(A, B) {
		ctx.line(...A.xy, ...B.xy);
	}
}


class Vector {
	constructor(x, y, z) {
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
	}

	toStr() {
		return `(${this.x},${this.y},${this.z})`;
	};
	equal(b) {
		return (this.x == b.x) && (this.y == b.y) == (this.z == b.z);
	}
	isZero() {
		return this.x == 0 && this.y == 0 && this.z == 0;
	}
	multScalar(s) {
		return new Vector(this.x * s, this.y * s, this.z * s);
	}
	divScalar(s) {
		return this.multScalar(1 / s);
	}
	neg() {
		return this.multScalar(-1);
	}
	add(b) {
		return new Vector(this.x + b.x, this.y + b.y, this.z + b.z)
	}
	sub(b) {
		return this.add(b.neg());
	}
	mag() {
		return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
	}
	magSq() {
		return (this.x ** 2 + this.y ** 2 + this.z ** 2);
	}
	unit() {
		return this.divScalar(this.mag());
	}
	dot(b) {
		return (this.x * b.x + this.y * b.y + this.z * b.z);
	};
	cross(b) {
		return new Vector(this.y * b.z - this.z * b.y, -(this.x * b.z - this.z * b.x), this.x * b.y - this.y * b.x)
	};
	projectOn(b) {
		return this.dot(b) / b.mag();
	};
	angleBW(b) {
		return Math.acos(this.dot(b) / (this.mag() * b.mag()));
	};
	angle() {
		return this.angleBW(new Vector(1, 0));
	}
	isParallel(b) {
		return this.cross(b).isZero();
	};
	isPerpendicular(b) {
		return this.dot(b) == 0;
	};

	distBtw(b) {
		return Math.sqrt((this.x - b.x) ** 2 + (this.y - b.y) ** 2 + (this.z - b.z) ** 2);
	}

	static random2D(l = 1) {
		let angle = Math.random() * (2 * Math.PI);
		return new Vector(l * Math.cos(angle), l * Math.sin(angle), 0);
	}
}