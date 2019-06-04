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

// When your instance keeps the modification for the 
// for that instance alone and does not propogate it
// to other instances

//constructor function
function Human(name, age) {
    this.name = name,
    this.age = age,
    this.friends = ["blah", "blah1"]
}
    
// Instance generation
var person1 = new Human("fudges", 23)
var person2 = new Human("brownies", 24)

// Check yo friends
console.log(person1.friends)
console.log(person2.friends)

// got new friends now
person2.friends.push("ice cream")
console.log(person2.freinds)
