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
})