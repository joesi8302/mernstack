// Stack size is very limited it gets blown up if we do not control the iterations

function foo(params){
    throw "This is executed on Stack"
}

function bar(params){
    foo()
}

function baz(params){
    bar()
}

// baz()

// Stack execution order: foo, bar, baz

// blow up / break the stack - call stack size exceeding

function User(params){
    User()
}

User()