// Placeholder for future visitor counter + contact form logic
console.log("Cloud resume portfolio loaded");
// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple background orbit that follows cursor
const orbit = document.querySelector(".background-orbit");

window.addEventListener("pointermove", (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  orbit.style.backgroundPosition = `${x}% ${y}%`;
});
