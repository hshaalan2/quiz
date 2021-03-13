//note to grading central: I did my best to build my own solution which is commented out at the end of this file but I was not successful. I got stuck at capturing the radio selection of the user. Tried to copy concepts from https://www.sitepoint.com/simple-javascript-quiz/ but could not. I ended up utlizing most of the code form this blogger and modified slightly. I have to submit homework before due date and will have to learn these advanced concepts on my own after submitting homework.  
const quizArea = document.querySelector(".quiz-container");
const startButton = document.querySelector("#start");
const backButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const resetButton  = document.querySelector("#reset");
let correctCount =document.querySelector("#correct");
let incorrectCount = document.querySelector("#incorrect");

//disable reset button on load
resetButton.disabled = true;

//main function containin all sub functions to load questions by iterating through list of questions, choices and correct answer. Inspired by https://www.sitepoint.com/simple-javascript-quiz/

(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }
  function startQuiz (event) {
    quizArea.setAttribute("style", "display:inline-block")
    backButton.setAttribute("style", "display:inline-block ")
    nextButton.setAttribute("style", "display:inline-block ")
    quizArea.setAttribute("style", "display:block ")
    resetButton.disabled = false;
    //timer function to count down 15 minutes or 900 seconds
var timer = 900;
var interval = setInterval(function(){
  document.getElementById('timer').innerHTML=`Seconds remaining ${timer}`;
  timer--;
  if (timer === 0){
    clearInterval(interval);
    document.getElementById('timer').innerHTML='Done';
    // or...
    alert("Sorry You're out of time!");
  }
}, 1000);
    }
    startButton.addEventListener("click", startQuiz);

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    correctCount.innerHTML = `${numCorrect}`;
    incorrectCount.innerHTML = `${myQuestions.length} - ${numCorrect} `
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      // nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "How can you add a comment in a JavaScript?",
      answers: {
        a: "!--This is a comment-->",
        b: "//This is a comment",
        c: "This is a comment",
      },
      correctAnswer: "b"
    },
    {
      question: "How do you call a function named myFunction?",
      answers: {
        a: "call function myFunction()",
        b: "myFunction()",
        c: "myFunction/call",
      },
      correctAnswer: "b"
    },
    {
      question: "How to write an IF statement in JavaScript?",
      answers: {
        a: "if i = 5",
        b: "if (i == 5)",
        c: "if (1 = 5)",
      },
      correctAnswer: "b"
    },
    {
      question: "How does a FOR loop start?",
      answers: {
        a: "for (i <=5,i++)",
        b: "for each i then i++",
        c: "for (i=0,i<=5,i++)"
      },
      correctAnswer: "a"
    },
    {
      question: "What data type is 2021?",
      answers: {
        a: "Number",
        b: "String",
        c: "Boolean"
      },
      correctAnswer: "a"
    },
    {
      question: "What data type is true?",
      answers: {
        a: "Number",
        b: "String",
        c: "Boolean"
      },
      correctAnswer: "c"
    },
    {
      question: "What data type is 12.5 ?",
      answers: {
        a: "Number",
        b: "String",
        c: "Boolean"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the purpose of event.preventDefault()",
      answers: {
        a: "It attaches the event element to the function preventDefault",
        b: "It prevents further propagation of an event through the DOM",
        c: "It cancels the event if it is cancelable",
      },
      correctAnswer: "c"
    },
    {
      question: "Is JavaScript case-sensitive",
      answers: {
        a: "Yes",
        b: "No",
        c: "It depends on the IDE used to write the code"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the proper file extension for a JavaScript file",
      answers: {
        a: ".JSX",
        b: ".JS",
        c: ".Jscript"
      },
      correctAnswer: "b"
    },
    {
      question: "The following is NOT a Javascript data type",
      answers: {
        a: "Boolean",
        b: "Arithmetic",
        c: "String"
      },
      correctAnswer: "b"
    },
    {
      question: "The following is an assignment operator",
      answers: {
        a: "===",
        b: "==",
        c: "="
      },
      correctAnswer: "c"
    },
    {
      question: "The following is a multiplication operator",
      answers: {
        a: "***",
        b: "x",
        c: "*"
      },
      correctAnswer: "c"
    },
    {
      question: "The following is a division operator",
      answers: {
        a: "^",
        b: "/",
        c: "%"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is a correct syntax for a function",
      answers: {
        a: "function () myFunction {}",
        b: "myFunction {function()}",
        c: "{function.myFunction()}"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of the following is a correct syntax for an object",
      answers: {
        a: "var car = (BMW, 2020, X5)",
        b: "var car = {make:BMW, year:2020, model:X5}",
        c: "var car: make${BMW},year${2020},model{X5}",
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is a NOT a commom HTML events",
      answers: {
        a: "onchange",
        b: "onclick",
        c: "onshutdown"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following is a correct syntax for arrays",
      answers: {
        a: "var cars = [Toyata, Mazda, Nissan]",
        b: "var cars = Toyata; Mazda; Nissan",
        c: "var cars: (Toyata, Mazda, Nissan",
      },
      correctAnswer: "a"
    },
    {
      question: "Which of the following is a correct method for array iteration?",
      answers: {
        a: "forEvery{}",
        b: "forEach()",
        c: "forever"
      },
      correctAnswer: "b"
    },
    {
      question: "How do you round the number 7.25, to the nearest integer?",
      answers: {
        a: "rnd(7.25)",
        b: "round(7.25)",
        c: "Math.round(7.25)"
      },
      correctAnswer: "c"
    },

  ];
  

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();




//my own code which failed below
//set query selector variables for screen areas
// const questionArea = document.querySelector("#questions");
// const answerArea = document.querySelector("#answers");
// const startButton = document.querySelector("#start");
// const backButton = document.querySelector("#back");
// const nextButton = document.querySelector("#next");
// const resetButton  = document.querySelector("#reset");
// const radioButton = document.querySelector("#answer");

// //at load disable reset button 
// resetButton.disabled = true;


// //element start button attached a function to hide question and answer divs as well as back and next buttons followed by the event listener to call function on clicking Start

// function startQuiz (event) {
        
//         event.preventDefault();
//         resetButton.disabled = false;
//         startButton.disabled = true;
//         questionArea.setAttribute("style", "display:block");
//         answerArea.setAttribute("style", "display:block");
//         nextButton.setAttribute("style", "display:inline");
//         position = 0;
//         // console.log("position at start is " + position);
//         if (position===0){
//         backButton.setAttribute("style", "display:none");  
//         }
//         else {
//         backButton.setAttribute("style", "display:inline");
//         }
//         }
// startButton.addEventListener("click", startQuiz);

// //***TODO*** make it so it goes back to question 1****element reset button attached a function to start over by clearing all questions, answers and buttons

// function restartQuiz (event) {
        
//     event.preventDefault();
//     resetButton.disabled = true;
//     startButton.disabled = false;
//     questionArea.setAttribute("style", "display:none");
//     answerArea.setAttribute("style", "display:none");
//     nextButton.setAttribute("style", "display:none");
//     position = 0;
//     alert("You are such a quitter. Click Start to start over")
//     console.log("position at start is " + position);
//     if (position===0){
//     backButton.setAttribute("style", "display:none");  
//     }
//     else {
//     backButton.setAttribute("style", "display:inline");
//     }
//     }
// resetButton.addEventListener("click", restartQuiz);

// //set array of objects to hold questions, options and correct answer
// const questions = [
//     {
//      question: "Where is the correct place to insert a JavaScript?",
//      choice: ["Inside the <head> section", "Inside the <body> section", "Inside the <title> section", "Inside either the <head> or the <body> sections"],
//      answer: "Inside either the <head> or the <body> sections",

//     },
//     {
//     question: "Inside which HTML element do we put the JavaScript?",
//     choice: ["<scripting>", "<js>", "<script>", "<javascript>"],
//     answer: "answer1",
   
//        },
//     {
//     question: "What is the correct syntax for referring to an external script called xxx.js?",
//     choice: ["3answer 1", "3answer2", "3answer3", "3answer4"],
//     answer: "answer1",
      
//           },
//     {
//     question: "4?",
//     choice: ["4answer 1", "4answer2", "4answer3", "4answer4"],
//     answer: "answer1",
         
//     },
//     {
//     question: "5?",
//     choice: ["4answer 1", "4answer2", "4answer3", "4answer4"],
//     answer: "answer1",
            
//     },
//     {
//     question: "6?",
//     choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
//     answer: "answer1",
    
//     },
//     {
//     question: "7?",
//     choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
//     answer: "answer1",
    
//     },
//     {
//     question: "8?",
//     choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
//     answer: "answer1",
    
//     },
//     {
//     question: "9?",
//     choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
//     answer: "answer1",
    
//     },
//     {
//     question: "10?",
//     choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
//     answer: "answer1",
    
//     },
//     {
//     question: "11?",
//     choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
//     answer: "answer1",
    
//     },    
//     {
//     question: "12?",
//     choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
//     answer: "answer1",
    
//     },       
    
//     {
//     question: "13?",
//     choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
//     answer: "answer1",
    
//     },
//     {
//     question: "14?",
//     choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
//     answer: "answer1",
    
//     },   
//     {
//     question: "15?",
//     choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
//     answer: "answer1",
//     }, 
// ]



//create function to render question on screen followed by corresponding options added as text (attempts to use radio buttons failed in the alloted time)

//     function renderQuestions (index) {
//         let currentQuestion = questions[index].question;
//         let options = questions[index].choice;
//         questionArea.textContent = currentQuestion;
//         questions[index].choice.forEach(function(element) {
//             var radiobox = document.createElement('input');
//             radiobox.type = 'radio';
//             radiobox.name = 'check';
//             radiobox.id = 'answer';
//             radiobox.value = element;
//             radiobox.onchange = "getValue(this)";
           
//             var label = document.createElement('label')
//             label.htmlFor = 'answer';
           
//             var description = document.createTextNode(element);
//             label.appendChild(description);
           
//             var newline = document.createElement('br');      
           
//             answerArea.appendChild(radiobox);
//             answerArea.appendChild(label);
//             answerArea.appendChild(newline);

  
//         }
//         )

//     }
    
//     //call render questions functions
// renderQuestions(0)
   
   
// // capturing use answer with a var that gets all radio button IDs and an Event listener attached to that var with a function outputs  
// // var userSelection = document.getElementById("answer");
// var userSelectionValue = document.getElementById("answer").value;
// console.log(userSelectionValue)
// // userSelectionValue.addEventListener("change", function() {
//         // event.preventDefault;
        
//         // alert("The value of the radio button is: " + x);
//         // console.log(`Last value I captured of Radio button selection is ${x}`)
//     // }
//     // ),

// //next button function to move forward one position in the Questions array. Hide Back button if we are begining of quiz

// function nextQuestion (event) {
//     // position = 0;
//     answerArea.innerHTML = "";
//     position++;
//     // console.log(position)
//     renderQuestions(position);
//     if (position===0){
//         backButton.setAttribute("style", "display:none");  
//         }
//         else if (position ===14) {
//         nextButton.setAttribute("style", "display:none ");
//         }
//         else {
//             backButton.setAttribute("style", "display:inline") 
//             nextButton.setAttribute("style", "display:inline")
//         }
//     } 
// // nextButton.addEventListener("click", nextQuestion);
// nextButton.addEventListener("click", nextQuestion);

// //back button function to move backwards one position in the Questions array. Hide Next button if we are end of quiz

// function previousQuestion (event) {
//     answerArea.innerHTML = "";
//     position--;
//     // console.log(position)
//     renderQuestions(position);
//     if (position===0){
//         backButton.setAttribute("style", "display:none");  
//         }
//         else if (position ===14) {
//         nextButton.setAttribute("style", "display:none ");
//         }
//         else {
//             backButton.setAttribute("style", "display:inline") 
//             nextButton.setAttribute("style", "display:inline")
//         }
   
//     }
// backButton.addEventListener("click", previousQuestion);



// // event listener for capturing value of selection after clicking a radio box copied from https://www.techiedelight.com/bind-change-event-handler-radio-button-javascript it uses the arrow function https://www.w3schools.com/js/js_arrow_function.asp
// // var radios = document.querySelectorAll('input[type=radio][name="check"]');
// // radios.forEach(radio => radio.addEventListener('change', () => console.log(radio.value)));


// // var radios = document.querySelectorAll('input[type=radio][name="check"]');
// // radios.forEach(radio => radio.addEventListener('change', captureRadio));

// // function captureRadio () {
// //     console.log(radios.value);
