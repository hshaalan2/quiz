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