// to import we used 'Require'
// to export we used 'module.exports'

// ES6 we have 'import' and 'export'


// User.js - say ALSO we have this file with data we need
//////////////////////////////////////WITHIN USER FILE///////////////////////////////////////
const User = {"New " : "UserName"}

export default User;  // Only one default export is allowed from one module/file

export let UserInfo = () => {
    return "FirstName, LastName"
}


/////////////////////////////////////END OF USER FILE///////////////////////////////////////


// Constants.js
///////////////////////////////////WITHIN CONSTANTS FILE/////////////////////////////////

export const pi = 3.14
export const xi = 9.18
export const refKey = 123
// export let UserInfo = 20000

//////////////////////////////////////////////////////////////////////////////


// OurFile.js


import User from "./User" // default import - generally the same/similar name as file doesn't use {}
import {UserInfo} from "./User"  // named import  - (named import is used to export/import multiple items to/from files)


import {pi, xi, refKey} from "./constants" // multiple named imports

import * as Constants from "./constants" // import everything as wild card in one constant // all imports

console.log(Constants.pi)
console.log(Constants.xi)

import {UserInfo as constUserInfo} from "./constants" // alias for data with the same name in different files 