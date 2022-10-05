const COLORS_ARRAY = [
  "red",
  "yellow",
  "magenta",
  "cyan",
  "blue",
  "black",
  "gray",
  "teal",
  "green",
  "purple",
  "violet",
];

function generate() {
  const random = COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)];
  const li = document.createElement("li");
  li.textContent = random;
  li.style.backgroundColor = random;
  document.getElementById("color-list").appendChild(li);
  return random;
}
console.log(generate());

const colorbtn = document.getElementById("generate-color");
colorbtn.addEventListener("click", generate);

function reset() {
  const ul = document.getElementById("color-list");
  let child = ul.lastElementChild;
  while (child) {
    ul.removeChild(child);
    child = ul.lastElementChild;
  }
}
const resetbtn = (document.getElementById("reset").onclick = () => {
  reset();
});

// ===== CHALLENGE =====
// 1. Create A Function (generate)
// Function should get a random color from the COLORS_ARRAY
// Create a li element
// Add the color name to the li text
//   Set the background color of the li to the random color
// Append the li to the ul

// 2. Create Function (reset)
// Should remove all li children from the ul.
// Should set background color to white.
