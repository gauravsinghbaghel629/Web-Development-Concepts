let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(form);

    let user = this.elements[0];  //form.elements[0];               //document.querySelector("#user");
    let pass = this.elements[1];  //form.elements[1];               //document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your passwoord is set to ${pass.value}`);
});

// 14app.js:10 gaurav
// 14app.js:11 1234