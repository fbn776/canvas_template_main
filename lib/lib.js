function Img(src) {
  let img = new Image();
  img.src = src;
  return img;
}

//HTML elements functions
function Log() {
  this.elm = document.createElement("div");
  document.body.appendChild(this.elm);
  this.elm.style = "position: fixed; top: 0; left: 0; padding: 5px; z-index: 99999; background-color: rgba(255,255,255,0.4); color: black; max-width: 100%; overflow: scroll "

  this.log = function() {
    this.elm.innerHTML = "";
    for (let a of arguments) {
      this.elm.innerHTML += a + "<br>";
    }
  }
}

function s(x) {
  return document.querySelector(x);
};

function css(x, y) {
  return window.getComputedStyle(x).getPropertyValue(y);
};

HTMLElement.prototype.setProps = function(obj) {
  if (obj) {
    let keys = obj.getKeys();
    for (let i of keys) {
      this[i] = obj[i];
    }
  }
};
HTMLElement.prototype.setStyle = function(obj) {
  if (obj) {
    let keys = obj.getKeys();
    for (let i of keys) {
      this.style[i] = obj[i];
    }
  }
};
HTMLElement.prototype.setAttr = function(obj) {
  if (obj) {
    let keys = obj.getKeys();
    for (let i of keys) {
      this.setAttribute(i, obj[i]);
    }
  }
};

function createElm(type, obj) {
  if (type) {
    let elm = document.createElement(type);
    if (obj.attribute) {
      elm.setAttr(obj.attribute);
    };
    if (obj.property) {
      elm.setProps(obj.property);
    };
    if (obj.style) {
      elm.setStyle(obj.style);
    }
    return elm;
  }
};

//Strings functions
function small(x) {
  return x.toLowerCase()
};

function big(x) {
  return x.toUpperCase()
};

function jsonS(x) {
  return JSON.stringify(x);
};

function jsonP(x) {
  return JSON.parse(x);
};

//Objects and array functions
Object.prototype.getKeys = function() {
  return Object.getOwnPropertyNames(this);
};
Object.prototype.getValues = function() {
  let keys = this.getKeys();
  let arr = [];
  for (let n of keys) { arr.push(this[n]) };
  return arr;
};
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
Array.prototype.randomItem = function() {
  return this[Math.floor(Math.random() * this.length)];
};
Object.prototype.randomItem = function() {
  return this.getValues().randomItem();
};
