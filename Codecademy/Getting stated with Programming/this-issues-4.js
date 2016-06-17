// 我们有两个对象。其中一个有一个叫做 avg() 的方法，而另一个没有
// 所以我们想借用一下 (avg()) 这个方法
var gameController = {
  scores: [20, 34, 55, 46, 77],
  avgScore: null,
  players: [
        { name: 'Tommy', playerID: 987, age: 23 },
        { name: 'Pau', playerID: 87, age: 33 },
  ],
};

var appController = {
  scores: [900, 845, 809, 950],
  avgScore: null,
  avg: function () {
    var sumOfScores = this.scores.reduce(function (prev, cur, index, array) {
      return prev + cur;
    });

    this.avgScore = sumOfScores / this.scores.length;
  },
};

// 如果我们执行下面的代码，
// gameController.avgScore 属性将会被设置为 appController 对象的 scores 数组的平均数

// 不要执行下面这行代码，这只是用来说明的，而我们现在想让 appController.avgScore 保持 null 值
gameController.avgScore = appController.avg();
