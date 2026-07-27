
function updateDateTime() {
    let now = new Date();

    document.getElementById("datetime").innerHTML =
        now.toLocaleDateString() + " | " + now.toLocaleTimeString();
}

setInterval(updateDateTime, 1000);
updateDateTime();

let username = "";
let score = 0;
let currentQuestion = 0;
let selectedAnswer = "";
let timer;
let timeLeft = 10;
let questions = [];

// --------------------
// Quiz Questions
// --------------------

const quizData = {

technology: [

{
question:"Who developed Java?",
options:["James Gosling","Dennis Ritchie","Guido van Rossum","Bjarne Stroustrup"],
answer:"James Gosling"
},

{
question:"CPU stands for?",
options:[
"Central Process Unit",
"Central Processing Unit",
"Computer Processing Unit",
"Central Processor Utility"
],
answer:"Central Processing Unit"
},

{
question:"Which language is used for web page styling?",
options:["HTML","Python","CSS","C++"],
answer:"CSS"
},

{
question:"Which company developed Windows?",
options:["Google","Microsoft","Apple","IBM"],
answer:"Microsoft"
},

{
question:"HTML is used for?",
options:[
"Database",
"Programming",
"Web Structure",
"Operating System"
],
answer:"Web Structure"
},

{
question:"Which device stores permanent data?",
options:["RAM","Cache","ROM","Register"],
answer:"ROM"
},

{
question:"Which is an Operating System?",
options:["Chrome","Windows","Intel","Python"],
answer:"Windows"
},

{
question:"JavaScript is mainly used for?",
options:[
"Machine Learning",
"Database",
"Web Development",
"Networking"
],
answer:"Web Development"
},

{
question:"Which one is NOT a programming language?",
options:["Java","Python","Oracle","C++"],
answer:"Oracle"
},

{
question:"The brain of a computer is?",
options:["RAM","CPU","Monitor","Mouse"],
answer:"CPU"
}

],

zoology:[

{
question:"Largest mammal is?",
options:["Elephant","Blue Whale","Rhino","Hippo"],
answer:"Blue Whale"
},

{
question:"Which animal is called King of the Jungle?",
options:["Tiger","Lion","Leopard","Wolf"],
answer:"Lion"
},

{
question:"How many legs does a spider have?",
options:["6","8","10","12"],
answer:"8"
},

{
question:"Which bird cannot fly?",
options:["Eagle","Penguin","Crow","Parrot"],
answer:"Penguin"
},

{
question:"Which animal lays eggs?",
options:["Cow","Goat","Hen","Dog"],
answer:"Hen"
},

{
question:"Fastest land animal?",
options:["Tiger","Leopard","Cheetah","Horse"],
answer:"Cheetah"
},

{
question:"Largest reptile?",
options:["Python","Crocodile","Komodo Dragon","Lizard"],
answer:"Crocodile"
},

{
question:"National animal of India?",
options:["Lion","Tiger","Elephant","Peacock"],
answer:"Tiger"
},

{
question:"Which animal is known as Ship of the Desert?",
options:["Horse","Camel","Yak","Buffalo"],
answer:"Camel"
},

{
question:"Which fish is the largest?",
options:["Shark","Whale Shark","Tuna","Salmon"],
answer:"Whale Shark"
}

],

world:[],

politics:[]

};

function startQuiz(){

username = document.getElementById("username").value.trim();

if(username==""){
    alert("Please enter your name.");
    return;
}

let domain =
document.getElementById("domain").value;

questions = quizData[domain];

score = 0;
currentQuestion = 0;

document.getElementById("loginPage").classList.add("hide");

document.getElementById("quizPage").classList.remove("hide");

document.getElementById("userDisplay").innerHTML =
username;

document.getElementById("domainDisplay").innerHTML =
domain.toUpperCase();

loadQuestion();

}
// ---------------- World Questions ----------------

quizData.world = [

{
question:"What is the capital of Australia?",
options:["Sydney","Melbourne","Canberra","Perth"],
answer:"Canberra"
},

{
question:"Which is the largest continent?",
options:["Africa","Europe","Asia","North America"],
answer:"Asia"
},

{
question:"Mount Everest is located in?",
options:["India","Nepal","China","Bhutan"],
answer:"Nepal"
},

{
question:"Which country is known as the Land of the Rising Sun?",
options:["China","Japan","Thailand","South Korea"],
answer:"Japan"
},

{
question:"The longest river in the world is?",
options:["Amazon","Nile","Ganga","Yangtze"],
answer:"Nile"
},

{
question:"Which country has the largest population?",
options:["India","China","USA","Russia"],
answer:"India"
},

{
question:"Which desert is the largest hot desert?",
options:["Sahara","Thar","Arabian","Gobi"],
answer:"Sahara"
},

{
question:"Which ocean is the largest?",
options:["Atlantic","Indian","Pacific","Arctic"],
answer:"Pacific"
},

{
question:"The Statue of Liberty is in?",
options:["Canada","USA","France","England"],
answer:"USA"
},

{
question:"Which country hosted the 2024 Olympics?",
options:["China","France","Japan","USA"],
answer:"France"
}

];

