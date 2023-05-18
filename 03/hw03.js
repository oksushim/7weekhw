const tmi = [
    {
        question : "내가 사는 곳은?",
        answer : "영등포구",
    },
    {
        question : "나의 반려동물은?",
        answer : "거북이",
    },
    {
        question : "나의 키는?",
        answer : "160cm",
    },
    {
        question : "나의 취미는?",
        answer : "블로그 작성",
    },
    {
        question : "내가 싫어하는 음식은?",
        answer : "곱창, 회, 오돌뼈",
    },
];

const question = document.getElementById("tmi").firstElementChild;
const answer = document.getElementById("tmi").lastElementChild;
const todaysTmi = tmi[Math.floor(Math.random()*5)];

question.innerText = "⭐" + todaysTmi.question
answer.innerText = todaysTmi.answer;