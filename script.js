let url = "https://kontests.net/api/v1/all";
let response = fetch(url)
response.then((contests) => {
  return contests.json()
}).then((contests) => {
  console.log(contests)
  ihtml = ""
  for (item in contests) {
    console.log(contests[item])
    ihtml += `
         <div class="card" style="width: 20rem;">
      <img src="programming contest.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Programming Contest</h5>
        <p class="card-text">These are the details of the contest ( ${contests[item].name} ),For more information visit the link </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name : ${contests[item].name}</li>
        <li class="list-group-item">Start time : ${contests[item].start_time}</li>
        <li class="list-group-item">End time : ${contests[item].end_time}</li>
        <li class="list-group-item">Site  : ${contests[item].site}</li>
      </ul>
      <div class="card-body">
       <button class="btn"> <a href="${contests[item].url}" class="card-link">Visit Here</a> </button>
      </div>
    </div>`
  }
  cardContainer.innerHTML = ihtml
})
// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("first").onclick(() => {
//     var a = prompt("Welcome to find your contest : Write a note of your choice to remind yourself whenever you visit the site and whenever you want to check the note")
//     if (a) {
//       localStorage.setItem("note", a)
//     }

//   })

//   document.getElementById("second").onclick(() => {
//     let n = localStorage.getItem("note");
//     alert("Your note is :" + n)


//   })

//   document.getElementById("third").onclick(() => {
//     let c = confirm("Do you want to delete your note ?")
//     if (c) {
//       localStorage.removeItem("note")
//       alert(`Note Deleted Successfully !`)
//     }
//   })


// })
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("notes").onchange = function() {
    if (this.value === "write") {
      var a = prompt("Welcome to find your contest : Write a note of your choice to remind yourself whenever you visit the site and whenever you want to check the note")
      if (a) {
        localStorage.setItem("note", a)
      }
    } else if (this.value === "check") {
      let n = localStorage.getItem("note");
      alert("Your note is :" + n)
    } else if (this.value === "delete") {
      let c = confirm("Do you want to delete your note ?")
      if (c) {
        localStorage.removeItem("note")
        alert(`Note Deleted Successfully !`)
      }
    }
  }
});
