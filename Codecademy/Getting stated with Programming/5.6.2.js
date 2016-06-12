var stringValue = 'fuck bitch jamese';
var positions = new Array();
var pos = stringValue.indexOf('e');

while (pos > -1) {
  positions.push(pos);
  pos = stringValue.indexOf('e', pos + 1);
}

console.log(positions);
