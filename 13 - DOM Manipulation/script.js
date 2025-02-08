// Selection of an Element
    // var heading = document.querySelector("h1");
    // console.log(heading);

// Changing HTML
    // var heading = document.querySelector("h1");
    // heading.innerHTML = "Helloo there! How are you?";

// Changing CSS
    // var heading = document.querySelector("h1");
    // heading.innerHTML = "Color changed!"
    // heading.style.color = "lightblue"
    // heading.style.backgroundColor = "black"

// Event Listener
    // var heading = document.querySelector("h1");
    // heading.addEventListener("mouseenter", function() {
    //     heading.style.backgroundColor = "brown"
    //     heading.style.color = "lightblue"
    // })
    // heading.addEventListener("mouseleave", function() {
    //     heading.style.backgroundColor = "black"
    //     heading.style.color = "white"
    // })

// Short Project 1:-
    // var bulb = document.querySelector("#bulb");
    // var btn = document.querySelector("button");

    // var flag = 0;

    // btn.addEventListener("click", function() {
    //     if (flag == 0) {
    //         bulb.style.background = "yellow";
    //         flag = 1;
    //     }
    //     else {
    //         bulb.style.background = "transparent"
    //         flag = 0;
    //     }
    // })

// Selecting all same element in one go:-
var heading = document.querySelectorAll("h1");

heading.forEach(function(heading) {
    heading.style.color = "lightgreen"
})