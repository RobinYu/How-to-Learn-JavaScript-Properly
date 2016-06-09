'use strict';
const person1 = {
  toLocaleString() {
    return 'Nikolaos';
  },

  toString() {
    return 'Nicholas';
  },
};

const person2 = {
  toLocaleString() {
    return 'Grigorios';
  },

  toString() {
    return 'Greg';
  },
};

const people = [person1, person2];
console.log(people);
console.log(people.toString());
console.log(people.toLocaleString());
