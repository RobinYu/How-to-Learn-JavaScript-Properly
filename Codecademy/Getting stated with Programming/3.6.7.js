/*
 * @Author: robin
 * @Date:   2016-05-23 18:04:30
 * @Last Modified by:   robin
 * @Last Modified time: 2016-05-26 15:22:48
 */
var num = 0;
outermost:
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i == 5 && j == 5) {
                break outermost;
            }
            num++;
        }
    }
console.log(num);
