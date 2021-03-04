const findWaldo = function(names, found) {
  //for (let i = 0; i < names.length; i++) {
   // let name = names[i];

    names.forEach(function callback(name, index)  {
     
     if (name === "Waldo") {
       found();
       console.log(`Found ${names[index]} at index ${index}`);

     }
 })
 }


const actionWhenFound = function() {
  console.log("Found him!");
  
}
    
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);