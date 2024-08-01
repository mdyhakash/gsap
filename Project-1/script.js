var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
var imgDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});

imgDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "View more"
  gsap.to(cursor, {
    scale: 4,
  });
});
imgDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = ""
  gsap.to(cursor, {
    scale: 1,
  });
});
