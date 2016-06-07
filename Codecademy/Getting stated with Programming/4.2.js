/*
 * @Author: robin
 * @Date:   2016-05-27 18:27:20
 * @Last Modified by:   robin
 * @Last Modified time: 2016-05-29 14:55:51
 */
var color = "blue";

function changeColor() {
    var anotherColor = "red";

    function swapColors() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        // 这里可以访问color和anotherCorlor和tempColor
    }
    // 这里可以访问color和anotherColor,但不能访问tempColor
    swapColors();
}
changeColor();
