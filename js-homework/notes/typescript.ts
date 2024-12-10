type Id = number | string;

const myId : Id = 234;
const youId : Id = "3f3fw";

console.log(`myid is ${myId} your id is ${youId}`);

// factory design patter using typescript

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


// =======================
class Professor extends Teacher{

    selfIntro(): void {
        console.log(`my name is ${this.name} and I am a Profssor`);
    }

    showPhDCertificate(){
        console.log("here is my PhD degree");
        
    }
}

const pro = new Professor("crook", 54);

pro.showPhDCertificate();
pro.selfIntro();

//========================

type Career = Teacher | Thug;

const professional : Career = new Teacher("zachary", 12);
professional.selfIntro();


type Func = (() => void) | ((args : number) => number);

const f : Func = () => {
    console.log("without parameter");  
}

f();