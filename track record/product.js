console.log("Exporting Module")

export let order = function(buyer,item){
    console.log(`${buyer} ordered this ${item}`)
}// this is called named export bcz the name of the variable 
// has to be same and we also recive that on the other file by the same name 

// exporting multiple values 

let laptopPrice = 50000;
let quantity = 23;
// so if we want to export multiple things together  then we can do it in object format  

// we can also change the names of imports here 
export {laptopPrice,quantity as quan}