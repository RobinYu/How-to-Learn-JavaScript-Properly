var user = {
  tournament: 'The Masters',
  data: [
        { name: 'T. Woods', age: 37 },
        { name: 'P. Mickelson', age: 43 },
  ],

  clickHandler: function (event) {
        // 为了当 this 还指向 user 对象的时候把它的值保存下来，我们把它存到另一个变量中
        // 我们把 this 保存到 theUserObj 变量中去，这样我们就可以在之后使用了
    var theUserObj = this;
    this.data.forEach(function (person) {
            // 我们将 this.tournament 替换成 theUserObj.tournament
      console.log(person.name + ' is playing at ' + theUserObj.tournament);
    });
  },
};

user.clickHandler();
