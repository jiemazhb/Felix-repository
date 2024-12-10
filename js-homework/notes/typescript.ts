type id = number | string;

const myId : id = 234;
const youId : id = "3f3fw";

console.log(`myid is ${myId} your id is ${youId}`);

interface Human {
    name : string;
    age : number
    selfIntro(): void;
}

class Teacher implements Human {
    name : string;
    age : number
    constructor(name : string , age : number){
        this.name = name;
        this.age = age;
    }
    selfIntro(): void {
        console.log(`my name is ${this.name} and I am a teacher`);
    }
}

class Astronaut implements Human {
    name : string;
    age : number
    constructor(name : string , age : number){
        this.name = name;
        this.age = age;
    }
    selfIntro(): void {
        console.log(`my name is ${this.name} and I am a Astronaut`);
    }
}

class Thug implements Human {
    name : string;
    age : number
    constructor(name : string , age : number){
        this.name = name;
        this.age = age;
    }
    selfIntro(): void {
        console.log(`my name is ${this.name} and I am a Thug`);
    }
}

class HumanFactory{

    getHuman(humanType : string, name : string = "unknow", age : number = 1): Human{
        if(!humanType){
            throw new Error("there is no this type human on earth");
        }

        if(humanType.toLowerCase() === "teacher"){
            return new Teacher(name, age);
        }else if(humanType.toLowerCase() === "astronaut"){
            return new Astronaut(name, age);
        }else if(humanType.toLowerCase() === "thug"){
            return new Thug(name, age);
        }
        
        throw new Error("unknow human type"); 
    }

    static buildFactory() : HumanFactory{
        return new HumanFactory();
    }
}

const factory = new HumanFactory();
const t = factory.getHuman("teacher", "Danny");
t.selfIntro();

const factory1 = HumanFactory.buildFactory();
const thug = factory1.getHuman("Thug", "peter");
thug.selfIntro();

