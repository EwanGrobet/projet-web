console.log("coucou les loulous");

/*hamburger for smartphone*/
function menu() {
    var x = document.getElementById("page");
    if (x.style.display === "inline") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
