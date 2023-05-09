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
        var klikkep = event.target;
        var ujkep = document.createElement("img");
        ujkep.src = klikkep.src;
        document.getElementById("csonak").appendChild(ujkep);
        tomb.push(klikkep.src);
        console.log("tombhoz adva: " + klikkep.src);
        if (tomb.includes("kepek/farkas.png") && tomb.includes("kepek/kecske2.png")) {
          alert("A farkas es a kecske nem lehet egyedul!");
        } else if (tomb.includes("kepek/kecske2.png") && tomb.includes("kepek/kaposzta.png")) {
          alert("Nem lehet a kecske, es kaposzta egyedul");
      }
      });
    }
  }
  $("#bal img").click(function() {
    $(this).remove();
});


  