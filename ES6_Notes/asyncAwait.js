// async and await - gives us synchronized behavior of execution through executiing asynchronously
// if we create promise object inside async it will tkae it or if we dont create promise then it will wrap a promise object
// async and await: 
// Async: A way to have multi-threading in javascript like  other object oriented programming languages

// fetch user Info - call
// fetch productDetails - call
// fetch cartInfo - call

// stack1(main thread) - 200 mb(300 request/sec)
// ==> if request increases 600 request/sec

//(async)
//(await)
//stack2(thread) - 100 mb (100 request/sec)
//stack3(thread) - 100 mb (100 request/sec)
//stack4(thread) - 100 mb (100 request/sec)

function resolveAfter2Seconds(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                "Status Code": 200,
                "statusmsg" : "resolved"
            })
        },2000)
    })
}

async function asyncCall(){
    console.log("Before Await -- Blocking Thread Starts");

    await resolveAfter2Seconds()
        .then((data,err) => console.log(data))
        .catch((err) => console.log(err))

    console.log("after await")

    console.log("Before Await2 -- Blocking Thread Starts");

    await resolveAfter2Seconds()
        .then((data,err) => console.log(data))
        .catch((err) => console.log(err))

    console.log("after await2")

    console.log("Before Await3 -- Blocking Thread Starts");

    await resolveAfter2Seconds()
        .then((data,err) => console.log(data))
        .catch((err) => console.log(err))

    console.log("after await3")

    
}

asyncCall()

console.log("async Execution starts")



