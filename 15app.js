let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.innerText);
    console.log(inp.value);
});

// input
// 12app.js:8 
// 12app.js:9 cdcdcd