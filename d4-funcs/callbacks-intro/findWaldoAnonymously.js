const findWaldo = function(names, found) {
  

    names.forEach(function callback(name, index)  {
     
     if (name === "Waldo") {
       found();
       console.log(`Found ${names[index]} at index ${index}`);
       console.log("Waldo is located at:", index);
     }
 })
 }
 findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});