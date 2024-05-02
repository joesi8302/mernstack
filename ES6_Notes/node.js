// Node - JS
// A runtime environment for JS
// Allows us to use JS outside a browser/server
// uses google chrome's V8 Engine
// It is non-blocking, single-threaded
// Scalable network applications
// Servers, API, file system interactions and all other things that we can think of by development framework


// Non Blocking - Approach

// say we have 3 tasks

// task1: 30min
// task2: 20min
// task3: 10min

// Approach 1  ==> Blocking Approach
// task1: completes in 30min ; task2 then starts
// task2: completes in 20 min ; task3 starts
// task3: completes in 10 min ; with total time of 60min


// Apporach 2 ==> Non Blocking Approach  (using event loop for registered API's, callbacks)
// All task will be doine at the same time.
// Max time to complete will depend on the longest task
