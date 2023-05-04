$(window).on("load", init);
tombosites();
function init() {
    footer();
}
function footer() {
    $("footer p")
        .html("Gárdos Lóránt")
        .css({ textAlign: "center", fontSize: "20px" });
}

function tombosites() {
    var tomb = [];
  
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener("mouseover", function(event) {
        event.target.classList.add("kiemel");
      });
      images[i].addEventListener("mouseout", function(event) {
        event.target.classList.remove("kiemel");
      });
      images[i].addEventListener("click", function(event) {
        tomb.push(event.target.src);
        console.log("tombhoz adva: " + event.target.src);
      });
    }
  }

  