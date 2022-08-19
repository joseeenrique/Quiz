const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true  
let score = 0
let questionCounter = 0
let availableQuestions = {}

let questions = [
    {
        question: "What is JavaScript?",
        choice1: "a programming language",
        choice2: "game app for phones",
        choice3: "coffee shop",
        choice4: "type of drink", 
        answer: 1,
    },
    {
        question: "Which one is not a javascript framework?",
        choice1: "Node.js",
        choice2: "Angular.js",
        choice3: "React.js",
        choice4: "view.js", 
        answer: 4,
    },
    {
        question: "Where does javacript link go on html?",
        choice1: "head",
        choice2: "end of body",
        choice3: "end of footer",
        choice4: "inside a <div>", 
        answer: 2,
    },
    {
        question: "What can Javacript do?",
        choice1: "create mobile apps",
        choice2: "front end development",
        choice3: "back end development",
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
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("./end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener("click", e =>{
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score+=num
    scoreText.innerText = score
}
startGame()