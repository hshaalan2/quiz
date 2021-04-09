# quiz app
GitHub repository: https://github.com/hshaalan2/quiz

App URL: https://hshaalan2.github.io/quiz/

Overview:

While the deployed app presents the user with a JavaScript Quiz, it could be refactored for any type of quiz. The quiz's time limit, questions, answer choices, scoring criteria can be easily customized to suit a variety of purposes.

Components:

The Quiz app uses JavaScript and jQuery to render questions from an array of objects to the screen.  Each object contains properties for the question, each answer, and the correct answer. A main function containing all sub functions to load questions by iterating through list of questions, choices and correct answer. The forEach loop is used to cycle through each questions.  We used conditionals to evaluate if the selected answer matches the correct answer in the question object. I used a function to control the Previous and Next buttons to cycle through. Used the setInterval function to set a time limit for the quiz.  Used another function to tally the correct and incorrect answers and present to user at the very end.
