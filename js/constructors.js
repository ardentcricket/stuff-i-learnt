function Bat(name) {
    this.name = name;
}

let bruce = new Bat('bruce');

Bat.prototype.fly = function () {
    console.log('I can fly high');
}

Bat.prototype.detect = function () {
    console.log('I can detect a mouse and eat it');
}

bruce.fly();
// I can fly high

bruce.detect();
// I can detect mouse and eat it