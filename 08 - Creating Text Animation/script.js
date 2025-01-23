function breakTheText() {
  var heading = document.querySelector("h1");
  var headingText = heading.textContent;
  var splittedText = headingText.split("");
  var halfValue = Math.floor(splittedText.length / 2);
  var clutter = "";

  splittedText.forEach(function (element, index) {
    if (index < halfValue) {
      clutter += `<span class="FirstFiveWords">${element}</span>`;
    } else {
      clutter += `<span class="lastFourWords">${element}</span>`;
    }
  });
  heading.innerHTML = clutter;
}
breakTheText();

gsap.from("h1 .FirstFiveWords", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
  opacity: 0,
});

gsap.from("h1 .lastFourWords", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0,
});
