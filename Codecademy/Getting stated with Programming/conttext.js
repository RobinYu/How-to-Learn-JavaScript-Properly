var person = {
  firstName: 'Penelope',
  lastName: 'Barrymore',
  showFullName: function () {
        // 「上下文」
    console.log(this.firstName + ' ' + this.lastName);
  },
};

// 当我们在 person 对象上调用 showFullName() 方法的时候，「上下文」是 persion 对象。
// 这时在 showFullName() 方法里面使用的 this 就拥有了 person 对象的值
person.showFullName(); // Penelope Barrymore

// 当我们使用另一个对象来调用 showFullName 的时候
var anotherPerson = {
  firstName: 'Rohit',
  lastName: 'Khan',
};

// 我们可以使用 apply 方法来显式地设置 this 的值。关于 apply() 方法，我们将在后文中详细解释
// this 得到的永远是调用它的那个对象的值，因此：
person.showFullName.apply(anotherPerson); // Rohit Khan

// 所以现在上下文就变成了 anotherPerson ，因为是 anotherPerson 使用 apply() 方法调用了 person.showFullName() 方法
