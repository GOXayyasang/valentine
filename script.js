// Get elements
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const heartsContainer = document.getElementById("heartsContainer");

// Move the "No" button on hover or touch
noButton.addEventListener("mouseover", () => {
  moveNoButton();
});

noButton.addEventListener("click", () => {
  moveNoButton();
  noButton.blur(); // Remove focus after click
});

// Function to move the "No" button
function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

// Create hearts when "Yes" is clicked
yesButton.addEventListener("click", () => {
  // Remove buttons
  yesButton.remove();
  noButton.remove();

  // Display message
  const message = document.createElement("h2");
  message.textContent = "Yay! Happy Valentine's Day! 💖";
  message.style.color = "#d32f2f";
  document.querySelector(".container").appendChild(message);

  // Create hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heartsContainer.appendChild(heart);

    // Remove hearts after animation
    setTimeout(() => {
      heart.remove();
    }, 5000);

    const balloon = document.createElement("div");
    balloon.classList.add("heart");
    balloon.innerHTML = "🎈";
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heartsContainer.appendChild(balloon);

    // Remove balloons after animation
    setTimeout(() => {
      balloon.remove();
    }, 5000);
  }, 200);

  // Play sound
  const sound = new Audio("everytime_descendant.mp3"); // Path to your MP3 file
  sound.loop = true; // This will make the audio play infinitely
  sound.play();
});
