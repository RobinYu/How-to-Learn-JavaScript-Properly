function Person() {
}

Person.prototype = {
  constructor: Person,
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  friends: ['Shelby', 'Court'],
  sayName: function () {
    console.log(this.name);
  },
};

var person1 = new Person();
var person2 = new Person();

person1.friends.push('Van');

console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends === person2.friends);
