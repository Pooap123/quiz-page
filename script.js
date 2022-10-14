const quizDB = [
    {
        question: `Q1: What is the national game of india?`,
        a:`football`, 
        b:`hockey`, 
        c:`cricket`, 
        d:`vollyball`,
        ans: "ans2"
    },
    {
        question: `Q2: What is the capital of India?`,
        a: `New Delhi`, 
        b:`Abuja`, 
        c:`Mumbai`,
        d: `Aba`,
        ans: "ans1"
    },
    {
        question: `Q3: india's largest city by population?`,
        a:`Delhi`, 
        b:`Pune`, 
        c:`Mumbai`, 
        d:`chennai`,
        ans: 'ans3'
    },
    {
        question: `Q4: Which of the following dances is a solo dance??`,
       a:`Ottan Thullal`,
       b: `Kuchipudi`,
       c: `Yakshagana`, 
       d:`AOdissi`,
        ans: `ans1`
    },
    {
        question: `Q5: 	
        The National Anthem was first sung in the year?`,
       a:`1911`,
       b: `1913`,
       c: `1936`,
       d: `1935`,
        ans: `ans1`
    }
];

const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('#submit');

const answers=document.querySelectorAll(".answer");

const showScore=document.querySelector("#showScore");

let questionCount=0;
let score=0;

const loadQuestion=()=>{
    const questionList=quizDB[questionCount];
    question.innerText=questionList.question;

    option1.innerText=questionList.a
    option2.innerText=questionList.b
    option3.innerText=questionList.c
    option4.innerText=questionList.d

};
loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    
    answers.forEach((CurAnsElem)=>{
        if (CurAnsElem.checked){
            answer=CurAnsElem.id;
        }
    });
    return answer;

}
submit.addEventListener('click', ()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer===quizDB[questionCount].ans){
    score++;
    };

    questionCount++;

    if (questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML=`
           <h3> You scored ${score}/${quizDB.length} ✌️<h3>
           <button class="btn" onclick.reload()"> Play Again </button>
        `;

        showScore.classList.remove("scoreArea");
    }

});
