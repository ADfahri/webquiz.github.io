function evaluateQuiz() {
    let score = 0;
  
    // Correct answers
    const correctAnswers = {
      q1: "C",
      q2: "B",
      q3: "D",
      q4: "B",
      q5: "A",
      q6: "D",
      q7: "D",
      q8: "A",
      q9: "B",
      q10: "C",
    };
  
    // Get selected answers
    const form = document.getElementById("quizForm");
    const formData = new FormData(form);
  
    // Evaluate answers
    for (let [question, answer] of formData.entries()) {
      if (correctAnswers[question] === answer) {
        score++;
      }
    }
  
    // Store score in localStorage
    localStorage.setItem('quizScore', score);
  }
  
  function redirectToNextPage() {
    evaluateQuiz(); // Ensure that the quiz is evaluated before redirecting
    window.location.href = "score.html"; // Redirect to results page
  }
  