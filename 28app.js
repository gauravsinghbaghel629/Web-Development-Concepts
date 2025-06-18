function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

// go to inspect
// click on sources
// choose a breakingpoint
// check breakpoints and call stack
// keep on clicking (down arrow) 


// *************** for debugging ****************