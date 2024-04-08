// Callback - we pass a function as paramenter to another function to increase the resusability is terned as a
    // callback function 

// This could be a common feature enabled function can be creted and used as a callback function when in need
function PrintDetails(printMsg, param1, param2){
    console.log(printMsg ,param1, param2)
}

function GetUserInfo(firstName, lastName, printCallBk){
    printCallBk("Details are:", firstName, lastName)  //call back function executes to give desired results
}


GetUserInfo("David", "Miller", PrintDetails)  // we can use another function as a parameter that will be executed 



function GetSessionInfo(sessionName, sessionTopic, printCallBk){  // as we can see we can reuse specific funtions to give a desired results with different inputs or implementations

    printCallBk("Session Details are:", sessionName, sessionTopic)

}

GetSessionInfo("MERNStack", "Core Javascript - CallBack", PrintDetails);


//////////////////////////////////////////////////////////////////////////
// NESTING

//nested function and javascript currying (arraged raw, )

var number1 = 20;

function A(a){

    return function B(b){
        
        return function C(c){
            return function D(d){
                return a + b + c + d + number1
            }
        }
    }
}

var objA = A(5); // returns function B
var objB = objA(10); // returns function C
var objC = objB(15); // returns function D
var result = objC(20); // returns a + b + c + d + number1

console.log(result); // will give us 70


// chain execution
var result2 = A(5)(10)(15)(30);
console.log(result2); // will give us 80


// MULTITASKING IS ACHIEVED THROUGH THESE CALLBACK FUNCTIONS