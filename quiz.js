// Lab Assignment 4 - Simple JavaScript Quiz
// Made by a first semester student :)

// 1) Array of quiz questions (each question is an object)
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which language is used for styling web pages?", answer: "css" },
    { question: "JavaScript runs in which environment? (browser/node)", answer: "browser" }
];

// 2) Function to run the quiz
function runQuiz() {
    let score = 0; // 3) score set to zero at the beginning

    // 4) loop through all questions
    for (let i = 0; i < quizQuestions.length; i++) {

        // 5) ask question using prompt
        let userAnswer = prompt(quizQuestions[i].question);

        // 6) normalize input (lowercase + trim)
        userAnswer = userAnswer.toLowerCase().trim();

        // 7) check if answer is correct
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Wrong 😢. Correct answer is: " + quizQuestions[i].answer);
        }
    }

    // 9) show final score
    alert("Quiz Finished!\nYour Score: " + score + " out of " + quizQuestions.length);
}

// 10) run quiz
runQuiz();
