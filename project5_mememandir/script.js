// Write code below 💖
// Array of meme image URLs
const memeArray = [
  "meme1.jpeg",
  "meme2.jpeg",
  "meme3.jpeg",
  "meme4.jpeg"
];

// Array of meme captions
const captionArray = [
  "When you finally learn JavaScript!",
  "Code like nobody's watching.",
  "Debugging: Being the detective in your code.",
  "When the code works on the first try!"
];

// Select the image element by its id and store in a variable
const memeImage = document.getElementById("random-meme");

// Select the caption element by its id and store in a variable
const captionText = document.getElementById("random-caption");

// Select the button by its id and store in a variable
const generateButton = document.getElementById("generator-button");

// Add a click event listener to the button
generateButton.addEventListener("click", () => {
  // Generate a random index for the memeArray
  const randomMemeIndex = Math.floor(Math.random() * memeArray.length);
  // Generate a random index for the captionArray
  const randomCaptionIndex = Math.floor(Math.random() * captionArray.length);

  // Change the src attribute of the image to a new meme URL
  memeImage.src = memeArray[randomMemeIndex];

  // Change the innerText of the caption to a new caption
  captionText.innerText = captionArray[randomCaptionIndex];
});

// Add hover effect to change button text
generateButton.addEventListener("mouseenter", () => {
  generateButton.textContent = generateButton.getAttribute("data-text");
});

// Restore original text when hover ends
generateButton.addEventListener("mouseleave", () => {
  generateButton.textContent = "Generate Meme";
});