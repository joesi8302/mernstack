// Destructuring - is a way to read values formArray or Object withyout initializing literals

//1. Array Destructuring

    //a. Reading values without multiple variables and indexing

    let [one, two, three, four, no_val = 0] = [11,22,33,44]

    console.log(one)
    console.log(two)
    console.log(three)
    console.log(four)
    console.log(no_val)

    //b. We can have rest for array ...
    let [a, b, ...rest_array] = [11,22,33,44,55,66,77]
    console.log(a)
    console.log(b)
    console.log(rest_array)

    //c. swapping of variable values
    let x = 9, y = 10;
    [x,y] = [y,x]
    console.log(x)
    console.log(y)

//2. Object Destructuring

    //a. single level destructuring
    // can create a a user with its own attributes and just copy the values into its own variable

    let User = {
        Standard: "Higher Secondary",
        Session: "Final Session",
        TotalMarks: "75%"
    }

    // let Session = User.Session;  // This is possible
    let {Name = "David N", Session, TotalMarks} = User 

    console.log(Name)
    console.log(Session)
    console.log(TotalMarks)

    //b. Nested Destructuring
    let Student = {
        Standard: "Higher Secondary",
        Session1: "Final Session",
        TotalMarks: "75%",
        Subject : {
            Physics: 80,
            Chem: 89,
            Language: 92
        }
    }
    let {Name1 = "Joe S", Session1, Standard, Subject : {Physics, Mathematics = 100, Language}} = Student

    console.log(Name1)
    console.log(Session1)
    console.log(Standard)
    // console.log(Subject) // If we didn't add Subject : {Physics, Mathematics = 100, Language} and just left it as Subject, it will print all values within subject
    console.log(Physics)
    console.log(Mathematics)
    console.log(Language)



  