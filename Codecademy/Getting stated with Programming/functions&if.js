/*
* @Author: robin
* @Date:   2016-05-30 21:56:10
* @Last Modified by:   robin
* @Last Modified time: 2016-05-30 22:15:28
*/
function sleepCheck(numHours) {
	if (numHours>=8) {
		return "You're getting plenty of sleep!Maybe even too much!";
	} else {
		return "Get some more shut eye!";
	}
}
console.log(sleepCheck(10));

