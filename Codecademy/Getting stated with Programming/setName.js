/*
* @Author: robin
* @Date:   2016-05-27 17:44:23
* @Last Modified by:   robin
* @Last Modified time: 2016-05-27 17:46:52
*/

'use strict';
function setName(obj){
	obj.name="Robin";
	obj=new Object();
	obj.name="Greg";
}

var person=new Object();
setName(person);
console.log(person.name);