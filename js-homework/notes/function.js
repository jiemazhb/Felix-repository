
const arr = [234, "AAA", true];

function myFunc(args) {
    const [num, str, isTrue] = args;
    console.log(`the values are ${num} ${str} ${isTrue}`);
    
}

myFunc(arr);


const f = (args) => {
    const a = [...args];
    console.log(a);
    
}

f(arr);


const obj = {
    name : "Danny",
    age : 23,
    address : "peck rd"
}

const getInfo = (obj) => {
    const myOjb = {...obj};
    console.log(myOjb);
    
}

getInfo(obj);


function test(...args){
    console.log(args);
    
}

test(23, "ddd", false);
test(obj, 22)


class Vehicle{
    constructor(brand, model, year){
        this.model = brand;
        this.model = model;
        this.year = year;
    }

    fillUPTank(amount) {
        console.log(`${amount} dollar for gas`);
        
    }

    static status(){
        console.log("new car");
        
    }
}

const myCar = new Vehicle("nissan", "sentra", 2004);
myCar.fillUPTank(20);

Vehicle.status();



