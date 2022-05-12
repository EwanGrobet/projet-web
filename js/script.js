console.log("coucou les loulous");

/* texte animation*/ 
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

/*hamburger for smartphone*/
function menu() {
    var x = document.getElementById("page");
    if (x.style.display === "inline") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
