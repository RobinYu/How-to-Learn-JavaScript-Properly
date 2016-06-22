var a = 1;
function foo(x) {
    x = 2;
}
foo(a);
console.log(a); // 仍为1, 未受x = 2赋值所影响
