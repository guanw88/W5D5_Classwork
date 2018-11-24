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

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function absurdBubbleSort(arr, sortCompletionCallback) {

  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, function (res) {
    if (res === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
      if (isGreaterThan) {
        let val = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = val;
        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  } else if (i === (arr.length - 1)) {
    console.log(arr);
    outerBubbleSortLoop(madeAnySwaps);
  }
}

absurdBubbleSort([2,3], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

absurdBubbleSort([3, 2, 5, 6, 1, 4], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
