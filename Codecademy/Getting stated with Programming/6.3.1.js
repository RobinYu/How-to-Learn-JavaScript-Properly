function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function(){
  return this.property;
};

function SubType() {
  this.subproperty = false;

//继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function(){
  return this.subproperty;
};

var instance = new SubType();
console.log(instance.getSuperValue());
