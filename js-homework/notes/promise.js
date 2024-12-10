const myPro = new Promise((resolve, reject) => {
    const res = false;

    if(res){
        resolve("successfully");
    }else{
        reject("faild by Danny");
    }
})

myPro.then((data) => {
    console.log(data);
    
}).catch((e) => {
    console.log(e);
    
})