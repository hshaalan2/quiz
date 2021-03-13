//set query selector variables for screen areas
const questionArea = document.querySelector("#questions");
const answerArea = document.querySelector("#answers");
const startButton = document.querySelector("#start");
const backButton = document.querySelector("#back");
const nextButton = document.querySelector("#next");
const resetButton  = document.querySelector("#reset");
const radioButton = document.querySelector("#answer");

//at load disable reset button 
resetButton.disabled = true;


//element start button attached a function to hide question and answer divs as well as back and next buttons followed by the event listener to call function on clicking Start

function startQuiz (event) {
        
        event.preventDefault();
        resetButton.disabled = false;
        startButton.disabled = true;
        questionArea.setAttribute("style", "display:block");
        answerArea.setAttribute("style", "display:block");
        nextButton.setAttribute("style", "display:inline");
        position = 0;
        // console.log("position at start is " + position);
        if (position===0){
        backButton.setAttribute("style", "display:none");  
        }
        else {
        backButton.setAttribute("style", "display:inline");
        }
        }
startButton.addEventListener("click", startQuiz);

//***TODO*** make it so it goes back to question 1****element reset button attached a function to start over by clearing all questions, answers and buttons

function restartQuiz (event) {
        
    event.preventDefault();
    resetButton.disabled = true;
    startButton.disabled = false;
    questionArea.setAttribute("style", "display:none");
    answerArea.setAttribute("style", "display:none");
    nextButton.setAttribute("style", "display:none");
    position = 0;
    alert("You are such a quitter. Click Start to start over")
    console.log("position at start is " + position);
    if (position===0){
    backButton.setAttribute("style", "display:none");  
    }
    else {
    backButton.setAttribute("style", "display:inline");
    }
    }
resetButton.addEventListener("click", restartQuiz);

//set array of objects to hold questions, options and correct answer
const questions = [
    {
     question: "Where is the correct place to insert a JavaScript?",
     choice: ["Inside the <head> section", "Inside the <body> section", "Inside the <title> section", "Inside either the <head> or the <body> sections"],
     answer: "Inside either the <head> or the <body> sections",

    },
    {
    question: "Inside which HTML element do we put the JavaScript?",
    choice: ["<scripting>", "<js>", "<script>", "<javascript>"],
    answer: "answer1",
   
       },
    {
    question: "What is the correct syntax for referring to an external script called xxx.js?",
    choice: ["3answer 1", "3answer2", "3answer3", "3answer4"],
    answer: "answer1",
      
          },
    {
    question: "4?",
    choice: ["4answer 1", "4answer2", "4answer3", "4answer4"],
    answer: "answer1",
         
    },
    {
    question: "5?",
    choice: ["4answer 1", "4answer2", "4answer3", "4answer4"],
    answer: "answer1",
            
    },
    {
    question: "6?",
    choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
    answer: "answer1",
    
    },
    {
    question: "7?",
    choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
    answer: "answer1",
    
    },
    {
    question: "8?",
    choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
    answer: "answer1",
    
    },
    {
    question: "9?",
    choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
    answer: "answer1",
    
    },
    {
    question: "10?",
    choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
    answer: "answer1",
    
    },
    {
    question: "11?",
    choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
    answer: "answer1",
    
    },    
    {
    question: "12?",
    choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
    answer: "answer1",
    
    },       
    
    {
    question: "13?",
    choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
    answer: "answer1",
    
    },
    {
    question: "14?",
    choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
    answer: "answer1",
    
    },   
    {
    question: "15?",
    choice: ["6answer 1", "6answer2", "6answer3", "6answer4"],
    answer: "answer1",
    }, 
]



//create function to render question on screen followed by corresponding options added as text (attempts to use radio buttons failed in the alloted time)

    function renderQuestions (index) {
        let currentQuestion = questions[index].question;
        let options = questions[index].choice;
        questionArea.textContent = currentQuestion;
        questions[index].choice.forEach(function(element) {
            var radiobox = document.createElement('input');
            radiobox.type = 'radio';
            radiobox.name = 'check';
            radiobox.id = 'answer';
            radiobox.value = element;
            radiobox.onchange = "getValue(this)";
           
            var label = document.createElement('label')
            label.htmlFor = 'answer';
           
            var description = document.createTextNode(element);
            label.appendChild(description);
           
            var newline = document.createElement('br');      
           
            answerArea.appendChild(radiobox);
            answerArea.appendChild(label);
            answerArea.appendChild(newline);

  
        }
        )

    }
    
    //call render questions functions
renderQuestions(0)
   
   
// capturing use answer with a var that gets all radio button IDs and an Event listener attached to that var with a function outputs  
// var userSelection = document.getElementById("answer");
var userSelectionValue = document.getElementById("answer").value;
console.log(userSelectionValue)
// userSelectionValue.addEventListener("change", function() {
        // event.preventDefault;
        
        // alert("The value of the radio button is: " + x);
        // console.log(`Last value I captured of Radio button selection is ${x}`)
    // }
    // ),

//next button function to move forward one position in the Questions array. Hide Back button if we are begining of quiz

function nextQuestion (event) {
    // position = 0;
    answerArea.innerHTML = "";
    position++;
    // console.log(position)
    renderQuestions(position);
    if (position===0){
        backButton.setAttribute("style", "display:none");  
        }
        else if (position ===14) {
        nextButton.setAttribute("style", "display:none ");
        }
        else {
            backButton.setAttribute("style", "display:inline") 
            nextButton.setAttribute("style", "display:inline")
        }
    } 
// nextButton.addEventListener("click", nextQuestion);
nextButton.addEventListener("click", nextQuestion);

//back button function to move backwards one position in the Questions array. Hide Next button if we are end of quiz

function previousQuestion (event) {
    answerArea.innerHTML = "";
    position--;
    // console.log(position)
    renderQuestions(position);
    if (position===0){
        backButton.setAttribute("style", "display:none");  
        }
        else if (position ===14) {
        nextButton.setAttribute("style", "display:none ");
        }
        else {
            backButton.setAttribute("style", "display:inline") 
            nextButton.setAttribute("style", "display:inline")
        }
   
    }
backButton.addEventListener("click", previousQuestion);



// event listener for capturing value of selection after clicking a radio box copied from https://www.techiedelight.com/bind-change-event-handler-radio-button-javascript it uses the arrow function https://www.w3schools.com/js/js_arrow_function.asp
// var radios = document.querySelectorAll('input[type=radio][name="check"]');
// radios.forEach(radio => radio.addEventListener('change', () => console.log(radio.value)));


// var radios = document.querySelectorAll('input[type=radio][name="check"]');
// radios.forEach(radio => radio.addEventListener('change', captureRadio));

// function captureRadio () {
//     console.log(radios.value);
