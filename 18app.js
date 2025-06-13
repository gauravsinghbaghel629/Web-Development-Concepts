let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
});


user.addEventListener("change", function() {
    console.log("change event");
    console.log("final value = ", this.value);
});


user.addEventListener("input", function() {
    console.log("input event");
    console.log("final value = ", this.value);
});

// input event
// 15app.js:16 final value =  g
// 15app.js:15 input event
// 15app.js:16 final value =  ga
// 15app.js:15 input event
// 15app.js:16 final value =  gau
// 15app.js:15 input event
// 15app.js:16 final value =  gaur
// 15app.js:15 input event
// 15app.js:16 final value =  gaura
// 15app.js:15 input event
// 15app.js:16 final value =  gaurav
// 15app.js:9 change event
// 15app.js:10 final value =  gaurav
