let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function(){
//     console.log("button was clicked");
//     alert("button was clicked"); 
// };

function sayHello(){
    alert("Hello!!!");
}

// let btn2 = document.querySelector("button");
// console.dir(btn2);

btn.onclick = sayHello;



