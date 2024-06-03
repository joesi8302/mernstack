// mongodb
    // It is a nosql database
    // It stores data through collections and documents instead of table and rows
    // It has key value pairs in JSON format <Key, Value>
    // Does not have a set schema (unstructured) 
    // Document based - like a JSON file but it is Binary Encrypted
    // Non-Relational Database


    //UserTable ==> Users (collection)

    //Row of a table: User
    name, session1, session2, session3, session4
    David, MS, Java, Dotnet , null  // if we add new values, any blank row value needs to be filled with NULL atleast
    Suyash, MS, Java, Dotnet, DS_also

    //Sessions:
    session_name, user_id
    MS, David_1
    Java, David_1
    Dotnet, David_1


    // --> read from User + "Join it with" + Sessions => create another dataset


    // THIS IS SIMILAR TO HOW DATA IS STORED IN MONGODB
    // Documents

    //Collection Name: userDetails
    // table structure example:
{
    name = "David",
    sessions = {
        session1 : "MERNStack",
        session2 : "MERNStack",
        session3 : "MERNStack",
        session4 : "MERNStack",
    }
}
{

    name = "Suyash",
    sessions = { 
        session1 : "MERNStack",
        session2 : "MERNStack",
        session3 : "MERNStack",
        session4 : "MERNStack",
    }
}
{

    name = "Mayuri",
    learnings = { 
        session1 : "MERNStack",
        session2 : "MERNStack",
        session3 : "MERNStack",
        session4 : "MERNStack",
    }
}

// To connect to your mongodb
// We need a handler to check if the DB server is there or not
// User the conntection String to make a connection
// Get read/write access on the DB to allow us to perform manipulation
// once you are done, close the connection


// We can use a module to help us do all the other jobs listed above
// Mongoose is a module that can help us do so
    // Mongoose also can help us create schema