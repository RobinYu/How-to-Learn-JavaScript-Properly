/*
 * @Author: robin
 * @Date:   2016-05-31 15:13:13
 * @Last Modified by:   robin
 * @Last Modified time: 2016-05-31 21:46:34
 */
var text = "RobinRobin";
var myName = "Robin";
var hits = [];
for (var i = 0; i < text.length; i++) {
    if (text[i] === "R") {
        for (var j = i; j < (i + myName.length); j++) {
            hits.push(text[j]);
        }
    }
}
if (hits.length===0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}