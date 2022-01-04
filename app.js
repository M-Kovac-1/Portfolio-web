// Wrap every letter in a span
let textWrapper = document.querySelector(".magic");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".magic .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".magic",
    opacity: 0,
    duration: Infinity,
    easing: "easeOutExpo",
    delay: 1000,
  });

// NAVBAR HIDING

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    return document.querySelector(".navbar").classList.add("hide");
  }
  return document.querySelector(".navbar").classList.remove("hide");
});

let a = document.getElementById("link");

a.addEventListener("click", () => {
  scrollTo(".project-section");
});
