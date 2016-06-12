var person = {};
Object.defineProperty(person, 'name', {
  writable: false,
  value: 'Nicholas',
});

console.log(person.name);
person.name = 'Greg';
console.log(person.name);
