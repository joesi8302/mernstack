// callbacks and callbacks and callbacks - comes full of callback function
// When multiple callbacks failt it ends up in a callbeck hell situation
// signinuser

// function Authentication_API(userInfo){} // Login Signup, create userSession
// function Authorization_API(userInfo, sessionId){} // Permissions to access like admin/ normal user - roles  (these would use Authorization API)
// funtion Navigation_API(userInfo, permissions){} // what all pages user can navigate, returns first page   (these would use Navigation API)


// function LoginProcess(userId, password){
//     let userInfo = {userId, password}
    
//     // let userSession = Authentication(userInfo, Authorization)   // async

//     function Authentication(userInfo, Authorization){
//         let userSession = Authentication_API(userInfo)

//         if(userSession ==valid)
//             Authorization(userInfo,userSession)
//         else
//             Authentication(userInfo, Authorization)  //if server fails we'll have many recursive calls to authenticate

//     }

//     function Authorization(userInfo, userSession, Navigation){
//         let permissions = Authorization_API(userInfo, userSession)  // async

//         let loginScreen = Navigation_API(userInfo, permissions)  // async

//     }

//     // let permissions = Authorization(userInfo, userSession)  // async

//     // let loginScreen = Navigation(userInfo, permissions)  // async

//     let displayScreen = Navigation(loginScreen) //async
    
// }

// callback hell: if we fall in a loop of failures it will take us into callback hell  (within the if else statement)
// not a proper handling of this response
// mandatory to take immediate action after we get a response

// Promise - an object which completes some async/sync job in its exection
    // but has the capability to hold, manipulate and return the response when asked 

let promiseObject = new Promise((res, rej) =>{
    // let userSession = Authentication_API(userInfo) // make call to server get the response and stores it

    setTimeout( () => {
        res({
            status : "Success",
            value : "User Session Object",
            code: 200
        })
    },2000)

    setTimeout( () => {
        rej({
            status : "Failed",
            value : "User Session Object",
            code: 400
        })
    },1000)
    
})

console.log(promiseObject)

//response is return upon being asked ==> promiseObject.then.then.catch
// .then => returns resolve case  // the first value in the promise(res)  new Promise((res, rej))
// .catch => returns rejected cases  // the 2nd value in the promist(rej)   new Promise((res, rej))

myPromise = promiseObject.then((response, error) => {
    console.log("Execution is successful " + JSON.stringify(response))
}).catch((response, error) => {
    console.log("Execution is failed " + JSON.stringify(response))
})



console.log(myPromise)

console.log("Promise Completed!!!");



// create a promise object with name student on it after 2 seconds student is pass (resolved case)
// and set status stating learnt es6
// then for rejected case set that status - i am progressing