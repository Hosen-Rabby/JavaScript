// ==== What are the different scopes in JavaScript ==== 

// Global Scope/Variable: Any variable call out side of a function called a global variable
// all global variable are actually property of window object.

window.moo = 1

// Locol Scope Variable : Inside a function, not accesseble from outside.

function doo(a){
    mo = 1;
    b = mo + a;
    return b;
}

console.log(doo(4));

// block scope variable: inside {..} is block spobe variable.
// it behaves differently with var, let, const.


// * for var, it runs

{
    var c = 'Block';
}

console.log(c);

// * for let, returns error.

{
    let d = 'Block';
}

console.log(d);

// it will work for-

{
    let e = 'Block';
    {
        console.log(e)
    }
}

// * for const, we can't reassign-

{
    const f = 'Block';
    {
        console.log(f);
    }
    f = 'moo';
}


//In some cases, if a variable not inside a block still it will behave like inside a block

for (let g = 0; g < 5; g++){
    console.log(i);
}

console.log(g);

// here, let i = 0; is not inside a block but it assumes that it si inside a block, so for comment of outside of block it will not print.

// * if we use var ,it will print

for (var h = 0; h < 5; h++){
    console.log(i);
}

console.log(h);

// * we can't use const, cause then the loop won't work.