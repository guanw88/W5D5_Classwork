class Clock {

  constructor() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.mins = this.date.getMinutes();
    this.secs = this.date.getSeconds();
    this.printTime(this.hours, this.mins, this.secs);
  }

  printTime() {
    let hrStr = ("0" + this.hours).slice(-2);
    let minStr = ("0" + this.mins).slice(-2);
    let secStr = ("0" + this.secs).slice(-2);

    console.log(`${hrStr}:${minStr}:${secStr}`);
  }

}

const clock = new Clock();
