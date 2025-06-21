function saveToDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("success : data was saved");
        }
        else{
            reject("failure : weak connection"); 
        }
    });
}


// saveToDb("apna college");
// Promise {<fulfilled>: 'success : data was saved'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "success : data was saved"
// saveToDb("apna college");
// Promise {<rejected>: 'failure : weak connection'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "rejected"
// [[PromiseResult]]
// : 
// "failure : weak connection"
// 7app.js:8 Uncaught (in promise) failure : weak connection
// saveToDb("apna college");
// Promise {<fulfilled>: 'success : data was saved'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "success : data was saved"