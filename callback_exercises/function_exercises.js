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

const clock = new Clock();
