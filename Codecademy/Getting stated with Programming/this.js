var firstName = 'Peter',
  lastName = 'Ally';

function showFullName() {
    // 在这个函数中，this 将会拥有 window 对象的值
    // 因为 showFullName() 函数，和 firstName, lastName 一样是定义在全局作用域的
  console.log(this.firstName + ' ' + this.lastName);
}
var person = {
  firstName: 'Penelope',
  lastName: 'Barrymore',
  showFullName: function () {
        // 下面这行中的 this 指代 person 对象，因为 showFullName 这个函数将会被 person 对象调用
    console.log(this.firstName + ' ' + this.lastName);
  },
};

showFullName(); // Peter Ally

// 所有的全局变量和函数都定义在 window 对象上面，所以：
showFullName(); // Peter Ally

// 在 person 对象中定义的 showFullName() 函数中的 this 仍然指向 person 对象，所以：
person.showFullName(); // Penelope Barrymore
