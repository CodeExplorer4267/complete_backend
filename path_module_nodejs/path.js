import path, { basename } from "path"

//Returns the last part of a path
console.log(path.basename('/hello/jsu/koi'))//output-->koi
//Returns the directories of a path
console.log(path.dirname('/hello/jsu/koi'))
//returns the file extention of a path
console.log(path.extname('/hello/jsu/koi.html'))//output--->.html

//format a path object into path string
/*var obj={dir:'a/b/c',base:'/base.js'}
console.log(path.format(obj))*/

//joins the specified path into one
console.log(path.join('/a/b/c','/join'))
//resolves the specified path into absolute path
console.log(path.resolve())
//formats a path string into path object 
console.log(path.parse('/a/b/c/base'))