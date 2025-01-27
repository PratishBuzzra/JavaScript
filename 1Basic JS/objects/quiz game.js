let questions = [];
const question1 = {
  category: 'HTML',
  question: "What does HTML stand for?",
  choices: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlink Text Markup Language"],
  answer: "Hyper Text Markup Language"
}
const question2 = {
  category: 'CSS',
  question: "What does CSS stand for?",
  choices: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
  answer: "Cascading Style Sheets"
}
const question3 = {
  category: 'JavaScript',
  question: "What is the correct syntax to print \"Hello, World!\" in JavaScript?",
  choices: ["echo(\"Hello, World!\");", "console.print(\"Hello, World!\");", "console.log(\"Hello, World!\");"],
  answer: "console.log(\"Hello, World!\");"
}
const question4 = {
  category: 'Python',
  question: "What is the correct way to declare a variable in Python?",
  choices: ["int x = 10", "x = 10", "let x = 10"],
  answer: "x = 10"
}
const question5 = {
  category: 'C Program',
  question: "How do you declare a pointer in C?",
  choices: ["int* p;", "pointer p;", "*int p;"],
  answer: "int* p;"
}
questions.push(question1, question2, question3, question4, question5);

function getRandomQuestion(){
  return questions[Math.floor(Math.random() * questions.length)];
}


function getRandomComputerChoice(choices){
  
      return choices[Math.floor(Math.random() * choices.length)]   
  }

const selectedQuestion = getRandomQuestion();
console.log(selectedQuestion.question);
const randomChoice = getRandomComputerChoice(selectedQuestion.choices);
console.log(randomChoice);
selectedQuestion.answer
function getResults(selectedQuestion, computerChoice){
  if(computerChoice === selectedQuestion.answer){
    return "The computer's choice is correct!"
  }
  else{
    return `The computer's choice is wrong. The correct answer is: ${selectedQuestion.answer}`
  }

}
console.log(getResults(selectedQuestion, randomChoice));