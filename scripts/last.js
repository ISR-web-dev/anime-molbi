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

    document.querySelector('.result').innerHTML = 'Fill The form by clicking the Button below and get your certificate Now!';
    document.querySelector('.next-q').innerHTML = 'Get Certificate';
    document.querySelector('.next-link').setAttribute(`href`, `https://forms.gle/aSPAoEJCv7F2RZ2d9`);

    setTimeout(function() {
        document.querySelector('.main-img').setAttribute('src', 'images/Conragulations.jpg');
        document.querySelector('.answers').innerHTML = 'Congratulations! Your Are Now A Anime Molbi. You can get Certified as an Anime Molbi By Completing the steps Given Below.<br> Get You Certificate Now!';
        document.querySelector('.answers').classList.add('last');
    }, 500);
    


});
document.querySelector('.wrong2').addEventListener('click', () => {
    document.querySelector('.wrong2').setAttribute('style', 'background-color: red;');
    document.querySelector('.correct').setAttribute('style', 'background-color: green;');

    document.querySelector('.result').innerHTML = 'Fill The form by clicking the Button below and get your certificate Now!';
    document.querySelector('.next-q').innerHTML = 'Get Certificate';
    document.querySelector('.next-link').setAttribute(`href`, `https://forms.gle/aSPAoEJCv7F2RZ2d9`);

    setTimeout(function() {
        document.querySelector('.main-img').setAttribute('src', 'images/Conragulations.jpg');
        document.querySelector('.answers').innerHTML = 'Congratulations! Your Are Now A Anime Molbi. You can get Certified as an Anime Molbi By Completing the steps Given Below.<br> Get You Certificate Now!';
        document.querySelector('.answers').classList.add('last');
    }, 500);



});
document.querySelector('.wrong3').addEventListener('click', () => {
    document.querySelector('.wrong3').setAttribute('style', 'background-color: red;');
    document.querySelector('.correct').setAttribute('style', 'background-color: green;');

    document.querySelector('.result').innerHTML = 'Fill The form by clicking the Button below and get your certificate Now!';
    document.querySelector('.next-q').innerHTML = 'Get Certificate';
    document.querySelector('.next-link').setAttribute(`href`, `https://forms.gle/aSPAoEJCv7F2RZ2d9`);


    setTimeout(function() {
        document.querySelector('.main-img').setAttribute('src', 'images/Conragulations.jpg');
        document.querySelector('.answers').innerHTML = 'Congratulations! Your Are Now A Anime Molbi. You can get Certified as an Anime Molbi By Completing the steps Given Below.<br> Get You Certificate Now!';
        document.querySelector('.answers').classList.add('last');
    }, 500);



});

document.querySelector('.correct').addEventListener('click', () => {
    document.querySelector('.result').innerHTML = 'Right Answer! Completed';
    document.querySelector('.correct').setAttribute('style', 'background-color: green;');

    document.querySelector('.result').innerHTML = 'Fill The form by clicking the Button below and get your certificate Now!';
    document.querySelector('.next-q').innerHTML = 'Get Certificate';
    document.querySelector('.next-link').setAttribute(`href`, `https://forms.gle/aSPAoEJCv7F2RZ2d9`);

    setTimeout(function() {
        document.querySelector('.main-img').setAttribute('src', 'images/Conragulations.jpg');
        document.querySelector('.answers').innerHTML = 'Congratulations! Your Are Now A Anime Molbi. You can get Certified as an Anime Molbi By Completing the steps Given Below.<br> Get You Certificate Now!';
        document.querySelector('.answers').classList.add('last');
    }, 500);

});
