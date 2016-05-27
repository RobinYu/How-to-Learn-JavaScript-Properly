/*
 * @Author: robin
 * @Date:   2016-05-23 18:04:30
 * @Last Modified by:   robin
 * @Last Modified time: 2016-05-27 17:42:59
 */
function addTen(num) {
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);
console.log(count);
console.log(result);

function setName(obj) {
    obj.name = "Robin";
}

var person = new Object();
setName(person);
console.log(person.name);
