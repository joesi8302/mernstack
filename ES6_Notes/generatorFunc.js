// function name(params) {
//     return 1000
// }

// name() //invocation
// name() //invocation
// name() //invocation
// name() //invocation

function getIncrements(incrementedValue = 0){
    return incrementedValue+1  // usually this will be an API call
}


// can add a * 
// * is used with yield which holds values and will output them when you use .next()
// yield can only be used with Generator functions
function *ShowpopulationIncremement(baseValue, reduceByDeaths){
    var incrementedValue = getIncrements(incrementedValue)
    
    yield {count : baseValue + incrementedValue} // when we call for first yield 

    incrementedValue = getIncrements(incrementedValue)


    yield {count : baseValue + incrementedValue} // when we call for first yield 

    incrementedValue = getIncrements(incrementedValue)
    yield {count : baseValue + incrementedValue} // when we call for first yield 
    

    return baseValue + incrementedValue
}

let populationPointer = ShowpopulationIncremement(8000000000, 1000)  // initializing with data

console.log(populationPointer.next()) // first yield 
console.log(populationPointer.next()) // 2nd yield
console.log(populationPointer.next()) // 3rd yield
console.log(populationPointer.next()) // 3rd yield

function *StudentList(){

    let StudentList = new Set(["Jerry"])
    
    yield{StudentList: StudentList}

    StudentList.add("Rick")
    yield{StudentList: StudentList}

    StudentList.add("Morty")

    yield{StudentList: StudentList}

    StudentList.add("Joe")
}

let genStudent = StudentList();
console.log(genStudent.next())
console.log(genStudent.next())
console.log(genStudent.next())
console.log(genStudent.next())


