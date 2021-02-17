// add and remove class -- similar to hide 
// Include for past/pres./future
// grab current hour from moment.js

// Getting the date to show up - google
// Use moment.js for the time 
    // needed for the current date 
var currentHour = moment().hour();
var militaryHour = [9,10,11,12,13,14,15,16,17];
console.log(currentHour);
 
for (var i=0; i<9; i++){
    if (currentHour=== militaryHour[i]){
         console.log(i);
        document.getElementById(i).classList.add("present")
    }
    if (currentHour> militaryHour[i]){
        console.log(i);
       document.getElementById(i).classList.add("past")
   }
   if (currentHour< militaryHour[i]){
    console.log(i);
   document.getElementById(i).classList.add("future")
}
 
}
// saving the textareas to local storage and redisplaying when page is refreshed