quizData.politics = [

{
question:"Who is known as the Father of the Indian Constitution?",
options:[
"Jawaharlal Nehru",
"B. R. Ambedkar",
"Mahatma Gandhi",
"Sardar Patel"
],
answer:"B. R. Ambedkar"
},

{
question:"How many Houses are there in the Indian Parliament?",
options:["1","2","3","4"],
answer:"2"
},

{
question:"The President of India is elected for how many years?",
options:["4","5","6","7"],
answer:"5"
},

{
question:"The lower house of Parliament is called?",
options:[
"Rajya Sabha",
"Lok Sabha",
"Vidhan Sabha",
"Cabinet"
],
answer:"Lok Sabha"
},

{
question:"Voting age in India is?",
options:["16","18","20","21"],
answer:"18"
},

{
question:"The Constitution of India came into force on?",
options:[
"15 August 1947",
"26 January 1950",
"26 November 1949",
"2 October 1948"
],
answer:"26 January 1950"
},

{
question:"Who appoints the Prime Minister of India?",
options:[
"Chief Justice",
"President",
"Governor",
"Speaker"
],
answer:"President"
},

{
question:"India is a?",
options:[
"Monarchy",
"Republic",
"Dictatorship",
"Empire"
],
answer:"Republic"
},

{
question:"The Election Commission of India is a?",
options:[
"Private Body",
"Constitutional Body",
"NGO",
"Company"
],
answer:"Constitutional Body"
},

{
question:"The National Anthem of India was written by?",
options:[
"Rabindranath Tagore",
"Bankim Chandra",
"Premchand",
"Subhash Bose"
],
answer:"Rabindranath Tagore"
}

];

function loadQuestion(){

    clearInterval(timer);

    selectedAnswer = "";
    timeLeft = 10;

    document.getElementById("timer").innerHTML = timeLeft;

    document.getElementById("score").innerHTML = score;

    let q = questions[currentQuestion];

    document.getElementById("questionNo").innerHTML =
    (currentQuestion + 1) + " / " + questions.length;

    document.getElementById("question").innerHTML =
    q.question;

    let html = "";

    q.options.forEach(function(option){

        html +=
        `<div class="option"
        onclick="selectOption(this,'${option}')">
        ${option}
        </div>`;

    });

    document.getElementById("options").innerHTML = html;

    startTimer();

}

function selectOption(element, answer){

    let all =
    document.querySelectorAll(".option");

    all.forEach(function(item){
        item.classList.remove("selected");
    });

    element.classList.add("selected");

    selectedAnswer = answer;

}

function startTimer(){

    timer = setInterval(function(){

        timeLeft--;

        document.getElementById("timer").innerHTML =
        timeLeft;

        if(timeLeft <= 0){

            clearInterval(timer);

            nextQuestion();

        }

    },1000);

}

document.getElementById("nextBtn")
.addEventListener("click",nextQuestion);

function nextQuestion(){

    clearInterval(timer);

    if(selectedAnswer ==
    questions[currentQuestion].answer){

        score++;

    }

    currentQuestion++;

    if(currentQuestion < questions.length){

        loadQuestion();

    }

    else{

        showResult();

    }

}
function showResult(){

    document.getElementById("quizPage")
    .classList.add("hide");

    document.getElementById("resultPage")
    .classList.remove("hide");

    let percentage =
    (score/questions.length)*100;

    document.getElementById("resultName").innerHTML =
    "Name : " + username;

    document.getElementById("resultDomain").innerHTML =
    "Domain : " +
    document.getElementById("domain").value.toUpperCase();

    document.getElementById("resultMarks").innerHTML =
    "Marks : " + score + " / " + questions.length;

    document.getElementById("resultPercentage").innerHTML =
    "Percentage : " + percentage.toFixed(2) + "%";

    if(percentage >= 50){

        document.getElementById("resultStatus").innerHTML =
        "PASS ✅";

        document.getElementById("resultStatus").style.color =
        "green";

    }
    else{

        document.getElementById("resultStatus").innerHTML =
        "FAIL ❌";

        document.getElementById("resultStatus").style.color =
        "red";

    }

}