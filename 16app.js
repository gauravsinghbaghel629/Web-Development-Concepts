let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your passwoord is set to ${pass.value}`);
});

// gaurav
// 13app.js:10 123456