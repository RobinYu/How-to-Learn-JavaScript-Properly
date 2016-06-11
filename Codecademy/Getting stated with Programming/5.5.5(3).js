window.color = 'red';
var o = {color: 'blue'};

function sayColor() {
  console.log(this.color);
}

sayColor();

sayColor.call(this);
sayColor.call(window);
sayColor.call(o);
