let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("code = ", event.code); // ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRIght(R)
    
    if(event.code == "KeyU"){
        console.log("character moves up");
    }
    else if(event.code == "KeyD"){
        console.log("character moves down");
    }
    else if(event.code == "KeyL"){
        console.log("character moves left");
    }
    else if(event.code == "KeyR"){
        console.log("character moves right");
    }
});


// code =  KeyU
// 10app.js:7 character moves up
// 10app.js:4 code =  KeyL 
// 10app.js:13 character moves left
// 10app.js:4 code =  KeyR
// 10app.js:16 character moves right
// 10app.js:4 code =  KeyD
// 10app.js:10 character moves down