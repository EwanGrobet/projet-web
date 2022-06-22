console.log("Coucou")

let username = localStorage.getItem("username");

if (username && username != "") {
  document.getElementById("welcomeBack").innerText = "Salut " + username + " Bonne exploration !";
} else {
  username = prompt("Salut ! Qu'elle est ton nom ?");
  localStorage.setItem("username", username);
  alert("Bienvenue " + username);
}