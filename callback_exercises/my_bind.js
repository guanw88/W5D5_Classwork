// Write your own myBind(context) method. Add it to Function.prototype. You'll want to:
// Return an arrow function.
// The arrow function captures this and context.
// In the anonymous function, call Function.prototype.apply on this, passing the context.

// Assume the method you're binding doesn't take any arguments; we'll see tomorrow how to use the rest and spread operators to fix this.

Function.prototype.myBind = function(context) {
  // context is object; this is method
  // we want myBind to return a function object equal to context.this

  // we can try return (context) => this.apply(context); but this will overwrite the context with undefined method in the function call

  // so we have to do this
  return () => this.apply(context);

};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"

// when you call myBoundTurnOn(), we are calling turnOn.myBind(lamp)()
// in the correct version, this returns a function call lamp.turnOn()

// in the incorrect version, this returns a function call lamp.turnOn(context), but context is now an undefined variable, so it does not work
