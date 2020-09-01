// Soal 1
console.log("... jawaban 1");
class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = false;
  }

  get anam() {
    return this.name;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

class Frog extends Animal {
  constructor(name, legs) {
    super(name);
    this.legs = legs;
  }

  jump() {
    return console.log("hop hop");
  }
}

class Ape extends Animal {
  constructor(name, legs) {
    super(name);
    this.legs = legs;
  }
  yell() {
    return console.log("Auooo");
  }
}

var sungokong = new Ape("kera sakti");
sungokong.yell();

var kodok = new Frog("buduk");
kodok.jump();

// Soal 2
console.log("... jawaban 2");
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render = () => {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    return console.log(output);
  };
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render.bind();
    setInterval(this.render, 1000);
  }
}
var clock = new Clock({ template: "h:m:s" });
clock.start();
