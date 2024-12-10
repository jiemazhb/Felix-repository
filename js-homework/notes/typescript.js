"use strict";
const myId = 234;
const youId = "3f3fw";
console.log(`myid is ${myId} your id is ${youId}`);
class Teacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    selfIntro() {
        console.log(`my name is ${this.name} and I am a teacher`);
    }
}
class Astronaut {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    selfIntro() {
        console.log(`my name is ${this.name} and I am a Astronaut`);
    }
}
class Thug {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    selfIntro() {
        console.log(`my name is ${this.name} and I am a Thug`);
    }
}
class HumanFactory {
    getHuman(humanType, name = "unknow", age = 1) {
        if (!humanType) {
            throw new Error("there is no this type human on earth");
        }
        if (humanType.toLowerCase() === "teacher") {
            return new Teacher(name, age);
        }
        else if (humanType.toLowerCase() === "astronaut") {
            return new Astronaut(name, age);
        }
        else if (humanType.toLowerCase() === "thug") {
            return new Thug(name, age);
        }
        throw new Error("unknow human type");
    }
    static buildFactory() {
        return new HumanFactory();
    }
}
const factory = new HumanFactory();
const t = factory.getHuman("teacher", "Danny");
t.selfIntro();
const factory1 = HumanFactory.buildFactory();
const thug = factory1.getHuman("Thug", "peter");
thug.selfIntro();
