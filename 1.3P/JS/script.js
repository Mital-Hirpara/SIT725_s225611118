function changeText() {

  const texts = [
    "Apple",
    "Banana",
    "guava",
    "pienapple",
    "watermelon"
  ];

  const randomIndex = Math.floor(Math.random() * texts.length);

  document.getElementById("displayText").innerText = texts[randomIndex];
}