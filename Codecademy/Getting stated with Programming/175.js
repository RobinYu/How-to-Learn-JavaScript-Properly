function Person() {
}

var friend = new Person();

Person.prototype = {
  constructor: Person,
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: function () {
    console.log(this.name);
  }
};

friend.sayName(); //error
