function Person() {
}
Person.prototype.name = 'Nichlas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function() {
  console.log(this.name);
};

var person1 = new Person();
person1.sayName();

var person2 = new Person();
person2.sayName();

console.log(person1.sayName == person2.sayName);
