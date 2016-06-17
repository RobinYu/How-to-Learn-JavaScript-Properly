// 这个 data 变量是一个全局变量
var data = [
    { name: 'Samantha', age: 12 },
    { name: 'Alexis', age: 14 },
];

var user = {
    // 这个 data 变量是 user 对象的一个属性
  data: [
        { name: 'T. Woods', age: 37 },
        { name: 'P. Mickelson', age: 43 },
  ],
  showData: function (event) {
    var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // 0 和 1 之间的随机数

        // 下面这行随机打印一个 data 数组中的人的信息
    console.log(this.data[randomNum].name + ' ' + this.data[randomNum].age);
  },
};

// 把 user.showData 赋值给一个变量
var showUserData = user.showData;

// 当我们执行 showUserData 函数的时候，打印在 console 中的值来自于全局的 data 数组，而不是 user 对象的 data 属性
showUserData(); // Samantha 12 （来自全局 data 数组）
