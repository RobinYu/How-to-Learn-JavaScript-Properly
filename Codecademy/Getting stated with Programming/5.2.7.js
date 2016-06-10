var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(numbers.indexOf(4));
console.log(numbers.lastIndexOf(4));
console.log(numbers.indexOf(4, 4));
console.log(numbers.lastIndexOf(4, 4));

var person = { name: 'Nicholas' };
var people = [{ name: 'Nicholas'}];

var morePeople = [person];

console.log(people.indexOf(person));
console.log(morePeople.indexOf(person));
