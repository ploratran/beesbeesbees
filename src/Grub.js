/*
Grub will act as the superclass for all other types of bees.
@age, @color, @food: properties that are different across different bees
no eat() inside Grub class because it would create a lot of function objects for eat
*/
var Grub = function(age, color, food) {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

/*
eat properties that all bees appear to need (to eat)
Why .prototype? prototype chains
eat() property: share across all instances of the beess
.prototype property of the constructor function
*/
Grub.prototype.eat = function(){
  //return this.food;
};
