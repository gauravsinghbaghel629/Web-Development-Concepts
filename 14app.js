let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();    // to prevent from entering /action   -> to remain on the same page
    alert("form submitted");
});