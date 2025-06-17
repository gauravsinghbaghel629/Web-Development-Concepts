function hello(){
    console.log("insode hello func");
    console.log("hello");
}

function demo(){
    console.log("calling hello func");
    hello();
}

console.log("calling demo func");
demo();
console.log("done, bye!");

// calling demo func
// 1app.js:7 calling hello func
// 1app.js:2 insode hello func
// 1app.js:3 hello
// 1app.js:13 done, bye!