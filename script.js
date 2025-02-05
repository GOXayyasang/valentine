
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const heartsContainer = document.getElementById("heartsContainer");

noButton.addEventListener("mouseover", () => {
  moveNoButton();
});

noButton.addEventListener("click", () => {
  moveNoButton();
  noButton.blur();
});

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

yesButton.addEventListener("click", () => {
  // Remove buttons
  yesButton.remove();
  noButton.remove();

  const message = document.createElement("h2");
  message.textContent = "Yay! Happy Valentine's Day! 💖";
  message.style.color = "#d32f2f";
  document.querySelector(".container").appendChild(message);

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);

    const balloon = document.createElement("div");
    balloon.classList.add("heart");
    balloon.innerHTML = "🎈";
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heartsContainer.appendChild(balloon);

    setTimeout(() => {
      balloon.remove();
    }, 5000);
  }, 200);

  const sound = new Audio("everytime_descendant.mp3");
  sound.loop = true;
  sound.play();
});
