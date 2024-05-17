// React

// React is a web library to create single page applications
// It is light weight
// has a very high performance due to virtual DOM(Document Object Model)
// diffing algorithm (Will be explained)
// does not use HTML templates, instead create tmeplates using jsx code
// component based architecture

// DOM - Document Object Model
// dom-mutaion or manipulation - upon interaction mutation happens and it could be slow
// Creation of DOM tree
// element rendering
// adjusting html elements 
// css - style sheet applied
// css - adjustments, font, spacing,
// color adjustments
// final rendering

// Humans look at 60/frames per second
// DOM manipulation should be done at 60 or more frames per second

// DOM manipulation example:
let header = document.getElementById("seo-logo")
header.innerText = "This is the new header"
// This is an older way of doing things and is not very optimized
// If we were to do many manipulations this way, it would slow down

// How reacts deals with manipulation:
    // Create a copy of actual html in javascript object format - virtual dom
    // Does the change in the react compoent first, check if it is already present - new virtual dom
    // using diffing algorithm to compare the new virtual dom with the actual dom. Uses DFS
    // if a change is there, just replace the node instead of re-rendering the html

// React is high performance due to this quick manipulation
    // Do not need to re-render the entire page when doing DOM manipulation / mutations just replaces that specific node instead


// React
    // do the change in react component first, check there if its already present - new virtual dom

    // using diffing algorithm, th compare the new virtual dom witha ctual dom, DFS
    // if there is a change, replace the node instead of re-rendering the html

    // react - class components and component life cycle methods => components

// Creation life cycle
    // > Constuctor - initialize
        // Example done in the HomeComponent of the ReactApp

// Update life cycle
    // 

// Destruction life cycle
    