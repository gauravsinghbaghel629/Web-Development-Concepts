// Qs.1>>

let h = document.querySelector("h1");
let p = document.querySelector("p");

h.addEventListener("mouseout", function() {
    console.log("mouse is out of the heading1");
});

p.addEventListener("mouseout", function() {
    console.log("mouse is out of the paragraph");
});


// Qs.2>>
let inp = document.querySelector("#input1");


inp.addEventListener("keypress", function() {
    console.log("key is pressed in input 1");
});


// Qs.3>>

let box = document.querySelector("#sc3");

window.addEventListener("scroll", function(){
    console.log("The window is scrolled");
});

box.addEventListener("scroll", function(){
    console.log("The div1 is scrolled");
});


// Qs.4   

let i = document.querySelector("img");

i.addEventListener("load", function(){
    console.log("The image is loaded");
});