let app = document.getElementById("app");
let button = document.getElementById("swap");
let ans = true;

button.addEventListener("click", () => {
  if (ans) {
    app.classList.add("night");
    button.classList.remove("button_day");
    button.classList.add("button_night");
    ans = false;
  } else {
    app.classList.remove("night");
    button.classList.remove("button_night");
    button.classList.add("button_day");
    ans = true;
  }
});

