h1 = document.querySelector("h1");

// h1.style.color = "red";

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);


// ***** OR *****


// function changeColor(color, delay){
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// }

// changeColor("red", 1000);

// changeColor("orange", 2000);

// changeColor("green", 3000);


// ******** OR ********


function changeColor(color, delay, nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

// CallBack Stack Hell -> Callback nesting -> used in production level websites

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});


// to prevent CallBack Stack Hell , we use promises, asynchronous , await, etc...