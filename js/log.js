console.log("Coucou")

let username = localStorage.getItem("username");

if(username && username != ""){
  document.getElementById("welcomeBack").innerText = "Salut " + username + " Bonne exploration !" ;
}else{
  username = prompt("Hello ! What's your name ?");
  localStorage.setItem("username", username);
  alert("Welcome " + username);
}