let promiseObject1 = new Promise((res, rej) =>{
    // let userSession = Authentication_API(userInfo) // make call to server get the response and stores it

    // setTimeout( () => {
    //     res({
    //         status : "Success",
    //         value : "User Session Object1",
    //         code: 100
    //     })
    // },2000)

    setTimeout( () => {
        rej({
            status : "Failed",
            value : "User Session Object1",
            code: 400
        })
    },1000)
    
})


let promiseObject2 = new Promise((res, rej) =>{
    // let userSession = Authentication_API(userInfo) // make call to server get the response and stores it

    setTimeout( () => {
        res({
            status : "Success",
            value : "User Session Object2",
            code: 300
        })
    },2000)

    // setTimeout( () => {
    //     rej({
    //         status : "Failed",
    //         value : "User Session Object",
    //         code: 400
    //     })
    // },1000)
    
})


let promiseObject3 = new Promise((res, rej) =>{
    // let userSession = Authentication_API(userInfo) // make call to server get the response and stores it

    setTimeout( () => {
        res({
            status : "Success",
            value : "User Session Object3",
            code: 400
        })
    },2000)

    // setTimeout( () => {
    //     rej({
    //         status : "Failed",
    //         value : "User Session Object",
    //         code: 400
    //     })
    // },1000)
    
})


Promise.all([
    promiseObject1,
    promiseObject2,
    promiseObject3
]).then((data) =>{
    console.log("All passed" + JSON.stringify(data))
}).catch((data) => {
    console.log("some failed" + JSON.stringify(data))
})


Promise.allSettled([
    promiseObject1,
    promiseObject2,
    promiseObject3
]).then((data) =>{
    console.log("AllSettled passed" + JSON.stringify(data))
}).catch((data) => {
    console.log("someSettled failed" + JSON.stringify(data))
})