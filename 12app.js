let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
    console.log("key = ", event.key);
    console.log("code = ", event.code);
    console.log("key was pressed");
});


// key =  a
// 9app.js:5 code =  KeyA
// 9app.js:6 key was pressed
// 9app.js:4 key =  z
// 9app.js:5 code =  KeyZ
// 9app.js:6 key was pressed
// 9app.js:4 key =  Enter
// 9app.js:5 code =  Enter
// 9app.js:6 key was pressed
// 9app.js:4 key =  Alt
// 9app.js:5 code =  AltLeft
// 9app.js:6 key was pressed
// 9app.js:4 key =  Alt
// 9app.js:5 code =  AltLeft
// 9app.js:6 key was pressed
// 9app.js:4 key =  /
// 9app.js:5 code =  Slash
// 9app.js:6 key was pressed
// 9app.js:4 key =  Shift
// 9app.js:5 code =  ShiftRight
// 9app.js:6 key was pressed
// 9app.js:4 key =  ?
// 9app.js:5 code =  Slash
// 9app.js:6 key was pressed
// 9app.js:4 key =  Control
// 9app.js:5 code =  ControlRight
// 9app.js:6 key was pressed