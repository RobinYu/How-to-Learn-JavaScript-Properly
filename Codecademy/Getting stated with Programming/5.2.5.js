var values = [0, 5, 1, 10, 9, 15];
values.sort(compare);
console.log(values);

function compare(a, b) {
  return b - a;
}
