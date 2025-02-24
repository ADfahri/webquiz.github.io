window.onload = function() {
  // Retrieve the score from localStorage
  const score = localStorage.getItem('quizScore');

  // Display the score
  const scoreValueElement = document.getElementById("score-value");
  scoreValueElement.textContent = score;

  // Provide feedback based on the score
  const feedbackElement = document.getElementById("feedback");
  if (score == 10) {
    feedbackElement.textContent = "You really are the exclusive member of Candaan Bermartabat!";
    showVideoPopup(); // Show the video popup for perfect score
  } else if (score >= 9) {
    feedbackElement.textContent = "You are almost there to become an exclusive member of Candaan Bermartabat.";
  } else if (score >= 8) {
    feedbackElement.textContent = "You're just a man with a little bad racism.";
  } else if (score >= 7) {
    feedbackElement.textContent = "Now you can proudly shout to people that you are racist.";
  } else if (score >= 5) {
    feedbackElement.textContent = "Meh, just average racist people.";
  } else if (score >= 4) {
    feedbackElement.textContent = "Are you really a racist man?";
  } else if (score >= 3) {
    feedbackElement.textContent = "You're not normal people who hide to be racist, are you?";
  } else if (score >= 2) {
    feedbackElement.textContent = "Good job, retard. Did you think you could trick me by hiding like rats?";
  } else {
    feedbackElement.textContent = "HAHA STUPID RETARD, JUST GO FUCK YOURSELF AND EAT THAT FUCKING VEGETABLE UNTIL YOU CAN FARM IT IN YOUR ASS!!";
  }
};

// Show video popup
function showVideoPopup() {
    document.getElementById("videoPopup").style.display = "flex";
}

// Close video popup
function closePopup() {
    document.getElementById("videoPopup").style.display = "none";
}
