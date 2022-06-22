console.log("coucou les loulous");

/* texte animation*/
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    /*déclenche les classes*/
    targets: '.ml3 .letter',
    /*l'opacity commence a 0%fini a 100%*/
    opacity: [0, 1],
    /*accélération de l'animation (faible)*/
    easing: "easeInOutQuad",
    /*Temps de l'animation*/
    duration: 2250,
    /*Temps avant que l'animation se lance*/
    delay: (el, i) => 150 * (i + 1)
  }).add({
    targets: '.ml3',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

/*hamburger for smartphone*/
function menu() {
  var x = document.getElementById("page");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
