let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");


btn.addEventListener("click", function() {
    // console.log(this);       
    // console.dir(this);                     //button
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

p.addEventListener("click", function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});


h1.addEventListener("click", function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});


h3.addEventListener("click", function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});


// Use of 'this' in Event Listeners
// 7app.js:27 Let's demo it on elements
// 7app.js:15 This is a sample paragraph.
// 7app.js:10 click me!



// **************************   OR   ************************
// for redundancy


function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);

p.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);

h3.addEventListener("click", changeColor);

