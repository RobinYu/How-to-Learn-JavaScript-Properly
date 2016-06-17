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

// 注意我们使用的是 apply() 方法，所以第二个参数必须是一个数组，这个数组中包含了要传入 appController.avg() 的参数
appController.avg.apply(gameController, gameController.scores);

// 即使我们从 appController 对象中借用了 avg() 方法，gameController 的 avgScore 属性仍被成功地设置了
console.log(gameController.avgScore); // 46.4

// appController.avgScore 的值仍然是 null。它没有被更新，只有 gameController.avgScore 被更新了
console.log(appController.avgScore); // null
