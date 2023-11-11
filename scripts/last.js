let questionCount = 2;
questionCount = localStorage.getItem("questionCountSave");

const questionNumber = document.querySelector('title').innerHTML;

if (questionNumber === 'Anime Molbi') {
    questionCount = 2;
} 
else if (questionNumber === `Question-${questionCount}`) {
    questionCount++;
}

console.log(questionCount);
localStorage.setItem("questionCountSave", questionCount);




document.querySelector('.wrong1').addEventListener('click', () => {
    document.querySelector('.wrong1').setAttribute('style', 'background-color: red;');
    document.querySelector('.correct').setAttribute('style', 'background-color: green;');

    document.querySelector('.result').innerHTML = 'Wrong Answer! Completed';


});
document.querySelector('.wrong2').addEventListener('click', () => {
    document.querySelector('.wrong2').setAttribute('style', 'background-color: red;');
    document.querySelector('.correct').setAttribute('style', 'background-color: green;');

    document.querySelector('.result').innerHTML = 'Wrong Answer! Completed';



});
document.querySelector('.wrong3').addEventListener('click', () => {
    document.querySelector('.wrong3').setAttribute('style', 'background-color: red;');
    document.querySelector('.correct').setAttribute('style', 'background-color: green;');

    document.querySelector('.result').innerHTML = 'Wrong Answer! Completed';



});

document.querySelector('.correct').addEventListener('click', () => {
    document.querySelector('.result').innerHTML = 'Right Answer! Completed';

    document.querySelector('.correct').setAttribute('style', 'background-color: green;');

});