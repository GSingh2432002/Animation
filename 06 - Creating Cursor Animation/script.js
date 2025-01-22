var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")

main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.6,
        ease: "back.out"
    })
})

image.addEventListener("mouseenter", function() {
    cursor.innerHTML="View More"
    gsap.to(cursor, {
        scale: 3,
        backgroundColor: "#ffffff8a"
    })
})

image.addEventListener("mouseleave", function() {
    cursor.innerHTML=""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff"
    })
})