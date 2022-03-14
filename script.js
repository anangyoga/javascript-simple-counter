// buttons and counter text
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

// initialize the count variable
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const classIncluded = e.currentTarget.classList;

    if (classIncluded.contains("increase")) {
      count++;
    } else if (classIncluded.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    count >= 0 ? (counter.style.color = "black") : (counter.style.color = "#6d1515");

    counter.textContent = count;
  });
});
