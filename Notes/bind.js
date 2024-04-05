// Call and apply can help us to set up the context byu immediately executing the function
// Whenever we need to have some delay for execution
    // Like a button


console.log("Print Starts")

setTimeout(clbkFunc, 1000) // will execute clbkfunc after 1 second but will not hold other executions

console.log("Print Ends")

function clbkFunc(params){
    console.log("Prints after 1 second")
}


var User = {
    Name: "Otoi",
    Address : "In France",
    GetUserInfo : function (params){
        console.log(this) // this shows that its grabbing from the User context
        console.log( `User Info: ${this.Name} and Address: ${this.Address}`)

        setTimeout(function (){
            console.log(this) // this - the context gets updated with Timeout, which does not have Name and Address in it
            console.log(`SetTimeOut User info ${this.Name} and ${this.Address}`); // this loses context of user and is replaced with Timeout
        },2000)
    }
}

console.log(User.GetUserInfo()) // GetUserInfo gets the context (this) as User itself, as it is executing over User


////////////////////////////////////////////////////////////
// NOW WITH BIND 
// THIS KEEPS THE CONEXT OF 
var User = {
    Name: "Otoi",
    Address : "In France",
    GetUserInfo : function (params){
        console.log(this) 
        console.log( `User Info: ${this.Name} and Address: ${this.Address}`)

        setTimeout(function (){
            console.log(this) 
            console.log(`SetTimeOut User info ${this.Name} and ${this.Address}`); 
        }.bind(User),2000) // bind sets the context back to User after 2 second and returns the function as it is, unlike call and apply which executes immedately
    }
}

console.log(User.GetUserInfo())



// HE PASTED IN SOME EXAMPLE. GOING TO NEED TO GRAB FROM GIT 
// Notes On example:
// Did the example on chrome
// added a button
// NOTES ON GOOGLE DOC / Image