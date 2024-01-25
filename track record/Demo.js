// modern js modules and tooling 

// exporting and importing es6 modules 
// in js ,  every file is considered as a module 
// and you can not use functions and variables of one file/moule in another 
// file directly for that we need to export it ,

// product.js 
console.log()

// script.js
import "./product.js" // we just running this file but not using any value from this 
// ./ -> menas same directory
console.log("importing module")

// it saying canot use import statement ouside the module 
// which says us to add type="module"
// in this lline of index.html 
{/* <script src="script.js"></script> */}
// like 
{/* <script type="module"  src="script.js"></script> */}
// then it will consider it as an module 
// and also then we can use import and export 
