class Clock {

  constructor() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.mins = this.date.getMinutes();
    this.secs = this.date.getSeconds();
    this.printTime(this.hours, this.mins, this.secs);
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    let hrStr = ("0" + this.hours).slice(-2);
    let minStr = ("0" + this.mins).slice(-2);
    let secStr = ("0" + this.secs).slice(-2);

    console.log(`${hrStr}:${minStr}:${secStr}`);
  }

  countSeconds(sec) {
    if (sec + 1 === 60) {
      return 0;
    } else {
      return sec + 1;
    }
  }

  countMinutes(min) {
    if (min + 1 === 60) {
      return 0;
    } else {
      return min + 1;
    }
  }

  countHours(hour) {
    if (hour + 1 === 24) {
      return 0;
    } else {
      return hour + 1;
    }
  }

  _tick() {
    console.clear();
    this.secs = this.countSeconds(this.secs);
    if (this.secs === 0) {
      this.mins = this.countMinutes(this.mins);
    }
    if (this.mins === 0) {
      this.hours = this.countHours(this.hours);
    }
    this.printTime();
  }

}

// const clock = new Clock();

// Let's write a function that will read several numbers, one after another, and sum up the total. After each number, let's print out the partial sums along the way, and pass the total sum to a callback when done.
//
// First off, use readline.createInterface to create a global variable, reader. Use process.stdin/process.stdout like I do in my examples. Make sure to only use one instance of a reader and only close it once.

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Next, write a function, addNumbers(sum, numsLeft, completionCallback):

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Input a number\n', function (res) {
      sum += parseInt(res);
      console.log(`Partial sum is ${sum}`);
      return addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// If numsLeft > 0, then:
// Prompt the user for a number (use reader).
// Pass a callback that:
// Uses parseInt to parse the input.
// Increment the sum and console.log it.
// Recursively calls addNumbers again, passing in:
// the increased sum,
// the decreased numsLeft,
// and the same completionCallback.
// If numsLeft === 0, call completionCallback(sum) so that the total sum can be used.
// To test, try out:
//
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
// This should prompt for three numbers, printing out the partial sums and then the final, total sum.
