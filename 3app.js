// 1.
let para1 = document.createElement('p');
para1.innerText = "Hey, I am red!";
document.querySelector('body').append(para1);

para1.classList.add("red");

// 2.
let head = document.createElement('h3');
head.innerText = "I'm a blue h3!";
document.querySelector('body').append(head);

head.classList.add("blue");

// 3.
let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector('body').append(div);