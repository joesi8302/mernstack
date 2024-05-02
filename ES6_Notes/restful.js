// http. req, res, routes, data-encoder, query
// configurator to define public or praivete access
// we will need multiple modules to intergrate to build a web server

// express - is a web server which uses node modules to provide us the structure for web server 
    // a. lightweight
    // b. supports http/s resftul API's
    // c. supported and maintained by node js team

// Resful - A set of specifications, if followed to build a API - webserver is termed as Resful API
    // a stateless API (SEARCH UP WHAT STATELESS MEANS)
    // Supports: HTTP, JSON data 
    // way of building your API


// REST - Representational State Transfer Protocol
// 1. http/s -protocol
// 2. http - hypertext type protocol <html - hypertext markup language>
    // allows us to connect from our client to server
// 3. the information shwon is stateless - <to avoid loss of information, we save it to the server using http verbs>
// 4. http verbs - POST, GET, GetByID, POST, PUT, PATCH, DELETE (Known as CRUD Operations) (CREATE, READ, UPDATE, DELETE)
    // To Create Data - POST => whenever we want to create information
    // To Read Data - GET/GetByID => whenever we want to read information
    // To Update Data - PUT/PATCH => whenever we want to update information (put and patch updates differently)
        // Example: We have User: {UserName, Address, ID, Mobile, Session}
            // PUT - to update something specific, we need to pass all the user object information or just update everything as a whole
            // PATCH - to update something specific, we just need to address what we want to update <Address, ID> and patch will update without the need have the whole object
    // To Delete Data - DELETE => whenever we want to delete data as all or by ID 
// 5. Proper respondse with Status Code is required

// Setup using npm for express js and the API's

