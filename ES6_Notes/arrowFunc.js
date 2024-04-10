// Arrow Function or FAT Arrow Function or Lambda Expressions are ways to create functons with following benefits

//1. Creates Shorter approach to write functions

// We wll be using arrow function more often

function Add(a,b){
    return a+b
}

// User.Details(); // will execute on context of User
// Add(); // Will execute on a global context
// Add.call(User); //will execute on user context

() => {}  // Arrow Function

let Func_Arrow = (a,b) => a+b

console.log(Func_Arrow(5,9))

let Func_Arrow1 = (a,b) => {
    if(a+b >15)
        return "Greater than 15"
    else
        return "Less than 15"
}

console.log(Func_Arrow1(10,9))
console.log(Func_Arrow1(9))


// 2. Arrow Functions copies the context of parent as its own context


// copies the context of immediate parent
// so it skips one level of scope, it will take the outside scope

var User2 = {
    Name : "joe",
    Address: "aslkdjsa",

    GetUserInfo : function () {
        // this will have a scope within User2
    }
}

//Global Context
Name = 'Global asdsa'
Address = 'Global asdsadasafas'
// IT SHOULD WORK WITH GLOBAL FUNCTIONS, BUT FOR SOME REASON AS OF NOW IT DOES NOT WORK
// TRY THIS ON A WEB BROWSER CONSOLE AND IT WILL WORK

var User1 = {
    Name : "joe",
    Address: "aslkdjsa",

    GetUserInfo : () => {  // USUALLY WE DONT WANT TO HAVE THIS GRAB FROM GLOBAL, but depends on what you want. Just know why this works
        // this will have a scope OUTSIDE User1 / (in this case, global context)
        console.log(`User Info ${this.Name} and ${this.Address}`);


        var that = this; //that - copies dynamic context
        setTimeout(function () {
                console.log(`SetTimeOut User Info ${that.Name} and ${that.Address}`);// that is copy of this in parent function
        }, 2000) 


        //copies the context of immediate parent //User
        // _this = this
        setTimeout(() => {
            console.log(`SetTimeOut User Info ${this.Name} and ${this.Address}`);    //_this.Name & _this.Address
        }, 2000)
    }
}

var User = {
    Name : "Otoi",
    Address : "In Paris",


    GetUserInfo : function() {
    //    console.log(this) //User - as context
        console.log(`User Info ${this.Name} and ${this.Address}`);


        var that = this; //that - copies dynamic context
        setTimeout(function () {
                console.log(`SetTimeOut User Info ${that.Name} and ${that.Address}`);// that is copy of this in parent function
        }, 2000) 


        //copies the context of immediate parent //User
        // _this = this
        setTimeout(() => {
            console.log(`SetTimeOut User Info ${this.Name} and ${this.Address}`);    //_this.Name & _this.Address
        }, 2000) 


       }
}


User.GetUserInfo()
User1.GetUserInfo()