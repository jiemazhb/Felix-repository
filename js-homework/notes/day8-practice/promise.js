// Practice
// use both .then and async/await to write, including error handling
// fetch API from jsonplaceholder
// write a promise-based function that return a random number after a delay
// use Promise.all to write an example


function getUserData(){
    const response = fetch("https://jsonplaceholder.typicode.com//users",{method : "GET"});
    
    response.then((data) => {
        console.log(data);
        console.log(data.status);
        return data.json();   
    }).then((jsonData) => {
        
        jsonData.forEach((obj) => {
            console.log(obj.name);
            
        });
    })
    .catch((e)=>{
        console.log(`error msg : ${e}`);  
    })
}
//getUserData()


const fn = async()=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com//posts", {method: "GET"});
        
        if(!response.ok){
            throw new Error("response is not ok. so sad");
        }
        
        const data = await response.json();

        data.forEach(obj => {
            console.log(obj.title);
            
        })
        

    } catch (error) {
        throw new Error("api call error");
        
    }
   
}

//fn()


function delayFunc(delay) {

    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100); 
            resolve(randomNumber);
        }, delay);
    });
}


function promiseAll() {
    const promises = [
        delayFunc(234), 
        delayFunc(1234), 
        delayFunc(112)  
    ];

    Promise.all(promises)
        .then((results) => {
            console.log('All promises resolved:', results); 
        })
        .catch((error) => {
            console.error(`got an error ${error}`);
        });
}


promiseAll();




