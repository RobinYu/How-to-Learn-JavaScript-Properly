// 我们有一个简单的对象，它有一个 clickHandler 方法，我们想要使当页面上的一个按钮被点击时它被调用
var user = {
  data: [
        { name: 'T. Woods', age: 37 },
        { name: 'P. Mickelson', age: 43 },
  ],
  clickHandler: function (event) {
    var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // 产生 0 到 1 之间的随机数

        // 下面这行会随机打印出一个 data 数组中的人的姓名和年龄
    console.log(this.data[randomNum].name + ' ' + this.data[randomNum].age);
  },
};

// 这个 button 被 jQuery 的 $ 包装起来了，所以它变成了一个 jQuery 对象
// 下面这行会输出 undefined 因为 button 对象没有 data 属性
$('button').click(user.clickHandler);
