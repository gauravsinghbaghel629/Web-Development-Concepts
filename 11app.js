let btn = document.querySelector("button");

btn.addEventListener("click", function(event) {   // by default -> event
    console.log(event);                            //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    console.log("button clicked");                  //button clicked
});


let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
    console.log(event);
    console.log("key was pressed!");
});

// similarly
inp.addEventListener("keyup", function() {
    console.log("key was released!");
});

// KeyboardEvent {isTrusted: true, key: 'b', code: 'KeyB', location: 0, ctrlKey: false, …}
// 8app.js:13 key was pressed!
// 8app.js:18 key was released!



// ************* Event ->   1. code    &&     2. key(on screen) 


// KeyboardEvent {isTrusted: true, key: ';', code: 'Semicolon', location: 0, ctrlKey: false, …}isTrusted: truealtKey: falsebubbles: truecancelBubble: falsecancelable: truecharCode: 0code: "Semicolon"composed: truectrlKey: falsecurrentTarget: nulldefaultPrevented: falsedetail: 0eventPhase: 0isComposing: falsekey: ";"keyCode: 186location: 0metaKey: falserepeat: falsereturnValue: trueshiftKey: falsesourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}srcElement: inputtarget: inputtimeStamp: 13130.299999952316type: "keydown"view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}which: 186[[Prototype]]: KeyboardEvent
// 8app.js:13 key was pressed!
// 8app.js:18 key was released!