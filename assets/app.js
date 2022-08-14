const question= document.querySelector("#question");
const choices= Array.from.querySelectorAll(".choice-text");
const progressText= document.querySelector("#progressText");
const scoreText= document.querySelector("#score");
const progressBarFull= document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true  
let score = 0
let questionCounter = 0
let availableQuestions = {}

let questions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "Javascript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log", 
        answer: 1,
    },
    {
        question: "The condition in an if/else statement is enclosed with _________.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parenthesis",
        choice4: "square brackets", 
        answer: 3,
    },
    {
        question: "Commonly used data types do not include",
        choice1: "strings",
        choice2: "boleans",
        choice3: "alerts",
        choice4: "numbers", 
        answer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above", 
        answer: 4,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}
getNewQuestion = () => {
    if(availableQuestions.lenght === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score)
        return window.location.assign(./end.html)
    }
    questionCounter++
    progressText.innerText = `question${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS)* 100}%`
    const questionIndex = Math.floor(math.random() * availableQuestions.lenght)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
}