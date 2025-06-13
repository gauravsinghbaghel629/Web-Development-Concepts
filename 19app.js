let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
});


// a
// 16app.js:5 ab
// 16app.js:5 abc
// 16app.js:5 abcd
// 16app.js:5 abcde
// 16app.js:5 abcd
// 16app.js:5 abc
// 16app.js:5 ab
// 16app.js:5 a
// 16app.js:5 
// 16app.js:5 g
// 16app.js:5 ga
// 16app.js:5 gau
// 16app.js:5 gaur
// 16app.js:5 gaura
// 16app.js:5 gaurav
// 16app.js:5 gaurav 
// 16app.js:5 gaurav i
// 16app.js:5 gaurav is
// 16app.js:5 gaurav is 
// 16app.js:5 gaurav is a
// 16app.js:5 gaurav is a 
// 16app.js:5 gaurav is a n
// 16app.js:5 gaurav is a na
// 16app.js:5 gaurav is a nau
// 16app.js:5 gaurav is a naug
// 16app.js:5 gaurav is a naugh
// 16app.js:5 gaurav is a naught
// 16app.js:5 gaurav is a naughty
// 16app.js:5 gaurav is a naughty 
// 16app.js:5 gaurav is a naughty b
// 16app.js:5 gaurav is a naughty bo
// 16app.js:5 gaurav is a naughty boy
// 16app.js:5 gaurav is a naughty boy.