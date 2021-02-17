// add and remove class -- similar to hide
// Include for past/pres./future
// grab current hour from moment.js

// Getting the date to show up - google
// Use moment.js for the time
// needed for the current date
var currentHour = moment().hour();
var militaryHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var saveBtn = document.querySelectorAll(".saveBtn");
console.log(currentHour);


document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do YYYY");
for (var i = 0; i < 9; i++) {
  if (currentHour === militaryHour[i]) {
    console.log(i);
    document.getElementById(i).classList.add("present");
  }
  if (currentHour > militaryHour[i]) {
    console.log(i);
    document.getElementById(i).classList.add("past");
  }
  if (currentHour < militaryHour[i]) {
    console.log(i);
    document.getElementById(i).classList.add("future");
  }


  // accessing key name according to id + repop. data from local storage
  if(localStorage.getItem(i)){
      document.getElementById(i).value = localStorage.getItem(i);
  }

  saveBtn[i].addEventListener("click",function(){
    var id = this.getAttribute("data-id");
    var text = document.getElementById(id).value;
     localStorage.setItem(id,text);
    console.log(text);
})
}
// saving the textareas to local storage and redisplaying when page is refreshed
