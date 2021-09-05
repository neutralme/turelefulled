let form = document.getElementById('form');
form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (document.getElementById('name').value.length != 0) {
    firebase.database().ref("Names").push({
      name: document.getElementById('name').value,
    });
    setTimeout(function() {
      alert("Thanks " + document.getElementById('name').value + " for your submission.")
    }, 1000)
  }
});
if (localStorage.getItem("click") === "true") {
  document.body.innerHTML = "  <div class='temp'><h3>Looks like someone rickrolled you. 🌜 <div class='form'><form class='container' id='form'><input type='text' placeholder='Enter Your Name' id='name'><br><button type='submit'>SUBMIT</button></form></div></h3></div><br><h1 id='face'>:)</h1>"
}
try{
document.getElementById('face').onclick = function() {
  var script = document.createElement('script');
  script.src = "//cdn.jsdelivr.net/npm/eruda";
  document.body.appendChild(script);
  script.onload = function() {
    eruda.init();
  }
}} catch(err) {
  console.warn(err)
}