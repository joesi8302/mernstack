let express = require("express") // this does not work since we do not have the package

// yarn - explicitley install and then use
// npm - comes with nodejs, does similar funtions as yarn
    // able to install packages but not needed to do explicitley

// to instal packages, we need to initialize npm in our directory
    // to do that use: npm init

// npm init => package.json will be created (contains meta data of the project)

// installing modules: npm i <module_name>

// dependencies - will be installed locally and in prod server
// dev-dependencies - will be installed locally but not in prod server
    // npm i express -D will instll these modules as a devDependency
// after changing the package.json and adding your dependencies
    // we can do "npm i" to install those that are mentioned in the file


// to uninstall npm packages
    // Can do: npm uninstall <module_name>


//cyclic dependencies - when we are not able to resolve the dependencioes of dependencies
// package.lock.json - helps us avoid such problems

