/*
Bee is a subclass of superclass Grub
keyword: this -> codes within body of Grub operate on some object referred to as "this"
new <=> this = Object.create(Grub.prototype)
        return this;

=> this: refer to the new grub instances
.prototype: sharing methods
*/
var Bee = function(job) {
  //call superclass
  /*
  .call() -> gives the ability to specify what keywrod this gets bound to
  new <=> this = Object.create(Grub.prototype)
          return this;
  bind the "this" inside the Grub function to the new Bee instance
  pass along the value of this as the context for another function call
  this behave like function input in different functions
  */
  Grub.call(this); // code in subclass call out to differnetiation code in superclass
  //set prototype
  /*set Bee.prototype to delegate to Grub.prototype
  Bee prototype will look up Grub prototype*/
  Bee.prototype = Object.create(Grub.prototype);
  //set constructor
  Bee.prototype.constructor = Bee;

  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

  //job property


};
