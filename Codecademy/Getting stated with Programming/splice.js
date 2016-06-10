var colors = ['red', 'green', 'blue'];
var removed = colors.splice(0,1);
console.log(colors);
console.log(removed);

removed = colors.splice(1, 0, 'yellow', 'orange');
console.log(colors);
console.log(removed);

removed = colors.splice(1, 1, 'yellow', 'purple');
console.log(colors);
console.log(removed);
